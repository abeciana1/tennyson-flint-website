import { COLORS, FONT_STYLE, ROUNDED } from '@/definitions/enums'
import { ImageI } from '@/definitions/interfaces/_styled/ImageComp'
import { ComponentI } from '@/definitions/interfaces'

export interface ButtonLinkDataI extends ComponentI {
  title: string;
  href: string;
  link_text: string;
  background_color: COLORS;
  text_color: COLORS;
  arrow_icon: boolean;
  target_blank: boolean;
  rounded_edges: ROUNDED;
  font_style: FONT_STYLE;
}

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
  title: string;
  href: string;
  image: ImageI[];
  _uid?: string;
}