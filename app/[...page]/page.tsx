import type { Metadata } from 'next'
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";
import { PageProps } from '@/definitions/interfaces'
import {
  modelAndContentFetch,
  pageContentDataFetch
} from '@/helper-functions/builder-fetch'
import BlogTemplate from '@/components/_blog/BlogTemplate'
import { format } from 'date-fns'
import { ROUNDED } from '@/definitions/enums'
import cx from 'classnames'
import BookDetailTemplate from '@/components/_book/BookDetailTemplate'

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export const generateMetadata = async (props: PageProps): Promise<Metadata> => {
  const {
    modelName,
    urlStructure
  } = await modelAndContentFetch(props)
  
  const content = await pageContentDataFetch(props, modelName)

  if (modelName === 'blog-article') {
    return {
      title: content?.data?.blogPostTitle,
      description: content?.data?.seoDescription,
      alternates: {
        canonical: `/blog/${urlStructure?.page[1]}`
      },
      openGraph: {
        title: `${content?.data?.blogPostTitle} | Tennyson Flint`,
        description: content?.data?.seoDescription,
        images: [content?.data?.blogImage]
      }
    }
  } else if (modelName === 'book-page') {
    return {
      title: content?.data?.bookTitle,
      description: content?.data?.seoDescription,
      alternates: {
        canonical: `/book/${urlStructure?.page[1]}`
      },
      openGraph: {
        title: `${content?.data?.bookTitle} | Tennyson Flint`,
        description: content?.data?.seoDescription,
        images: [content?.data?.bookImage]
      }
    }
  } else {
    return {
      title: content?.data?.title,
      description: content?.data?.description,
      alternates: {
        canonical: `/${urlStructure?.page[1]}`
      },
      openGraph: {
        title: content?.data?.title,
        description: content?.data?.description,
        images: [content?.data?.openGraphImage]
      }
    }
  }
}

export default async function Page(props: PageProps) {
  const { modelName } = await modelAndContentFetch(props)
  const content = await pageContentDataFetch(props, modelName)

  let jsonLD;

  if (modelName === 'book-page') {
    jsonLD = {
      '@context': 'https://schema.org',
      "@type": "WebPage",
      "mainEntity": {
        "@type": "Book",
        "author": "https://tennysonflint.com/about",
        "image": content?.data?.bookImage,
        "inLanguage": "English",
        "name": content?.data?.bookTitle,
        "numberOfPages": content?.data?.numberOfPages,
        "datePublished": format(new Date(content?.data?.bookPublishedDate), 'yyyy-MM-dd')
      }
    }
  } else if (modelName === 'blog-article') {
    jsonLD = {
      "@context":"http://schema.org",
      "@type": "BlogPosting",
      "image": content?.data?.blogImage,
      "url": `https://tennysonflint.com/blog/${content?.data?.slug}`,
      "headline": content?.data?.bookTitle,
      "dateCreated": format(new Date(content?.createdDate), 'yyyy-MM-dd'),
      "dataPublished": format(new Date(content?.firstPublished), 'yyyy-MM-dd'),
      "copyrightYear": format(new Date(content?.firstPublished), 'yyyy'),
      "inLanguage": "en-US",
      "author": {
        "@type": "Person",
        "name": "Tennyson Flint",
        "url": "https://tennysonflint.com"
      }
    }
  } else {
    jsonLD = {
      "@context":"http://schema.org",
      "@type": "WebPage",
      "name": `${content?.data?.bookTitle} | Tennyson Flint`,
      "description": content?.data?.description,
    }
  }

  const stringifiedLD = JSON.stringify(jsonLD)
  return (
    <>
      {jsonLD &&
        <script type="application/ld+json">{ stringifiedLD }</script>
      }
      <div className='relative'>
        <main className={cx('min-h-screen relative', {
          ['pb-20']: modelName === 'blog-article'
        })}>
          {modelName === 'blog-article' &&
            <BlogTemplate
              title={content?.data?.blogPostTitle}
              excerpt={content?.data?.excerpt}
              publishedDate={format(new Date(content?.firstPublished), "MM/dd/yyyy")}
              image={{
                src: content?.data?.blogImage,
                alt: `${content?.data?.blogPostTitle} featured blog image`,
                width: content?.data?.blogImageWidth,
                height: content?.data?.blogImageHeight,
                rounded: ROUNDED.LG
              }}
            />
          }
          {modelName === 'book-page' &&
            <BookDetailTemplate
              bookTitle={content?.data?.bookTitle}
              preheading={content?.data?.preheading}
              bookCover={{
                src: content?.data?.bookImage,
                alt: `${content?.data?.bookTitle} cover image`,
                width: content?.data?.bookImageWidth,
                height: content?.data?.bookImageHeight,
                rounded: ROUNDED.MD
              }}
              slug={content?.data?.slug}
            />
          }
          <RenderBuilderContent content={content} model={modelName} />
        </main>
      </div>
    </>
  );
}
