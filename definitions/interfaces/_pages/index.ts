import { ImageI } from '@/definitions/interfaces/_styled/ImageComp'
import { TextContentI } from '@/definitions/interfaces/_styled/Text'
import { TabGroupI } from '@/definitions/interfaces/_styled/TabGroup'
import { ButtonLinkDataI } from '@/definitions/interfaces/_styled/Links'

export interface BookPageI {
  blok: {
    book_title: string;
    book_cover: ImageI[];
    preheading: TextContentI[];
    seo_title: string;
    seo_description: string;
    number_of_pages: string | number;
    _uid: string;
    tab_group: TabGroupI[];
    links: ButtonLinkDataI[];
    body: any[];
  }
}