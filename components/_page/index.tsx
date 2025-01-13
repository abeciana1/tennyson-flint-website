import { storyblokEditable, StoryblokServerComponent } from '@storyblok/react/rsc';

const Page = ({ blok }: any) => {
  return (
  <main {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok: { _uid: string }) => {
      return (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      )
    })}
  </main>
)};

export default Page;