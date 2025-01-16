import { storyblokEditable, StoryblokServerComponent } from '@storyblok/react/rsc';
import BlogTemplate from '@/components/_blog/BlogTemplate'
import { format } from 'date-fns'

export const Page = ({ blok }: any) => {
  return (
  <main {...storyblokEditable(blok)}>
    {blok?.body?.map((nestedBlok: { _uid: string }) => {
      return (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      )
    })}
  </main>
)};

export const BlogPage = ({ blok }: any) => {
  return (
  <main {...storyblokEditable(blok)}>
    {blok &&
      <BlogTemplate
        title={blok?.title}
        excerpt={blok?.excerpt}
        image={blok?.featured_image}
        publishedDate={format(new Date(blok?.published_date), 'MM/dd/yyyy')}
      />
    }
    {blok?.body?.map((nestedBlok: { _uid: string }) => {
      return (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      )
    })}
  </main>
)};

export const BookPage = ({ blok }: any) => {
  return (
  <main {...storyblokEditable(blok)}>
    {blok?.body?.map((nestedBlok: { _uid: string }) => {
      return (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      )
    })}
  </main>
)};