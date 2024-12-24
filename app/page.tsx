import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from '@/components/builder'

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: Promise<{
    page: string[];
  }>;
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
      <div className='relative'>
        <main className='min-h-screen relative'>
          <RenderBuilderContent content={content} model={builderModelName} />
        </main>
      </div>
    </>
  );
}
