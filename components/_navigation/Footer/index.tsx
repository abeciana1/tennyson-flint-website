// import TextContent from '@/components/_styled/Text'
import { use } from 'react'
import { fetchStory } from '@/helper-functions/storyblok-fetch'

const Footer: React.FC = () => {
  const content = use(fetchStory('published', ['global-content', 'main-menu']))
  console.log('footer content', content)
  return (
    <>
      <footer className='bg-darkGray relative bottom-0 w-full px-5 sm:px-10 pt-2 md:pt-4 lg:pt-8'>
        <section className='mx-auto text-center'>
        </section>
      </footer>
    </>
  )
}

export default Footer