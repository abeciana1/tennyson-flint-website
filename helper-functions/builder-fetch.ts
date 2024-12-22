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
    const footer = await builder.get('footer', { prerender: true });
    console.log('footer', footer)
    return footer;
  } catch (error) {
    console.error('Error fetching navigation links:', error);
    return []
  }
}