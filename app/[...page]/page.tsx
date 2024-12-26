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
      title: content?.data?.blogPostTitle + '!!!!!!',
      description: content?.data?.seoDescription,
      alternates: {
        canonical: `/blog/${urlStructure?.page[1]}`
      }
    }
    // add json-ld for books
  } else if (modelName === 'book-page') {
    return {
      title: content?.data?.title + '!!!!',
      description: content?.data?.description,
      alternates: {
        canonical: `/book/${urlStructure?.page[1]}`
      }
    }
    // add json-ld for books
  } else {
    return {
      title: content?.data?.title,
      description: content?.data?.description,
      alternates: {
        canonical: `/${urlStructure?.page[1]}`
      }
    }
  }
}

export default async function Page(props: PageProps) {
  const { modelName } = await modelAndContentFetch(props)
  const content = await pageContentDataFetch(props, modelName)
  return (
    <>
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
