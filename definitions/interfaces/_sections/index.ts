import { ImageI } from '@/definitions/interfaces/_styled/ImageComp'
import { ButtonLinkI, SocialLinkI } from '@/definitions/interfaces/_styled/Links'
import { COLORS } from '@/definitions/enums'

export interface HeroSectionI {
  preHeading?: string;
  heading: string;
  subheading?: string;
  textBody: string;
  ctaChildren: ButtonLinkI[];
  image: ImageI[];
}

export interface MarginSectionI {
  children: React.ReactNode | React.ReactNode[]
}

export interface SocialLinkSectionI {
  socialLinks: SocialLinkI[];
}

export interface BlogSectionI {
  preheading: string;
  headline: string;
}

export interface BlogCollectionI {
  heading: string;
}

export interface FormContainerI extends MarginSectionI {
  heading: string;
  textBody: string;
  bgColor: COLORS;
  textColor: COLORS;
}

// forms

export interface ContactFormI extends FormContainerI {
  submitBtnText: string;
  submitBtnColor: COLORS;
  submitBtnTextColor: COLORS;
}

// form data
export interface ContactFormDataI {
  firstName: string;
  lastName: string;
  email: string;
  textBody: string;
}