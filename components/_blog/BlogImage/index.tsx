import { BlogImageI } from '@/definitions/interfaces/_styled/ImageComp'
import { ROUNDED } from '@/definitions/enums'
import ImageComp from '@/components/_styled/ImageComp'
import { SbBlokData, storyblokEditable } from '@storyblok/react/rsc';

const BlogImage: React.FC<BlogImageI> = ({
  blok
}) => {
  const {
    file,
    alt_text,
    width,
    height,
    rounded_edges = ROUNDED.MD
  } = blok
  return (
    <section {...storyblokEditable(blok as unknown as SbBlokData)} className='px-5 sm:px-20 flex justify-center py-4 md:py-8'>
      <ImageComp
        file={file}
        alt_text={alt_text}
        width={width}
        height={height}
        rounded_edges={rounded_edges}
      />
    </section>
  )
}

export default BlogImage