import { ISbResponse, getStoryblokApi, ISbStoriesParams, StoryblokClient } from "@storyblok/react/rsc";

export async function fetchData() {
  let sbParams: ISbStoriesParams = { version: 'draft' };

  const storyblokApi: StoryblokClient = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams);
}

export const fetchStory = async (
  version: "draft" | "published",
  slug?: string[]
) => {
  getStoryblokApi();
  const correctSlug = `/${slug ? slug.join("/") : "home"}`;
  return fetch(
    `
    https://api.storyblok.com/v2/cdn/stories${correctSlug}?version=${version}&token=${process.env.NEXT_PUBLIC_STORYBLOK_TOKEN}`,
    {
      next: { tags: ["cms"] },
      cache: version === "published" ? "default" : "no-store",
    }
  ).then((res) => res.json()) as Promise<{ story: ISbResponse }>;
};