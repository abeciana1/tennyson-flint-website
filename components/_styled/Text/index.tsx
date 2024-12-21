import { TextContentI } from '@/definitions/interfaces/_styled/Text'
import { FONT_SIZE } from "@/definitions/enums";
import cx from 'classnames'

const TextContent: React.FC<TextContentI> = ({
  text,
  fontSize = FONT_SIZE.LG,
  bold = false,
  semiBold = false,
  medium = false
}) => {
  return (
    <div
      className={cx('', {
        ['font-bold']: bold && !semiBold && !medium,
        ['font-semibold']: semiBold && !medium && !bold,
        ['font-medium']: medium && !bold && !semiBold,
        ['text-lg']: fontSize === FONT_SIZE.LG,
        ['text-sm']: fontSize === FONT_SIZE.SM,
        ['text-xl']: fontSize === FONT_SIZE.XL,
        ['text-md']: fontSize === FONT_SIZE.MD
      })}
    >
      {text}
    </div>
  )
}

export default TextContent