import { ImageI } from '@/definitions/interfaces/_styled/ImageComp'

export interface BlogTemplateI {
  title: string;
  excerpt?: string;
  image: ImageI;
  publishedDate: string;
}