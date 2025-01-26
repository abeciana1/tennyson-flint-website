import { ImageI } from '@/definitions/interfaces/_styled/ImageComp'
import { BlokTextContentI } from '@/definitions/interfaces/_styled/Text'

export interface BookDetailTemplateI {
  preheading: BlokTextContentI;
  bookTitle: string;
  bookCover: ImageI;
}

export interface MeetTheCharactersI {
  headingText: string;
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

export interface BookI {
  data: {
    // blocks: BuilderElement[],
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