import { ROUNDED } from '@/definitions/enums';

export interface ImageI {
  file: {
    filename: string;
  }
  alt_text: string;
  width: string;
  height: string;
  rounded_edges: ROUNDED;
}