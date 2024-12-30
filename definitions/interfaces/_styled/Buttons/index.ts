export interface TabButtonI {
  label: string;
  active: boolean;
  tabIndex: number;
  changeHandler: (tabIndex: number) => void;
}