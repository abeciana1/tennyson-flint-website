import type { Metadata } from 'next'
import { PageProps } from '@/storyblok'
import { fetchData, fetchStory } from '@/helper-functions/storyblok-fetch'
import {
  storyblokEditable,
  StoryblokStory
} from "@storyblok/react/rsc";

export const generateMetadata = async (props: PageProps): Promise<Metadata> => {
  return {
    title: ""
  }
}

export default async function Page(props: PageProps) {
  const slug = (await props?.params).page;
  const { data } = await fetchData();
  const story = data?.story

  const content = await fetchStory('published', slug)
  return (
    <>
      <div className='relative'>
        <main className='min-h-screen relative'
          {...storyblokEditable(props.blok)}
        >
          <StoryblokStory story={content.story} />
        </main>
      </div>
    </>
  );
}
