import { builder } from "@builder.io/sdk";

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
        urlPath: "/" // + ((await params)?.page?.join("/") || ""),
      },
    })
    .toPromise();
    return content
  } catch (error) {
    console.error('Error fetching navigation links:', error);
    return []
  }
}