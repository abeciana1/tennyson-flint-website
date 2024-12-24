import { ImageI } from '@/definitions/interfaces/_styled/ImageComp'
import { ROUNDED } from '@/definitions/enums'
import ImageComp from '@/components/_styled/ImageComp'

const BlogImage: React.FC<ImageI> = ({
  src,
  alt,
  width,
  height,
  rounded = ROUNDED.MD
}) => {
  return (
    <section className='px-5 sm:px-20 flex justify-center py-4 md:py-8'>
      <ImageComp
        src={src}
        alt={alt}
        width={width}
        height={height}
        rounded={rounded}
      />
    </section>
  )
}

export default BlogImage