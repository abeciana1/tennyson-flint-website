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
  character: {
    value: {
      data: {
        characterName: string;
        characterBio: string;
        characterImage: string;
        characterImgHeight: number;
        characterImgWidth: number;
      }
    }
  }
}

export interface CharacterCardI {
  name: string;
  description: string;
  image: ImageI;
}

export interface BookCollectionI {
  builderState: {
    content: Content
  }
}

export interface BookI {
  data: {
    blocks: BuilderElement[],
    bookImage: string;
    bookImageHeight: number;
    bookImageWidth: number;
    bookTitle: string;
    slug: string;
    state: object;
    httpRequests: object;
    inputs: [];
  }
}

export interface BookCollectionCardI {
  bookTitle: string;
  slug: string;
  bookCover: ImageI;
}