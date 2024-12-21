import { ImageI } from '@/definitions/interfaces/_styled/ImageComp'

export interface HeroSectionI {
  heading: string;
  subheading: string;
  textBody: string;
  ctaChildren: React.ReactNode | React.ReactNode[];
  image: ImageI;
}