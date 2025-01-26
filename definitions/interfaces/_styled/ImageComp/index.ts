import { ROUNDED } from '@/definitions/enums';
import { ComponentI } from '@/definitions/interfaces'

export interface ImageI extends ComponentI {
  file: {
    filename: string;
  }
  alt_text: string;
  width: string;
  height: string;
  rounded_edges: ROUNDED;
}