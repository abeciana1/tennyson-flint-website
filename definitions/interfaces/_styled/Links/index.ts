import { COLORS, FONT_STYLE, ROUNDED } from '@/definitions/enums'
import { ImageI } from '@/definitions/interfaces/_styled/ImageComp'
import { ComponentI } from '@/definitions/interfaces'

export interface BasicLinkI extends ComponentI {
  title: string;
  href: string;
  targetBlank?: boolean;
}

export interface ButtonLinkI extends BasicLinkI {
  linkText: string;
  bgColor: COLORS;
  arrow?: boolean;
  rounded: ROUNDED;
  textColor?: COLORS;
  fontStyle?: FONT_STYLE;
}

export interface SocialLinkI extends BasicLinkI {
  image: ImageI[];
}