import {
  FONT_SIZE,
  FONT_STYLE,
  FONT_FAMILY,
  COLORS
} from "@/definitions/enums";
import { ComponentI } from '@/definitions/interfaces'

export interface TextContentI {
  blok: {
    text: string;
    font_size?: FONT_SIZE;
    font_style?: FONT_STYLE;
    font_family?: FONT_FAMILY;
    color?: COLORS;
    data_test_id?: string;
  }
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