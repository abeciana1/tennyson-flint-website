import type { Metadata } from 'next'
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";
import { PageProps } from '@/definitions/interfaces'
import {
  modelAndContentFetch,
  pageContentDataFetch
} from '@/helper-functions/builder-fetch'

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
      }
    }
  } else if (modelName === 'book-page') {
    return {
      title: content?.data?.title,
      description: content?.data?.description,
      alternates: {
        canonical: `/book/${urlStructure?.page[1]}`
      }
    }
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
        <main className='min-h-screen relative'>
          <RenderBuilderContent content={content} model={modelName} />
        </main>
      </div>
    </>
  );
}
