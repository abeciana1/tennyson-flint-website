import Link from 'next/link'
import { ButtonLinkI, SocialLinkI } from '@/definitions/interfaces/_styled/Links'
import { COLORS, ROUNDED } from '@/definitions/enums'
import cx from 'classnames'
import { FaArrowRight } from "react-icons/fa";
import ImageComp from '@/components/_styled/ImageComp'

export const ButtonLink: React.FC<ButtonLinkI> = ({
  linkText,
  title,
  href,
  targetBlank = false,
  bgColor = COLORS.WHITE,
  rounded = ROUNDED.NONE,
  arrow = false
}) => {
  return (
    <Link
      href={href}
      title={title}
      target={targetBlank ? "_blank" : ""}
      className={cx('text-lg font-medium max-w-fit py-1 px-2', {
        ['flex items-center gap-5']: arrow,
        ['bg-white border-black border-2']: bgColor === COLORS.WHITE,
        ['bg-black text-white']: bgColor === COLORS.BLACK,
        ['bg-navy text-white']: bgColor === COLORS.NAVY,
        ['bg-gold text-black']: bgColor === COLORS.GOLD,
        ['bg-violet text-white']: bgColor === COLORS.VIOLET,
        ['bg-red text-white']: bgColor === COLORS.RED,
        ['bg-pink text-white']: bgColor === COLORS.PINK,
        ['rounded-none']: rounded === ROUNDED.NONE,
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

export const SocialLink: React.FC<SocialLinkI> = ({
  title,
  href,
  image
}) => {
  const {
    src,
    alt,
    width,
    height
  } = image[0]
  return (
    <Link
      href={href}
      title={title}
      target='_blank'
      className='bg-white rounded-full p-2.5'
    >
      <ImageComp
        src={src}
        alt={alt}
        width={width}
        height={height}
        rounded={ROUNDED.NONE}
      />
    </Link>
  )
}