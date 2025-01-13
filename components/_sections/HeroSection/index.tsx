import { Heading1, Heading2 } from '@/components/_styled/headings'
import { HeroSectionI } from '@/definitions/interfaces/_sections'
import ImageComp from '@/components/_styled/ImageComp'
import TextContent from '@/components/_styled/Text'
import { FONT_SIZE, FONT_STYLE } from '@/definitions/enums'
import { ButtonLink } from '@/components/_styled/links'
import { ButtonLinkI } from '@/definitions/interfaces/_styled/Links'
import { COLORS, ROUNDED } from '@/definitions/enums'
import MarginSection from '@/components/_sections/MarginSection'
import { ImageI } from '@/definitions/interfaces/_styled/ImageComp'

const HeroSection: React.FC<HeroSectionI> = ({
  blok
}) => {
  const {
    preheading = '',
    heading,
    subheading = '',
    text_body,
    cta_children,
    image
  } = blok
  return (
    <MarginSection>
      <section className='flex items-center mx-auto gap-10 lg:gap-24 justify-around flex-col md:flex-row'>
        <section
          className='md:max-w-[300px] lg:max-w-[550px]'
        >
          {preheading &&
            <TextContent
              text={preheading.toUpperCase()}
              fontSize={FONT_SIZE.XXL}
            />
          }
          <Heading1
            text={heading}
            fontSize='5xl'
          />
          {subheading &&
            <Heading2
              text={subheading}
              fontStyle={FONT_STYLE.MEDIUM}
            />
          }
          <TextContent
            text={text_body}
            fontSize={FONT_SIZE.XXL}
          />
          {cta_children && 
            <div className='flex flex-wrap gap-5'>
              {cta_children?.map(({
                linkText,
                title,
                href,
                targetBlank,
                bgColor,
                rounded,
                arrow
              }: ButtonLinkI) => (
                <ButtonLink
                  key={linkText}
                  linkText={linkText}
                  title={title}
                  href={href}
                  targetBlank={targetBlank}
                  bgColor={COLORS[bgColor]}
                  rounded={ROUNDED[rounded]}
                  arrow={arrow}
                />
              ))}
            </div>
          }
        </section>
        <section className='w-fit'>
          {image && image?.map(({
            file,
            alt_text,
            width,
            height,
            rounded_edges
          }: ImageI, index: number) => (
            <ImageComp
              key={index + width + height}
              file={file}
              alt_text={alt_text}
              width={width}
              height={height}
              rounded_edges={ROUNDED[rounded_edges]}
            />
          ))}
        </section>
      </section>
    </MarginSection>
  )
}

export default HeroSection