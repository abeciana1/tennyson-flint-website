import { ImageI } from '@/definitions/interfaces/_styled/ImageComp'

export interface BookDetailTemplateI {
  preheading: string;
  bookTitle: string;
  bookCover: ImageI;
  slug: string;
}

export interface TabListI {
  tabList: { tabName: string; blocks: BuilderElement[] }[];
}