import { ImageI } from '@/definitions/interfaces/_styled/ImageComp'

export interface BlogTemplateI {
  title: string;
  excerpt?: string;
  image: ImageI;
  publishedDate: string;
}

export interface BlogContentI {
  textContent: string;
}

export interface BlogPostCardDateI {
  month: string;
  day: string
}

export interface BlogPostCardI {
  title: string;
  excerpt: string;
  href: string;
  image: ImageI;
  publishedDate: BlogPostCardDateI;
  category: string;
}

export interface BlogCategoryI {
  id: string;
}