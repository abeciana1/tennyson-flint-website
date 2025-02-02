import { storyblokEditable, StoryblokServerComponent } from '@storyblok/react/rsc';
import BlogTemplate from '@/components/_blog/BlogTemplate'
import { format } from 'date-fns'
import { BookPageI } from '@/definitions/interfaces/_pages'
import BookDetailTemplate from '@/components/_book/BookDetailTemplate'

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

export const BookPage = ({ blok }: BookPageI) => {
  const { 
    book_title,
    book_cover,
    preheading,
    tab_group,
    links,
    body
  } = blok
  return (
  <main {...storyblokEditable(blok)}>
    <BookDetailTemplate
      preheading={preheading[0]}
      bookTitle={book_title}
      bookCover={book_cover[0]}
      tabGroup={tab_group}
      links={links}
    />
    {body?.map((nestedBlok: { _uid: string }) => {
      return (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      )
    })}
  </main>
)};