import Link from 'next/link'
import { ButtonLinkI } from '@/definitions/interfaces/_styled/Links'
import { COLORS, ROUNDED } from '@/definitions/enums'
import cx from 'classnames'
import { FaArrowRight } from "react-icons/fa";

const ButtonLink: React.FC<ButtonLinkI> = ({
  linkText,
  title,
  href,
  targetBlank,
  bgColor = COLORS.WHITE,
  rounded = ROUNDED.NONE,
  arrow = false
}) => {
  return (
    <Link
      href={href}
      title={title}
      target={targetBlank ? "_blank" : ""}
      className={cx('text-lg font-medium', {
        ['flex items-center gap-5']: arrow,
        ['bg-white border-black border-2']: bgColor === COLORS.WHITE,
        ['bg-black text-white']: bgColor === COLORS.BLACK,
        ['bg-navy text-white']: bgColor === COLORS.NAVY,
        ['bg-gold text-black']: bgColor === COLORS.GOLD,
        ['bg-violet text-white']: bgColor === COLORS.VIOLET,
        ['bg-red text-white']: bgColor === COLORS.RED,
        ['bg-pink text-white']: bgColor === COLORS.PINK,
        ['rounded-none']: ROUNDED.NONE,
        ['rounded-sm']: rounded === ROUNDED.SM,
        ['rounded-md']: rounded === ROUNDED.MD,
        ['rounded-lg']: rounded === ROUNDED.LG,
        ['rounded-xl']: rounded === ROUNDED.XL,
        ['rounded-2xl']: rounded === ROUNDED.XXL,
      })}
    >
      {linkText}
      {arrow &&
        <FaArrowRight strokeWidth='1' size={20} />
      }
    </Link>
  )
}

export default ButtonLink