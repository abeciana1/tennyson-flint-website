import {
  SbBlokData,
  storyblokInit,
  apiPlugin
} from "@storyblok/react/rsc";
import FallbackComponent from '@/components/FallbackComponent'

import Page from '@/components/_page'
import HeroSection from '@/components/_sections/HeroSection'

export interface SbPageData extends SbBlokData {
  body: SbBlokData[];
}

export interface PageProps {
  blok: SbBlokData;
  params: Promise<{
    page: string[];
  }>;
}

export const initStoryblok = (options = {}) => storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    "hero-section": HeroSection
  },
  enableFallbackComponent: true,
  customFallbackComponent: FallbackComponent,
  ...options,
});