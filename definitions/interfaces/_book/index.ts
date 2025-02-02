import { ImageI } from '@/definitions/interfaces/_styled/ImageComp'
import { TabGroupI } from '@/definitions/interfaces/_styled/TabGroup'
import { ButtonLinkDataI } from '@/definitions/interfaces/_styled/Links'
import { ComponentI } from '@/definitions/interfaces'
import { FONT_FAMILY, FONT_SIZE, FONT_STYLE, COLORS } from '@/definitions/enums'

export interface BookDetailTemplateI {
  preheading: {
    text: string;
    font_size?: FONT_SIZE;
    font_family?: FONT_FAMILY;
    font_style?: FONT_STYLE;
    color?: COLORS;
  };
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