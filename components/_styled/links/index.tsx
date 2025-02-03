import Link from 'next/link'
import { ButtonLinkI, SocialLinkI } from '@/definitions/interfaces/_styled/Links'
import {
  COLORS,
  ROUNDED,
  FONT_STYLE
} from '@/definitions/enums'
import cx from 'classnames'
import { FaArrowRight } from "react-icons/fa";
import ImageComp from '@/components/_styled/ImageComp'

export const ButtonLink: React.FC<ButtonLinkI> = ({
  link_text,
  title,
  href,
  target_blank = false,
  background_color = COLORS.WHITE,
  rounded_edges = ROUNDED.NONE,
  arrow_icon = false,
  text_color = COLORS.WHITE,
  font_style = FONT_STYLE.NORMAL
}) => {
  return (
    <Link
      href={href}
      title={title}
      target={target_blank ? "_blank" : ""}
      className={cx('font-sans text-lg max-w-fit py-1 px-2', {
        ['flex items-center gap-5']: arrow_icon,
        ['bg-white border-black border-2']: background_color === COLORS.WHITE,
        ['bg-black']: background_color === COLORS.BLACK,
        ['bg-navy']: background_color === COLORS.NAVY,
        ['bg-gold']: background_color === COLORS.GOLD,
        ['bg-violet']: background_color === COLORS.VIOLET,
        ['bg-red']: background_color === COLORS.RED,
        ['bg-pink']: background_color === COLORS.PINK,
        ['rounded-none']: rounded_edges === ROUNDED.NONE,
        ['rounded-sm']: rounded_edges === ROUNDED.SM,
        ['rounded-md']: rounded_edges === ROUNDED.MD,
        ['rounded-lg']: rounded_edges === ROUNDED.LG,
        ['rounded-xl']: rounded_edges === ROUNDED.XL,
        ['rounded-2xl']: rounded_edges === ROUNDED.XXL,
        ['text-white']: text_color === COLORS.WHITE,
        ['text-black']: text_color === COLORS.BLACK,
        ['text-gold']: text_color === COLORS.GOLD,
        ['font-bold']: font_style === FONT_STYLE.BOLD,
        ['font-semibold']: font_style === FONT_STYLE.SEMI_BOLD,
        ['font-medium']: font_style === FONT_STYLE.MEDIUM
      })}
    >
      {link_text}
      {arrow_icon &&
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
    file,
    alt_text,
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
        file={file}
        alt_text={alt_text}
        width={width}
        height={height}
        rounded_edges={ROUNDED.NONE}
      />
    </Link>
  )
}