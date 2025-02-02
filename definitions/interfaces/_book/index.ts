import { ImageI } from '@/definitions/interfaces/_styled/ImageComp'
import { BlokTextContentI } from '@/definitions/interfaces/_styled/Text'
import { TabGroupI } from '@/definitions/interfaces/_styled/TabGroup'
import { ButtonLinkDataI } from '@/definitions/interfaces/_styled/Links'
import { ComponentI } from '@/definitions/interfaces'

export interface BookDetailTemplateI {
  preheading: BlokTextContentI;
  bookTitle: string;
  bookCover: ImageI;
  tabGroup: TabGroupI[];
  links: ButtonLinkDataI[];
}

export interface MeetTheCharactersI {
  blok: {
    heading_text: string;
    characters: CharacterI[];
  }
}

export interface CharacterI {
  content: {
    _uid: string;
    name: string;
    description: string;
    image: ImageI[] & ComponentI;
  }
}

export interface CharacterCardI extends ComponentI {
  name: string;
  description: string;
  image: ImageI;
}

export interface BookI {
  name: string;
  uuid: string;
  slug: string;
  content: {
    book_title: string;
    book_cover: ImageI[];
  }
}

export interface BookCollectionCardI {
  bookTitle: string;
  slug: string;
  bookCover: ImageI;
}