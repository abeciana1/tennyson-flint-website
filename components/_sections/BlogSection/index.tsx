import { use } from 'react'
import { BlogSectionI } from '@/definitions/interfaces/_sections'
import { Heading1 } from '@/components/_styled/headings'
import TextContent from '@/components/_styled/Text'
import {
  FONT_STYLE,
  FONT_FAMILY,
  FONT_SIZE,
  ROUNDED
} from '@/definitions/enums'
import MarginSection from '@/components/_sections/MarginSection'
import { getBlogPostListData } from '@/helper-functions/builder-fetch'
import BlogPostCard from '@/components/_blog/BlogPostCard'
import {format} from 'date-fns'

const BlogSection: React.FC<BlogSectionI> = ({
  preheading,
  headline
}) => {
  const blogList = use(getBlogPostListData(3))
  return (
    <section>
      <MarginSection>
        <Heading1
          text={preheading}
          fontSize='2xl'
          fontFamily={FONT_FAMILY.SANS}
        />
        <TextContent
          text={headline}
          dataTestId='headline'
          fontSize={FONT_SIZE.XXXXL}
          fontStyle={FONT_STYLE.MEDIUM}
          fontFamily={FONT_FAMILY.CINZEL}
        />
        {blogList &&
          <section className='mt-12 flex flex-row gap-6 justify-center'>
            {blogList?.map((post) => {
              return (
                <BlogPostCard
                  key={post?.id}
                  title={post?.data?.title}
                  excerpt={post?.data?.excerpt}
                  href={`/blog${post?.previewUrl?.split('/blog')[1]}`}
                  image={{
                    src: post?.data?.blogImage,
                    alt: `${post?.data?.title} featured blog image`,
                    width: post?.data?.blogImageWidth,
                    height: post?.data?.blogImageHeight,
                    rounded: ROUNDED.XL
                  }}
                  publishedDate={{
                    month: format(new Date(post?.firstPublished), "MMM"),
                    day: format(new Date(post?.firstPublished), "d")
                  }}
                  category={post?.data?.category?.id}
                />
              )
            })}
          </section>
        }
      </MarginSection>
    </section>
  )
}

export default BlogSection