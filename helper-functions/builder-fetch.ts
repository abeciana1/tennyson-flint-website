import { builder } from "@builder.io/sdk";
import { PageProps } from '@/definitions/interfaces'

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export const fetchNavLinks = async () => {
  try {
    const links = await builder.getAll('navigation-links', { prerender: true });
    return links;
  } catch (error) {
    console.error('Error fetching navigation links:', error);
    return [];
  }
}

export const fetchFooter = async () => {
  try {
    const content = await builder
    .get('footer', {
      userAttributes: {
        urlPath: "/"
      },
    })
    .toPromise();
    return content
  } catch (error) {
    console.error('Error fetching navigation links:', error);
    return []
  }
}

export const modelAndContentFetch = async (props: PageProps) => {
  const urlStructure: { page: string[]; } = (await props?.params)
  const nestedRoute = urlStructure?.page?.length > 1
  const slugParent = urlStructure?.page[0]
  let modelName = 'page'
  
  if (nestedRoute) {
    if (slugParent === 'blog') modelName = 'blog-article'
    if (slugParent === 'book') modelName = 'book-page'
  } 
  return {
    modelName,
    urlStructure
  }
}

export const pageContentDataFetch = async (props: PageProps, modelName: string) => {
  try {
    const content = await builder
    .get(modelName, {
      userAttributes: {
        urlPath: "/" + ((await props?.params)?.page?.join("/") || ""),
      },
    })
    .toPromise();
    return content
  } catch (error) {
    console.error('Error fetching page content data:', error);
    return []
  }
}