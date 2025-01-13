export interface NavLinkI {
  _uid?: string;
  label: string;
  href: string;
}

export interface NavBarI {
  blok: {
    navLinks: NavLinkI[];
  }
}