import { COLORS, FONT_STYLE, FONT_FAMILY } from '@/definitions/enums'

export interface HeadingI {
  text: string;
  fontSize?: string;
  color?: COLORS;
  fontStyle?: FONT_STYLE;
  fontFamily?: FONT_FAMILY;
}