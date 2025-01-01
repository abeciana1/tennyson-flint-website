import { BookCollectionI, BookI } from '@/definitions/interfaces/_book'
import MarginSection from '@/components/_sections/MarginSection'
import {
  ROUNDED,
  FONT_FAMILY,
  FONT_SIZE
} from '@/definitions/enums'
import BookCard from '@/components/_book/BookCard'
import TextContent from '@/components/_styled/Text'

const MoreBooksComingSoon = () => {
  return (
    <div className='relative flex flex-col items-center bg-gray text-center lg:max-h-56 max-w-3xl p-10 rounded-lg'>
      <TextContent
        text='The start of my book collection'
        fontFamily={FONT_FAMILY.CINZEL_DEC}
        fontSize={FONT_SIZE.XXXL}
      />
      <TextContent
        text='More work coming soon, stay tuned!'
        fontSize={FONT_SIZE.XXXL}
      />
    </div>
  )
}

const BookCollection: React.FC<BookCollectionI> = ({ builderState }) => {
  const books = builderState?.content?.data?.state?.bookPage?.results
  return (
    <MarginSection>
      {(books) &&
        <section className='flex flex-col md:flex-row gap-12 md:gap-36 items-center'>
          {(books) &&
            books.map(({data}: BookI, index: number) => {
              return (
                <BookCard
                  key={data?.slug + index}
                  bookTitle={data?.bookTitle}
                  slug={data?.slug}
                  bookCover={{
                    src: data?.bookImage,
                    alt: data?.bookTitle,
                    width: 237,
                    height: 385,
                    rounded: ROUNDED.MD,
                  }}
                />
              )
            })
          }
          {books && (books?.length < 3) &&
            <MoreBooksComingSoon />
          }
        </section>
      }
    </MarginSection>
  )
}

export default BookCollection