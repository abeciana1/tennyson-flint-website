import { ComponentI } from '@/definitions/interfaces'
import { MarkdownTextI } from '@/definitions/interfaces/_styled/Text'
import { ImageI } from '@/definitions/interfaces/_styled/ImageComp'
import { ButtonLinkI } from '@/definitions/interfaces/_styled/Links'

export interface TabGroupI extends ComponentI {
  tabs: TabI[];
}

export interface TabI extends ComponentI {
  label: string;
  active: boolean;
  tabIndex: number;
  changeHandler: (tabIndex: number) => void;
  blocks: MarkdownTextI[] | ImageI[] | ButtonLinkI[];
}