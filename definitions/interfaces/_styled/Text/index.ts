import {
  FONT_SIZE,
  FONT_STYLE,
  FONT_FAMILY,
  COLORS
} from "@/definitions/enums";
import { ComponentI } from '@/definitions/interfaces'

export interface TextContentI {
  text: string;
  fontSize?: FONT_SIZE;
  fontStyle?: FONT_STYLE;
  fontFamily?: FONT_FAMILY;
  color?: COLORS;
  dataTestId?: string;
}

export interface MarkdownTextI extends ComponentI {
  text: string;
}

export interface BlokTextContentI {
  text: string;
  font_size?: FONT_SIZE;
  font_family?: FONT_FAMILY;
  font_style?: FONT_STYLE;
  color?: COLORS;
}