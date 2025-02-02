import type { Metadata } from 'next'
import { PageProps } from '@/storyblok'
import { fetchStory } from '@/helper-functions/storyblok-fetch'
import {
  storyblokEditable,
  StoryblokStory
} from "@storyblok/react/rsc";
import { format } from 'date-fns'
import { notFound } from 'next/navigation'

export const generateMetadata = async (props: PageProps): Promise<Metadata> => {
  const pageSlug = (await props?.params).page;
  const content = await fetchStory('published', pageSlug)
  const {
    seo_title,
    seo_description,
    component,
    title, //* used for blog post page
    featured_image, //* used for blog post page
    book_cover 
  } = content?.data?.story?.content
  const { 
    full_slug
  } = content?.data?.story
  if (component === 'blogPage') {
    return {
      title: title,
      description: seo_description,
      alternates: {
        canonical: `/${full_slug}`
      },
      openGraph: {
        images: featured_image[0]?.file?.filename
      }
    }
  } else if (component === 'bookPage') {
    return {
      title: seo_title,
      description: seo_description,
      alternates: {
        canonical: `/${full_slug}`
      },
      openGraph: {
        images: book_cover[0]?.file?.filename
      }
    }
  } else {
    return {
      title: seo_title,
      description: seo_description,
      alternates: {
        canonical: `/${full_slug}`
      }
    }
  }
}

export default async function Page(props: PageProps) {
  const slug = (await props?.params).page;
  let content
  try {
    content = await fetchStory('published', slug);
  } catch {
    return notFound();
  }
  let jsonLd = {}

  if (content?.data?.story?.content?.component === 'bookPage') {
    jsonLd = {
      '@context': 'https://schema.org',
      "@type": "Book",
      "author": {
        "@type": "Person",
        "givenName": "Tennyson",
        "familyName": "Flint",
        "additionalName": "Augusta Gilmor",
        "image": {
          "@type": "ImageObject",
          "url": "https://a.storyblok.com/f/320446/440x440/21006da3ff/d856641e-d5ae-40b2-8955-006307e9762c-1.png",
          "width": "150",
          "height": "150"
        }
      },
      "copyrightYear": content?.data?.story?.content?.copyright_year,
      "genre": content?.data?.story?.content?.genre,
      "about": content?.data?.story?.content?.about,
      "description": content?.data?.story?.content?.about,
      "image": content?.data?.story?.content?.book_cover[0]?.file?.filename,
      "url": `https://tennysonflint.com/${content?.data?.story?.full_slug}}`,
      "inLanguage": "en-US",
      "isbn": content?.data?.story?.content?.isbn,
      "numberOfPages": content?.data?.story?.content?.number_of_pages,
      "isFamilyFriendly": content?.data?.story?.content?.family_friendly,
      "name": content?.data?.story?.content?.book_title,
      "countryOfOrigin": {
        "@type": "Country",
        "name": "USA"
      },
      "audience": {
        "@type": "Audience",
        "name": content?.data?.story?.content?.audience
      },
      "datePublished": format(content?.data?.story?.content?.book_published_date, 'yyyy-MM-dd')
    }
  } else if (content?.data?.story?.content?.component === 'blogPage') {
    jsonLd = {
      '@context': 'https://schema.org',
      "@type": "BlogPosting",
      "mainEntityOfPage": `https://tennysonflint.com/${content?.data?.story?.full_slug}}`,
      "headline": content?.data?.story?.content?.title,
      "name": content?.data?.story?.content?.title,
      "description": content?.data?.story?.content?.excerpt,
      "about": content?.data?.story?.content?.excerpt,
      "author": {
        "@type": "Person",
        "givenName": "Tennyson",
        "familyName": "Flint",
        "additionalName": "Augusta Gilmor",
        "image": {
          "@type": "ImageObject",
          "url": "https://a.storyblok.com/f/320446/440x440/21006da3ff/d856641e-d5ae-40b2-8955-006307e9762c-1.png",
          "width": "150",
          "height": "150"
        }
      },
      "isPartOf": {
        "@type" : "Blog",
        "@id": "https://tennysonflint.com/blog",
        "name": "Tennyson Flint Blog",
      },
      "datePublished": format(content?.data?.story?.content?.published_date, 'yyyy-MM-dd'),
      "image": {
        "@type": "ImageObject",
        "@id": content?.data?.story?.content?.featured_image[0]?.file.filename,
        "url": content?.data?.story?.content?.featured_image[0]?.file.filename,
        "width": content?.data?.story?.content?.featured_image[0]?.width,
        "height": content?.data?.story?.content?.featured_image[0]?.height,
      },
      "inLanguage": "en-US",
      "copyrightYear": format(content?.data?.story?.content?.published_date, 'yyyy'),
    }
  }
  return (
    <>
      <div className='relative grow'>
        {(content?.data?.story?.content?.component === 'bookPage' || content?.data?.story?.content?.component === 'blogPage') &&
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
          />
        }
        <main className='min-h-screen relative'
          {...storyblokEditable(props.blok)}
        >
          <StoryblokStory story={content?.data?.story} />
        </main>
      </div>
    </>
  );
}
