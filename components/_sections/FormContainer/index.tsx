import { Heading1 } from '@/components/_styled/headings'
import { FormContainerI } from '@/definitions/interfaces/_sections'
import cx from 'classnames'
import {
  COLORS,
  FONT_FAMILY,
  FONT_STYLE
} from '@/definitions/enums'
import '@/components/_blog/BlogContent/blog-content.css'
import DOMPurify from 'isomorphic-dompurify';

const FormContainer:React.FC<FormContainerI> = ({
  heading,
  textBody,
  bgColor,
  textColor,
  children
}) => {
  const sanitizedContent = DOMPurify.sanitize(textBody)
  return (
    <section
      className={cx('p-5 rounded-lg lg:max-w-3xl mx-auto', {
        ['bg-navy']: bgColor === COLORS.NAVY,
        ['bg-white']: bgColor === COLORS.WHITE,
        ['bg-black']: bgColor === COLORS.BLACK,
        ['bg-gold']: bgColor === COLORS.GOLD,
        ['bg-violet']: bgColor === COLORS.VIOLET,
        ['bg-red']: bgColor === COLORS.RED,
        ['bg-pink']: bgColor === COLORS.PINK,
      })}
    >
      <Heading1
        text={heading}
        fontSize='4xl'
        color={textColor}
        fontStyle={FONT_STYLE.SEMI_BOLD}
        fontFamily={FONT_FAMILY.SANS}
      />
      <div
        data-testid='formTestBody'
        className={cx('blog-content mt-2.5', {
          ['text-navy']: textColor === COLORS.NAVY,
          ['text-white']: textColor === COLORS.WHITE,
          ['text-black']: textColor === COLORS.BLACK,
          ['text-gold']: textColor === COLORS.GOLD,
          ['text-violet']: textColor === COLORS.VIOLET,
          ['text-red']: textColor === COLORS.RED,
          ['text-pink']: textColor === COLORS.PINK,
        })}
        dangerouslySetInnerHTML={{__html: sanitizedContent}}
      />
      <form>
        {children}
      </form>
    </section>
  )
}

export default FormContainer