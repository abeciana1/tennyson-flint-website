export const fetchStory = async (
  version: "draft" | "published",
  slug?: string[]
) => {
  const correctSlug = `/${slug ? slug.join("/") : "home"}`;
  const resolveRelations = correctSlug.includes("/books/")
  ? "meetCharacters.characters"
  : "";
  const url = `https://api-us.storyblok.com/v2/cdn/stories${correctSlug}?token=${process.env.NEXT_PUBLIC_STORYBLOK_TOKEN}&version=${version}&resolve_relations=${resolveRelations}`
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    next: { revalidate: 3600 },
  });
  const data = await res.json();
  return data
};

export const fetchContentStories = async (
  version: "draft" | "published",
  dirName: string,
  options = {}
) => {
  const params = new URLSearchParams({
    ...Object.fromEntries(
      Object.entries(options).map(([key, value]) => [key, String(value)])
    ),
  });
  const url = `https://api-us.storyblok.com/v2/cdn/stories?starts_with=${dirName}${options && `&${params?.toString()}`}&token=${process.env.NEXT_PUBLIC_STORYBLOK_TOKEN}&version=${version}`
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    next: { revalidate: 3600 },
  });
  const data = await res.json();
  return data
}

export const fetchSingleStory = async (uuid: string, version: "draft" | "published") => {
  const url = `https://api-us.storyblok.com/v2/cdn/stories/${uuid}?find_by=uuid&token=${process.env.NEXT_PUBLIC_STORYBLOK_TOKEN}&version=${version}`
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    next: { revalidate: 3600 },
  });
  const data = await res.json();
  return data
}