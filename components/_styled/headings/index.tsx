import { HeadingI } from '@/definitions/interfaces/_styled/headings'
import cx from 'classnames'

export const Heading1: React.FC<HeadingI> = ({
  text,
  italic = false,
  bold = false,
  semiBold = false,
  medium = false,
  fontSize = '5xl'
}) => {
  return (
    <h1
      className={cx('font-cinzel-dec', {
        ['italic']: italic,
        ['font-bold']: bold,
        ['text-5xl']: fontSize === '5xl',
        ['text-3xl']: fontSize === '3xl',
        ['font-medium']: medium && !bold && !semiBold,
        ['font-semibold']: semiBold && !bold && !medium
      })}
    >{ text }</h1>
  )
}

export const Heading2: React.FC<HeadingI> = ({
  text,
  italic = false,
  bold = false,
  semiBold = false,
  medium = false,
  fontSize = '4xl'
}) => {
  return (
    <h2
      className={cx('font-cinzel-dec', {
        ['italic']: italic,
        ['font-bold']: bold && !medium && !semiBold,
        ['text-4xl']: fontSize === '4xl',
        ['font-medium']: medium && !bold && !semiBold,
        ['font-semibold']: semiBold && !bold && !medium
      })}
    >{ text }</h2>
  )
}