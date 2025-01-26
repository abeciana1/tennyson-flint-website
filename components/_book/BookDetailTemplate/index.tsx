import { Heading1 } from '@/components/_styled/headings'
import TextContent from '@/components/_styled/Text'
import ImageComp from '@/components/_styled/ImageComp'
import {
  COLORS,
  ROUNDED,
  FONT_STYLE
} from '@/definitions/enums'
import MarginSection from '@/components/_sections/MarginSection'
import { BookDetailTemplateI } from '@/definitions/interfaces/_book'
import TabGroup from '@/components/_book/TabGroup'
import { ButtonLinkDataI } from '@/definitions/interfaces/_styled/Links'
import { ButtonLink } from '@/components/_styled/links'

const BookDetailTemplate: React.FC<BookDetailTemplateI> = ({
  preheading,
  bookTitle,
  bookCover,
  tabGroup,
  links
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
            <TabGroup tabs={tabGroup[0]?.tabs} />
          }
          {(links && links?.length > 0) &&
            <div className='mt-6'>
              {links?.map((link: ButtonLinkDataI) => {
                console.log({ link })
                return (
                  <ButtonLink
                    key={link._uid}
                    linkText={link?.link_text}
                    title={link?.title}
                    href={link?.href}
                    targetBlank={link?.target_blank}
                    textColor={COLORS[link?.text_color]}
                    arrow={link?.arrow_icon}
                    bgColor={COLORS[link?.background_color]}
                    rounded={ROUNDED[link?.rounded_edges]}
                    fontStyle={FONT_STYLE[link?.font_style]}
                  />
                )
              })}
            </div>
          }
        </div>
      </section>
    </MarginSection>
  )
}

export default BookDetailTemplate