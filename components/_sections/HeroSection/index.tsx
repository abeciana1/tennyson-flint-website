import { Heading1, Heading2 } from '@/components/_styled/headings'
import { HeroSectionI } from '@/definitions/interfaces/_sections'
import ImageComp from '@/components/_styled/ImageComp'
import TextContent from '@/components/_styled/Text'
import { FONT_SIZE } from '@/definitions/enums'
import { ButtonLink } from '@/components/_styled/links'
import { ButtonLinkI } from '@/definitions/interfaces/_styled/Links'
import { COLORS, ROUNDED } from '@/definitions/enums'
import MarginSection from '@/components/_sections/MarginSection'
import { ImageI } from '@/definitions/interfaces/_styled/ImageComp'

const HeroSection: React.FC<HeroSectionI> = ({
  preHeading = '',
  heading,
  subheading = '',
  textBody,
  ctaChildren,
  image
}) => {
  return (
    <MarginSection>
      <section className='flex items-center mx-auto gap-24 justify-around'>
        <section
          className='max-w-[550px]'
        >
          {preHeading &&
            <TextContent
              text={preHeading.toUpperCase()}
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
              semiBold
            />
          }
          <TextContent
            text={textBody}
            fontSize={FONT_SIZE.XXL}
          />
          {ctaChildren && 
            <div className='flex flex-wrap gap-5'>
              {ctaChildren?.map(({
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
            src,
            alt,
            width,
            height,
            rounded
          }: ImageI, index: number) => (
            <ImageComp
              key={index + width + height}
              src={src}
              alt={alt}
              width={width}
              height={height}
              rounded={ROUNDED[rounded]}
            />
          ))}
        </section>
      </section>
    </MarginSection>
  )
}

export default HeroSection