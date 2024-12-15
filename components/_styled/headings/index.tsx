import { HeadingI } from '@/definitions/interfaces/_styled/headings'
import cx from 'classnames'

export const Heading1: React.FC<HeadingI> = ({
  text,
  italic = false,
  bold = false,
}) => {
  return (
    <h1
      className={cx('text-5xl font-cinzel-dec', {
        ['italic']: italic,
        ['font-bold']: bold,
      })}
    >{ text }</h1>
  )
}