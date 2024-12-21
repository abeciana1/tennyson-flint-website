import { ROUNDED } from '@/definitions/enums';

export interface ImageI {
  src: string;
  alt: string;
  width: number;
  height: number;
  rounded?: ROUNDED;
}