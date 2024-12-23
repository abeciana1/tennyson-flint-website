import { SocialLinkI } from '@/definitions/interfaces/_styled/Links'

export interface NavLinkI {
  label: string;
  href: string;
}

export interface FooterI {
  siteDescription: string;
  socialLinks: SocialLinkI[];
}