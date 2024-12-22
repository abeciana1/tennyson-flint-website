import { ImageI } from '@/definitions/interfaces/_styled/ImageComp'
import { ButtonLinkI } from '@/definitions/interfaces/_styled/Links'

export interface HeroSectionI {
  preHeading?: string;
  heading: string;
  subheading?: string;
  textBody: string;
  ctaChildren: ButtonLinkI[];
  image: ImageI;
}

export interface MarginSectionI {
  children: React.ReactNode | React.ReactNode[]
}