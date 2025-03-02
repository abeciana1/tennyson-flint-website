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
import cx from 'classnames'
import { storyblokEditable } from '@storyblok/react/rsc';

const HeroSection: React.FC<HeroSectionI> = ({
  blok
}) => {
  const {
    preheading = '',
    heading,
    subheading = '',
    text_body,
    cta_children,
    image,
    responsive_reverse
  } = blok
  return (
    <MarginSection {...storyblokEditable(blok)}>
      <section className={cx('flex items-center mx-auto gap-10 lg:gap-24 justify-around flex-col lg:flex-row', {
        ['flex-col-reverse']: responsive_reverse
      })}>
        <section
          className='sm:max-w-[300px] md:max-w-2xl lg:max-w-[550px]'
        >
          {preheading &&
            <TextContent
              blok={{
                text: preheading.toUpperCase(),
                font_size: FONT_SIZE.XXL
              }}
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
            blok={{
              text: text_body,
              font_size: FONT_SIZE.XXL
            }}
          />
          {cta_children && 
            <div className='flex flex-wrap gap-5'>
              {cta_children?.map(({
                link_text,
                title,
                href,
                target_blank,
                background_color,
                rounded_edges,
                arrow_icon,
                text_color,
                font_style
              }: ButtonLinkI) => (
                <ButtonLink
                  key={link_text}
                  link_text={link_text}
                  title={title}
                  href={href}
                  text_color={text_color ? COLORS[text_color] : COLORS.WHITE}
                  target_blank={target_blank}
                  background_color={COLORS[background_color]}
                  rounded_edges={ROUNDED[rounded_edges]}
                  arrow_icon={arrow_icon}
                  font_style={font_style ? FONT_STYLE[font_style] : FONT_STYLE.NORMAL}
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
              key={index}
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