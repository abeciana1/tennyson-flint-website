import { BookCollectionCardI } from '@/definitions/interfaces/_book'
import Link from 'next/link'
import ImageComp from '@/components/_styled/ImageComp'

const BookCard: React.FC<BookCollectionCardI> = ({
  bookTitle,
  slug,
  bookCover
}) => {
  const {
    src,
    alt,
    width,
    height,
    rounded
  } = bookCover
  return (
    <Link
      href={`/books/${slug}`}
      title={bookTitle}
    >
      <ImageComp
        src={src}
        alt={alt}
        width={width}
        height={height}
        rounded={rounded}
      />
    </Link>
  )
}

export default BookCard