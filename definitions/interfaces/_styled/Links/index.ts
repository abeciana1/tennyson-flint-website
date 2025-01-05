import { COLORS, ROUNDED } from '@/definitions/enums'
import { ImageI } from '@/definitions/interfaces/_styled/ImageComp'

export interface BasicLinkI {
  title: string;
  href: string;
  targetBlank?: boolean;
}

export interface ButtonLinkI extends BasicLinkI {
  linkText: string;
  bgColor: COLORS;
  arrow?: boolean;
  rounded: ROUNDED;
  textColor: COLORS;
}

export interface SocialLinkI extends BasicLinkI {
  image: ImageI[];
}