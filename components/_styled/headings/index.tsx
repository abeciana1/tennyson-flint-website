import { HeadingI } from '@/definitions/interfaces/_styled/headings'
import cx from 'classnames'
import {
  COLORS,
  FONT_STYLE,
  FONT_FAMILY
} from '@/definitions/enums'

export const Heading1: React.FC<HeadingI> = ({
  text,
  fontSize = '5xl',
  color = COLORS.BLACK,
  fontStyle = FONT_STYLE.NORMAL,
  fontFamily = FONT_FAMILY.CINZEL_DEC,
}) => {
  return (
    <h1
      className={cx('leading-normal', {
        ['font-bold']: fontStyle === FONT_STYLE.BOLD,
        ['font-semibold']: fontStyle === FONT_STYLE.SEMI_BOLD,
        ['font-medium']: fontStyle === FONT_STYLE.MEDIUM,
        ['font-normal']: fontStyle === FONT_STYLE.NORMAL,
        ['italic']: fontStyle === FONT_STYLE.ITALIC,
        ['text-5xl']: fontSize === '5xl',
        ['text-4xl']: fontSize === '4xl',
        ['text-3xl']: fontSize === '3xl',
        ['text-2xl']: fontSize === '2xl',
        ['text-white']: color === COLORS.WHITE,
        ['text-black']: color === COLORS.BLACK,
        ['text-gold']: color === COLORS.GOLD,
        ['text-navy']: color === COLORS.NAVY,
        ['font-sans']: fontFamily === FONT_FAMILY.SANS,
        ['font-cinzel']: fontFamily === FONT_FAMILY.CINZEL,
        ['font-cinzel-dec']: fontFamily === FONT_FAMILY.CINZEL_DEC,
      })}
    >{ text }</h1>
  )
}

export const Heading2: React.FC<HeadingI> = ({
  text,
  fontSize = '4xl',
  color = COLORS.BLACK,
  fontStyle = FONT_STYLE.NORMAL,
  fontFamily = FONT_FAMILY.CINZEL_DEC,
}) => {
  return (
    <h2
      className={cx('font-cinzel-dec leading-normal', {
        ['italic']: fontStyle === FONT_STYLE.ITALIC,
        ['font-bold']: fontStyle === FONT_STYLE.BOLD,
        ['font-semibold']: fontStyle === FONT_STYLE.SEMI_BOLD,
        ['font-medium']: fontStyle === FONT_STYLE.MEDIUM,
        ['font-normal']: fontStyle === FONT_STYLE.NORMAL,
        ['text-white']: color === COLORS.WHITE,
        ['text-black']: color === COLORS.BLACK,
        ['text-4xl']: fontSize === '4xl',
        ['font-sans']: fontFamily === FONT_FAMILY.SANS,
        ['font-cinzel']: fontFamily === FONT_FAMILY.CINZEL,
        ['font-cinzel-dec']: fontFamily === FONT_FAMILY.CINZEL_DEC,
      })}
    >{ text }</h2>
  )
}