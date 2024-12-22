import { Heading1, Heading2 } from '@/components/_styled/headings'
import { HeroSectionI } from '@/definitions/interfaces/_sections'
import ImageComp from '@/components/_styled/ImageComp'
import TextContent from '@/components/_styled/Text'
import { FONT_SIZE } from '@/definitions/enums'
import { ButtonLink } from '@/components/_styled/links'
import { ButtonLinkI } from '@/definitions/interfaces/_styled/Links'
import { COLORS, ROUNDED } from '@/definitions/enums'
import MarginSection from '@/components/_sections/MarginSection'

const HeroSection: React.FC<HeroSectionI> = ({
  preHeading = '',
  heading,
  subheading = '',
  textBody,
  ctaChildren,
  image
}) => {
  const {
    src,
    alt,
    width,
    height,
    rounded
  } = image
  console.log('ctaChildren', ctaChildren)
  return (
    <MarginSection>
      <section className='flex items-center'>
        <section>
          {preHeading &&
            <TextContent
              text={preHeading}
              fontSize={FONT_SIZE.XXL}
            />
          }
          <Heading1
            text={heading}
            bold
          />
          {subheading &&
            <Heading2
              text={subheading}
              semiBold
            />
          }
          <TextContent
            text={textBody}
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
        <section>
          <ImageComp
            src={src}
            alt={alt}
            width={width}
            height={height}
            rounded={rounded}
          />
        </section>
      </section>
    </MarginSection>
  )
}

export default HeroSection