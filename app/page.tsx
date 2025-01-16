import { PageProps } from '@/storyblok'
import { fetchStory } from '@/helper-functions/storyblok-fetch'
import {
  StoryblokStory,
  storyblokEditable
} from "@storyblok/react/rsc";

export default async function Page(props: PageProps) {
  const slug = (await props?.params).page;
  const content = await fetchStory('published', slug)
  return (
    <>
      <div className='relative'>
        <main className='min-h-screen relative'
          {...storyblokEditable(props.blok)}
        >
          <StoryblokStory story={content?.data?.story} />
        </main>
      </div>
    </>
  );
}
