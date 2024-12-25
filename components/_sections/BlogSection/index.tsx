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
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {blogList?.map((blogPost: any) => {
              return (
                <BlogPostCard
                  key={blogPost?.id}
                  title={blogPost?.data?.title}
                  excerpt={blogPost?.data?.excerpt}
                  href={`/blog${blogPost?.previewUrl?.split('/blog')[1]}`}
                  image={{
                    src: blogPost?.data?.blogImage,
                    alt: `${blogPost?.data?.title} featured blog image`,
                    width: blogPost?.data?.blogImageWidth,
                    height: blogPost?.data?.blogImageHeight,
                    rounded: ROUNDED.XL
                  }}
                  publishedDate={{
                    month: format(new Date(blogPost?.firstPublished), "MMM"),
                    day: format(new Date(blogPost?.firstPublished), "d")
                  }}
                  category={blogPost?.data?.category?.id}
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