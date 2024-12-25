import { ImageI } from '@/definitions/interfaces/_styled/ImageComp'
import { BuilderContent } from '@builder.io/sdk';

export interface BookDetailTemplateI {
  preheading: string;
  bookTitle: string;
  bookCover: ImageI;
  content: BuilderContent;
}