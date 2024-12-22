import { COLORS, ROUNDED } from '@/definitions/enums'

export interface BasicLinkI {
  linkText: string;
  title: string;
  href: string;
  targetBlank?: boolean;
}

export interface ButtonLinkI extends BasicLinkI {
  bgColor: COLORS;
  arrow?: boolean;
  rounded: ROUNDED;
}