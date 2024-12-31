import { Heading1 } from '@/components/_styled/headings'
import TextContent from '@/components/_styled/Text'
import ImageComp from '@/components/_styled/ImageComp'
import {
  FONT_SIZE
} from '@/definitions/enums'
import MarginSection from '@/components/_sections/MarginSection'
import { BookDetailTemplateI } from '@/definitions/interfaces/_book'
import { RenderBuilderContent } from '@/components/builder'
import { use } from 'react'
import { getBookTemplateData } from '@/helper-functions/builder-fetch'

const BookDetailTemplate: React.FC<BookDetailTemplateI> = ({
  preheading,
  bookTitle,
  bookCover,
  slug
}) => {
  const {
    src,
    alt,
    width,
    height,
    rounded
  } = bookCover
  const bookTemplateData = use(getBookTemplateData(bookTitle, slug))
  return (
    <MarginSection>
      <section className='lg:px-10 flex items-center gap-16 lg:32'>
        <div className='hidden md:block'>
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
            text={preheading.toUpperCase()}
            fontSize={FONT_SIZE.XXL}
          />
          <div className='mt-6'>
            <Heading1
              text={bookTitle}
            />
          </div>
          <div className='block md:hidden mt-6'>
            <ImageComp
              src={src}
              alt={alt}
              width={width}
              height={height}
              rounded={rounded}
            />
          </div>
          <RenderBuilderContent content={bookTemplateData} model='book' />
        </div>
      </section>
    </MarginSection>
  )
}

export default BookDetailTemplate