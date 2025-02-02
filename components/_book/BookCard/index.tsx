import { BookCollectionCardI } from '@/definitions/interfaces/_book'
import Link from 'next/link'
import ImageComp from '@/components/_styled/ImageComp'
import { ROUNDED } from '@/definitions/enums'

const BookCard: React.FC<BookCollectionCardI> = ({
  bookTitle,
  slug,
  bookCover
}) => {
  const {
    file,
    alt_text,
    width,
    height,
    rounded_edges
  } = bookCover
  return (
    <Link
      href={`/books/${slug}`}
      title={bookTitle}
    >
      <ImageComp
        file={file}
        alt_text={alt_text}
        width={width}
        height={height}
        rounded_edges={ROUNDED[rounded_edges]}
      />
    </Link>
  )
}

export default BookCard