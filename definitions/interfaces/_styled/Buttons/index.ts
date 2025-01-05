import {
  COLORS,
  ROUNDED
} from '@/definitions/enums'

export interface TabButtonI {
  label: string;
  active: boolean;
  tabIndex: number;
  changeHandler: (tabIndex: number) => void;
}

export interface OnClickButtonI {
  text: string;
  bgColor: COLORS;
  textColor: COLORS;
  rounded: ROUNDED;
}

export interface SubmitButtonI extends OnClickButtonI {
  clickHandler: React.MouseEventHandler<HTMLButtonElement>;
}