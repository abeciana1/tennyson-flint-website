import { Heading1 } from '@/components/_styled/headings'
import TextContent from '@/components/_styled/Text'
import ImageComp from '@/components/_styled/ImageComp'
import { ROUNDED } from '@/definitions/enums'
import MarginSection from '@/components/_sections/MarginSection'
import { BookDetailTemplateI } from '@/definitions/interfaces/_book'
import TabGroup from '@/components/_book/TabGroup'

const BookDetailTemplate: React.FC<BookDetailTemplateI> = ({
  preheading,
  bookTitle,
  bookCover,
  tabGroup
}) => {
  const {
    file,
    alt_text,
    width,
    height,
    rounded_edges
  } = bookCover
  return (
    <MarginSection>
      <section className='lg:px-10 flex items-center gap-16 lg:32'>
        <div className='hidden md:block'>
          <ImageComp
            file={file}
            alt_text={alt_text}
            width={width}
            height={height}
            rounded_edges={ROUNDED[rounded_edges]}
          />
        </div>
        <div>
          <TextContent
            dataTestId='preheading'
            text={preheading?.text?.toUpperCase()}
            fontSize={preheading?.font_size}
          />
          <div>
            <Heading1
              text={bookTitle}
            />
          </div>
          <div className='block md:hidden mt-6'>
            <ImageComp
              file={file}
              alt_text={alt_text}
              width={width}
              height={height}
              rounded_edges={ROUNDED[rounded_edges]}
            />
          </div>
          {tabGroup &&
            <TabGroup tabs={tabGroup?.tabs} />
          }
        </div>
      </section>
    </MarginSection>
  )
}

export default BookDetailTemplate