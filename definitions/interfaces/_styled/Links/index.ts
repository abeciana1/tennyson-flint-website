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
  target_blank?: boolean;
}

export interface ButtonLinkI extends BasicLinkI {
  link_text: string;
  background_color: COLORS;
  arrow_icon?: boolean;
  rounded_edges: ROUNDED;
  text_color?: COLORS;
  font_style?: FONT_STYLE;
}

export interface SocialLinkI extends BasicLinkI {
  title: string;
  href: string;
  image: ImageI[];
  _uid?: string;
}