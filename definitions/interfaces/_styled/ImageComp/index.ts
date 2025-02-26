import { ROUNDED } from '@/definitions/enums';
import { ComponentI } from '@/definitions/interfaces'

export interface ImageI extends ComponentI {
  file: {
    filename: string;
  }
  alt_text: string;
  width: string | number;
  height: string | number;
  rounded_edges: ROUNDED;
}

export interface BlogImageI {
  blok: ImageI
}

export type RoundedType = 'NONE' | 'SM' | 'MD' | 'LG' | 'XL' | 'FULL' | 'XXL'