import { Heading1, Heading2 } from '@/components/_styled/headings'
import { HeroSectionI } from '@/definitions/interfaces/_sections'
import ImageComp from '@/components/_styled/ImageComp'
import TextContent from '@/components/_styled/Text'

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
    <section className='flex items-center'>
      <section>
        {preHeading &&
          <TextContent
            text={preHeading}
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
          <>
          </>
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
  )
}

export default HeroSection