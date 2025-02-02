import { ImageI } from '@/definitions/interfaces/_styled/ImageComp'
import { ButtonLinkI, SocialLinkI } from '@/definitions/interfaces/_styled/Links'
import { COLORS } from '@/definitions/enums'

export interface HeroSectionI {
  blok: {
    preheading?: string;
    heading: string;
    subheading?: string;
    text_body: string;
    cta_children: ButtonLinkI[];
    image: ImageI[];
    responsive_reverse: boolean;
  }
}

export interface MarginSectionI {
  children: React.ReactNode | React.ReactNode[]
}

export interface SocialLinkSectionI {
  blok: {
    links: SocialLinkI[];
  }
}

export interface BlogSectionI {
  blok: {
    preheading: string;
    headline: string;
  }
}

export interface BlogCollectionI {
  blok: {
    heading: string;
  }
}

export interface FormContainerI extends MarginSectionI {
  heading: string;
  textBody: string;
  bgColor: COLORS;
  textColor: COLORS;
}

// forms

export interface ContactFormI {
  blok: {
    heading: string;
    text_body: string;
    background_color: COLORS;
    text_color: COLORS;
  }
}

// form data
export interface ContactFormDataI {
  firstName: string;
  lastName: string;
  email: string;
  textBody: string;
}