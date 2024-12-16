import type { Metadata } from 'next'
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: Promise<{
    page: string[];
  }>;
}

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const urlStructure: { page: string[]; } = (await params)
  const nestedRoute = urlStructure?.page?.length > 1
  const slugParent = urlStructure?.page[0]
  let modelName = 'page'
  
  if (nestedRoute) {
    if (slugParent === 'blog') modelName = 'blog-post'
    if (slugParent === 'book') modelName = 'book-page'
  }
  
  const content = await builder
    .get(modelName, {
      userAttributes: {
        urlPath: "/" + ((await params)?.page?.join("/") || ""),
      },
    })
    .toPromise();

  if (modelName === 'blog-post') {
    return {
      title: content?.data?.title,
      description: content?.data?.description,
      alternates: {
        canonical: `/blog/${urlStructure?.page[1]}`
      }
    }
  } else if (modelName === 'book-page') {
    return {
      title: content?.data?.title,
      description: content?.data?.description,
      alternates: {
        canonical: `/book/${urlStructure?.page[1]}`
      }
    }
  } else {
    return {
      title: content?.data?.title,
      description: content?.data?.description,
      alternates: {
        canonical: `/${urlStructure?.page[1]}`
      }
    }
  }
}

export default async function Page(props: PageProps) {
  const builderModelName = "page";

  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath: "/" + ((await props?.params)?.page?.join("/") || ""),
      },
    })
    .toPromise();

  return (
    <>
      <div>
        <main>
          <RenderBuilderContent content={content} model={builderModelName} />
        </main>
      </div>
    </>
  );
}
