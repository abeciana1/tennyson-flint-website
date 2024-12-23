import {
  FONT_SIZE,
  FONT_STYLE,
  FONT_FAMILY,
  COLORS
} from "@/definitions/enums";

export interface TextContentI {
  text: string;
  fontSize?: FONT_SIZE;
  fontStyle?: FONT_STYLE;
  fontFamily?: FONT_FAMILY;
  color?: COLORS;
}