import { ImageI } from '@/definitions/interfaces/_styled/ImageComp'
import { type BuilderElement } from '@builder.io/react'

export interface BookDetailTemplateI {
  preheading: string;
  bookTitle: string;
  bookCover: ImageI;
  slug: string;
}

export interface TabListI {
  tabList: { tabName: string; blocks: React.ReactNode[] }[];
  builderBlock: BuilderElement;
}