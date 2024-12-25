import { Heading1 } from '@/components/_styled/headings'
import TextContent from '@/components/_styled/Text'
import ImageComp from '@/components/_styled/ImageComp'
import {
  FONT_SIZE
} from '@/definitions/enums'
import MarginSection from '@/components/_sections/MarginSection'
import { BookDetailTemplateI } from '@/definitions/interfaces/_book'
import { RenderBuilderContent } from '@/components/builder'

const BookDetailTemplate: React.FC<BookDetailTemplateI> = ({
  preheading,
  bookTitle,
  bookCover,
  content
}) => {
  const {
    src,
    alt,
    width,
    height,
    rounded
  } = bookCover
  return (
    <MarginSection>
      <section className='md:px-10 flex items-center'>
        <div>
          <ImageComp
            src={src}
            alt={alt}
            width={width}
            height={height}
            rounded={rounded}
          />
        </div>
        <div>
          <TextContent
            dataTestId='preheading'
            text={preheading}
            fontSize={FONT_SIZE.XXL}
          />
          <div className='mt-6'>
            <Heading1
              text={bookTitle}
            />
          </div>
          <div className='mt-6'>
            <RenderBuilderContent content={content} model='book-page' />
          </div>
        </div>
      </section>
    </MarginSection>
  )
}

export default BookDetailTemplate