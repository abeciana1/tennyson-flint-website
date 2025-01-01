import { BookCollectionI, BookI } from '@/definitions/interfaces/_book'
import MarginSection from '@/components/_sections/MarginSection'
import { ROUNDED } from '@/definitions/enums'
import BookCard from '@/components/_book/BookCard'

const BookCollection: React.FC<BookCollectionI> = ({ builderState }) => {
  console.log('builderState', builderState)
  const books = builderState?.content?.data?.state?.bookPage?.results
  return (
    <MarginSection>
      {(books) &&
        <section className='flex'>
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
                    width: data?.bookImageWidth,
                    height: data?.bookImageHeight,
                    rounded: ROUNDED.MD,
                  }}
                />
              )
            })
          }
        </section>
      }
    </MarginSection>
  )
}

export default BookCollection