import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from '@/components/builder'
import { PageProps } from '@/definitions/interfaces'
import { pageContentDataFetch } from '@/helper-functions/builder-fetch'
import { use } from 'react'

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function Page(props: PageProps) {
  const content = use(pageContentDataFetch(props, 'page'))

  return (
    <>
      <div className='relative'>
        <main className='min-h-screen relative'>
          <RenderBuilderContent content={content} model='page' />
        </main>
      </div>
    </>
  );
}
