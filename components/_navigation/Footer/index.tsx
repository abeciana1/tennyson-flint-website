import MarginSection from '@/components/_sections/MarginSection'
import TextContent from '@/components/_styled/Text'
import {
  FONT_FAMILY,
  FONT_SIZE,
  COLORS,
  FONT_STYLE
} from '@/definitions/enums'
import { FooterI } from '@/definitions/interfaces/_navigation'
import SocialLinksSection from '@/components/_sections/SocialLinksSection'

const Footer: React.FC<FooterI> = ({
  siteDescription,
  socialLinks
}) => {
  return (
    <footer className='bg-gray max-h-fit'>
      <MarginSection>
        <section className='mx-auto text-center'>
          <TextContent
            text='Tennyson Flint'
            fontFamily={FONT_FAMILY.CINZEL_DEC}
            fontSize={FONT_SIZE.XXXL}
            color={COLORS.WHITE}
            fontStyle={FONT_STYLE.SEMI_BOLD}
          />
          <div className='mt-5'>
            <TextContent
              text={siteDescription}
              fontFamily={FONT_FAMILY.SANS}
              fontSize={FONT_SIZE.XXL}
              color={COLORS.WHITE}
              fontStyle={FONT_STYLE.MEDIUM}
            />
          </div>
          {(socialLinks && socialLinks.length > 0) &&
            <div className='mt-5'>
              <SocialLinksSection socialLinks={socialLinks} />
            </div>
          }
          <div className='mt-5'>
            <TextContent
              text={`Created © ${new Date().getFullYear()}`}
              fontFamily={FONT_FAMILY.SANS}
              fontSize={FONT_SIZE.MD}
              color={COLORS.WHITE}
              fontStyle={FONT_STYLE.NORMAL}
            />
          </div>
        </section>
      </MarginSection>
    </footer>
  )
}

export default Footer