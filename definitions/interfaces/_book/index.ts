import { ImageI } from '@/definitions/interfaces/_styled/ImageComp'
import {
  type BuilderElement,
  type Content
} from '@builder.io/react'

export interface BookDetailTemplateI {
  preheading: string;
  bookTitle: string;
  bookCover: ImageI;
  slug: string;
}

export interface TabListI {
  tabList: { tabName: string; blocks: BuilderElement[] }[];
}

export interface MeetTheCharactersI {
  headingText: string;
  builderState: {
    content: Content
  }
}

export interface CharacterI {
  characterName: string;
  characterBio: string;
  characterImage: string;
  characterImgHeight: number;
  characterImgWidth: number;
}