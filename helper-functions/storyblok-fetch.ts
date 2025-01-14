import {
  getStoryblokApi,
  StoryblokClient
} from "@storyblok/react/rsc";

export const fetchStory = async (
  version: "draft" | "published",
  slug?: string[]
) => {
  const correctSlug = `/${slug ? slug.join("/") : "home"}`;
  const storyblokApi: StoryblokClient = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/${correctSlug}`, { version: version});
};

export const fetchContentStories = async (
  version: "draft" | "published",
  dirName: string
) => {
  const storyblokApi: StoryblokClient = getStoryblokApi();
  const content = await storyblokApi.get(`cdn/stories`, {
    version: version,
    starts_with: dirName
  })
  return content
}