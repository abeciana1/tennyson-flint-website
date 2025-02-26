import { BookI } from '@/definitions/interfaces/_book'
import MarginSection from '@/components/_sections/MarginSection'
import {
  ROUNDED,
  FONT_FAMILY,
  FONT_SIZE
} from '@/definitions/enums'
import BookCard from '@/components/_book/BookCard'
import TextContent from '@/components/_styled/Text'
import { fetchContentStories } from '@/helper-functions/storyblok-fetch'

const MoreBooksComingSoon = () => {
  return (
    <div className='relative flex flex-col items-center bg-gray text-center lg:max-h-56 max-w-3xl p-10 rounded-lg'>
      <TextContent
        blok={{
          text: 'The start of my book collection',
          font_family: FONT_FAMILY.CINZEL_DEC,
          font_size: FONT_SIZE.XXXL
        }}
      />
      <TextContent
        blok={{
          text: 'More work coming soon, stay tuned!',
          font_size: FONT_SIZE.XXXL
        }}
      />
    </div>
  )
}

const BookCollection: React.FC = async () => {
  const { stories } = await fetchContentStories('published', 'books', { content_type: 'bookPage' })
  return (
    <MarginSection>
      <section className='px-10'>
        {(stories && stories?.length > 0) &&
          <section className='flex flex-col md:flex-row gap-12 md:gap-36 items-center justify-center'>
            {(stories) &&
              stories?.map((book: BookI) => {
                return (
                  <BookCard
                    key={book?.uuid}
                    bookTitle={book?.name}
                    slug={book?.slug}
                    bookCover={{
                      file: book?.content?.book_cover[0]?.file,
                      alt_text: book?.content?.book_cover[0]?.alt_text,
                      width: 237,
                      height: 385,
                      rounded_edges: ROUNDED.NONE,
                    }}
                  />
                )
              })
            }
            {stories && (stories?.length < 3) &&
              <MoreBooksComingSoon />
            }
          </section>
        }
      </section>
    </MarginSection>
  )
}

export default BookCollection