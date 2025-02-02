import { ImageI } from '@/definitions/interfaces/_styled/ImageComp'

export interface BlogTemplateI {
  blok: {
    title: string;
    excerpt?: string;
    image: ImageI[];
    publishedDate: string;
  }
}

export interface BlogContentI {
  blok: {
    text: string;
  }
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
  name: string;
}

export interface BlogPostI {
  name: string;
  uuid: string;
  slug: string;
  first_published_at: string;
  full_slug: string;
  content: {
    category: string;
    excerpt: string;
    featured_image: ImageI[];
    published_date: string;
  }
}