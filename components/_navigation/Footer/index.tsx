import { fetchStory } from '@/helper-functions/storyblok-fetch'
import { storyblokEditable, StoryblokStory } from '@storyblok/react/rsc';

const Footer: React.FC = async () => {
  const footerContent = await fetchStory('published', ['global-content', 'footer-menu'])
  return (
    <>
      <footer
        className='bg-darkGray relative bottom-0 w-full px-5 sm:px-10 pt-2 md:pt-4 lg:pt-8'
      >
        <section className='max-w-[1440px] mx-auto text-center' {...storyblokEditable(footerContent?.data?.story?.content)}>
          <StoryblokStory story={footerContent?.story} />
        </section>
      </footer>
    </>
  )
}

export default Footer