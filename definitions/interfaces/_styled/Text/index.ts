import { FONT_SIZE } from "@/definitions/enums";

export interface TextContentI {
  text: string;
  fontSize?: FONT_SIZE;
  bold?: boolean;
  semiBold?: boolean;
  medium?: boolean;
}