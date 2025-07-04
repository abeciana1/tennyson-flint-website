import type { Metadata } from 'next'
import { PageProps } from '@/storyblok'
import { fetchStory } from '@/helper-functions/storyblok-fetch'
import {
  StoryblokStory
} from "@storyblok/react/rsc";
import { notFound } from 'next/navigation'
import { parseISO, isValid, format } from 'date-fns';

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
  } = content?.story?.content
  const { 
    full_slug
  } = content?.story
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

function safeFormatDate(rawDate: string | number, dateFormat = 'yyyy-MM-dd') {
  if (!rawDate) return undefined;

  // If it’s a string, treat it as ISO; otherwise try Date ctor
  const d = typeof rawDate === 'string'
    ? parseISO(rawDate)
    : new Date(rawDate);

  return isValid(d) ? format(d, dateFormat) : undefined;
}

export default async function Page(props: PageProps) {
  const slug = (await props?.params)?.page;
  let content
  try {
    content = await fetchStory('published', slug);
  } catch {
    return notFound();
  }
  let jsonLd = {}

  if (content?.story?.content?.component === 'bookPage') {
    jsonLd = {
      '@context': 'https://schema.org',
      "@type": "Book",
      "author": {
        "@type": "Person",
        "givenName": "Tennyson",
        "familyName": "Flint",
        "additionalName": "Augusta",
        "image": {
          "@type": "ImageObject",
          "url": "https://a.storyblok.com/f/320446/440x440/21006da3ff/d856641e-d5ae-40b2-8955-006307e9762c-1.png",
          "width": "150",
          "height": "150"
        }
      },
      "copyrightYear": content?.story?.content?.copyright_year,
      "genre": content?.story?.content?.genre,
      "about": content?.story?.content?.about,
      "description": content?.story?.content?.about,
      "image": content?.story?.content?.book_cover[0]?.file?.filename,
      "url": `https://tennysonflint.com/${content?.story?.full_slug}`,
      "inLanguage": "en-US",
      "isbn": content?.story?.content?.isbn,
      "numberOfPages": content?.story?.content?.number_of_pages,
      "isFamilyFriendly": content?.story?.content?.family_friendly,
      "name": content?.story?.content?.book_title,
      "countryOfOrigin": {
        "@type": "Country",
        "name": "USA"
      },
      "audience": {
        "@type": "Audience",
        "name": content?.story?.content?.audience
      },
      "datePublished": safeFormatDate(content?.story?.content?.book_published_date, 'yyyy-MM-dd')
    }
  } else if (content?.story?.content?.component === 'blogPage') {
    jsonLd = {
      '@context': 'https://schema.org',
      "@type": "BlogPosting",
      "mainEntityOfPage": `https://tennysonflint.com/${content?.story?.full_slug}`,
      "headline": content?.story?.content?.title,
      "name": content?.story?.content?.title,
      "description": content?.story?.content?.excerpt,
      "about": content?.story?.content?.excerpt,
      "author": {
        "@type": "Person",
        "givenName": "Tennyson",
        "familyName": "Flint",
        "additionalName": "Augusta",
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
        "name": "Tennyson Flint Blog"
      },
      "datePublished": safeFormatDate(content?.story?.content?.published_date, 'yyyy-MM-dd'),
      "image": {
        "@type": "ImageObject",
        "@id": content?.story?.content?.featured_image[0]?.file.filename,
        "url": content?.story?.content?.featured_image[0]?.file.filename,
        "width": content?.story?.content?.featured_image[0]?.width,
        "height": content?.story?.content?.featured_image[0]?.height,
      },
      "inLanguage": "en-US",
      "copyrightYear": safeFormatDate(content?.story?.content?.published_date, 'yyyy'),
    }
  }
  return (
    <>
      <div className='relative grow'>
        {(content?.story?.content?.component === 'bookPage' || content?.story?.content?.component === 'blogPage') &&
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
          />
        }
        <main className='relative'>
          <StoryblokStory story={content?.story} />
        </main>
      </div>
    </>
  );
}