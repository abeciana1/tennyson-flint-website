import { PageProps } from '@/storyblok'
import { fetchStory } from '@/helper-functions/storyblok-fetch'
import {
  StoryblokStory
} from "@storyblok/react/rsc";
import type { Metadata } from 'next'

export const generateMetadata = async (props: PageProps): Promise<Metadata> => {
  const slug = (await props?.params).page;
  const content = await fetchStory('published', slug)
  const {
    seo_title,
    seo_description,
  } = content?.story?.content
  return {
    title: `${seo_title} | Tennyson Flint`,
    description: seo_description,
    alternates: {
      canonical: '/'
    }
  }
}

export default async function Page(props: PageProps) {
  const slug = (await props?.params).page;
  const content = await fetchStory('published', slug)
  return (
    <>
      <main className='relative grow'>
        <StoryblokStory story={content?.story} />
      </main>
    </>
  );
}
