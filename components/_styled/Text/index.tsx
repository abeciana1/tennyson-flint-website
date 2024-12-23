import { TextContentI } from '@/definitions/interfaces/_styled/Text'
import {
  FONT_SIZE,
  FONT_STYLE,
  FONT_FAMILY,
  COLORS
} from "@/definitions/enums";
import cx from 'classnames'

const TextContent: React.FC<TextContentI> = ({
  text,
  fontSize = FONT_SIZE.LG,
  fontStyle = FONT_STYLE.NORMAL,
  fontFamily = FONT_FAMILY.SANS,
  color = COLORS.BLACK,
  dataTestId = ''
}) => {
  return (
    <div
      data-testId={dataTestId}
      className={cx('leading-normal', {
        ['font-bold']: fontStyle === FONT_STYLE.BOLD,
        ['font-semibold']: fontStyle === FONT_STYLE.SEMI_BOLD,
        ['font-medium']: fontStyle === FONT_STYLE.MEDIUM,
        ['font-normal']: fontStyle === FONT_STYLE.NORMAL,
        ['italic']: fontStyle === FONT_STYLE.ITALIC,
        ['text-lg']: fontSize === FONT_SIZE.LG,
        ['text-sm']: fontSize === FONT_SIZE.SM,
        ['text-xl']: fontSize === FONT_SIZE.XL,
        ['text-md']: fontSize === FONT_SIZE.MD,
        ['text-2xl']: fontSize === FONT_SIZE.XXL,
        ['text-3xl']: fontSize === FONT_SIZE.XXXL,
        ['font-sans']: fontFamily === FONT_FAMILY.SANS,
        ['font-cinzel']: fontFamily === FONT_FAMILY.CINZEL,
        ['font-cinzel-dec']: fontFamily === FONT_FAMILY.CINZEL_DEC,
        ['text-white']: color === COLORS.WHITE,
        ['text-black']: color === COLORS.BLACK
      })}
    >
      {text}
    </div>
  )
}

export default TextContent