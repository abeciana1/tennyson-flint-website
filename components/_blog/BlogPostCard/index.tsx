import { BlogPostCardI } from '@/definitions/interfaces/_blog'
import TextContent from '@/components/_styled/Text'
import ImageComp from '@/components/_styled/ImageComp'
import {
  ROUNDED,
  FONT_SIZE,
  COLORS,
  FONT_STYLE
} from '@/definitions/enums'
import { ButtonLink } from '@/components/_styled/links'
import BlogDate from '@/components/_blog/BlogDate'

const BlogPostCard: React.FC<BlogPostCardI> = ({
  title,
  excerpt,
  href,
  image,
  publishedDate,
  category
}) => {
  const {
    src,
    alt,
    width,
    height,
    rounded
  } = image
  console.log('category', category)
  return (
    <div>
      <div className='relative w-72'>
        <ImageComp
          src={src}
          alt={alt}
          width={width}
          height={height}
          rounded={rounded}
        />
        <div className='absolute -bottom-8 right-2'>
          <BlogDate
            month={publishedDate.month}
            day={publishedDate.day}
          />
        </div>
      </div>
      <div className='mt-6'>
        <div className='mt-4'>category</div>
        <TextContent
          dataTestId='title'
          text={title}
          fontSize={FONT_SIZE.XL}
          fontStyle={FONT_STYLE.SEMI_BOLD}
        />
      </div>
      <div className='mt-4'>
        <TextContent
          dataTestId='excerpt'
          text={excerpt?.substring(0, 46) + '...'}
          fontSize={FONT_SIZE.XL}
        />
      </div>
      <div className='mt-5'>
        <ButtonLink
          linkText='Read more'
          title='Read more about this article'
          href={href}
          bgColor={COLORS.PINK}
          rounded={ROUNDED.MD}
        />
      </div>
    </div>
  )
}

export default BlogPostCard