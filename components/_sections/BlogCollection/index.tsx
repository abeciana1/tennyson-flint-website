import { Heading1 } from '@/components/_styled/headings'
import { BlogCollectionI } from '@/definitions/interfaces/_sections'
import MarginSection from '@/components/_sections/MarginSection'
import { getBlogPostListData } from '@/helper-functions/builder-fetch'
import { use } from 'react'
import BlogPostCard from '@/components/_blog/BlogPostCard'
import { ROUNDED } from '@/definitions/enums'
import { format } from 'date-fns'

const BlogCollection: React.FC<BlogCollectionI> = ({
  heading
}) => {
  const blogList = use(getBlogPostListData(20))
  return (
    <MarginSection>
      <Heading1
        text={heading}
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
  )
}

export default BlogCollection