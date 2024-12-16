import { HeadingI } from '@/definitions/interfaces/_styled/headings'
import cx from 'classnames'

export const Heading1: React.FC<HeadingI> = ({
  text,
  italic = false,
  bold = false,
  fontSize = '5xl'
}) => {
  return (
    <h1
      className={cx('font-cinzel-dec', {
        ['italic']: italic,
        ['font-bold']: bold,
        ['text-5xl']: fontSize === '5xl',
        ['text-3xl']: fontSize === '3xl'
      })}
    >{ text }</h1>
  )
}