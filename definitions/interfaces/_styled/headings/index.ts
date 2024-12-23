import { COLORS, FONT_STYLE } from '@/definitions/enums'

export interface HeadingI {
  text: string;
  fontSize?: string;
  color?: COLORS;
  fontStyle?: FONT_STYLE;
}