import {
  SbBlokData,
  storyblokInit,
  apiPlugin
} from "@storyblok/react/rsc";
import FallbackComponent from '@/components/FallbackComponent'

import { Page, BlogPage, BookPage } from '@/components/_page'
import HeroSection from '@/components/_sections/HeroSection'
import NavBar from '@/components/_navigation/NavBar'
import NavLink from '@/components/_navigation/NavLink'
import BlogSection from '@/components/_sections/BlogSection'
import BlogImage from '@/components/_blog/BlogImage'
import BlogContent from '@/components/_blog/BlogContent'
import BlogCollection from '@/components/_sections/BlogCollection'
import Footer from '@/components/_navigation/Footer'

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
    "hero-section": HeroSection,
    headerNavigation: NavBar,
    navLink: NavLink,
    blogSection: BlogSection,
    blogImage: BlogImage,
    blogPage: BlogPage,
    blogContent: BlogContent,
    blogCollection: BlogCollection,
    footer: Footer
  },
  enableFallbackComponent: true,
  customFallbackComponent: FallbackComponent,
  ...options,
});