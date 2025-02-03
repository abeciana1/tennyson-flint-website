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
import BlogCategory from '@/components/_blog/BlogCategory'
import Link from 'next/link'

const BlogPostCard: React.FC<BlogPostCardI> = ({
  title,
  excerpt,
  href,
  image,
  publishedDate,
  category
}) => {
  const {
    file,
    alt_text,
    width,
    height,
    rounded_edges
  } = image
  return (
    <div className='p-6 max-w-[300px]'>
      <div className='relative max-w-60 max-h-40'>
        <Link
          href={href}
          title={`Read this blog post - ${title}`}
        >
          <ImageComp
            file={file}
            alt_text={alt_text}
            width={width}
            height={height}
            rounded_edges={rounded_edges}
          />
        </Link>
        <div className='absolute -bottom-8 right-4 text-center'>
          <BlogDate
            month={publishedDate.month}
            day={publishedDate.day}
          />
        </div>
      </div>
      <div className='mt-6'>
        <div className='mt-4'>
          <BlogCategory
            name={category}
          />
        </div>
        <div className='mt-2'>
          <TextContent
            blok={{
              data_test_id: 'title',
              text: title,
              font_size: FONT_SIZE.XL,
              font_style: FONT_STYLE.SEMI_BOLD
            }}
          />
        </div>
      </div>
      <div className='mt-4'>
        <TextContent
          blok={{
            data_test_id: 'excerpt',
            text: excerpt?.substring(0, 46) + '...',
            font_size: FONT_SIZE.XL
          }}
        />
      </div>
      <div className='mt-5'>
        <ButtonLink
          link_text='Read more'
          title='Read more about this article'
          href={href}
          background_color={COLORS.PINK}
          rounded_edges={ROUNDED.MD}
          font_style={FONT_STYLE.SEMI_BOLD}
        />
      </div>
    </div>
  )
}

export default BlogPostCard