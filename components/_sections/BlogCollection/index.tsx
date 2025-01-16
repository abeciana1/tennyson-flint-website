import { Heading1 } from '@/components/_styled/headings'
import { BlogCollectionI } from '@/definitions/interfaces/_sections'
import MarginSection from '@/components/_sections/MarginSection'
import BlogPostCard from '@/components/_blog/BlogPostCard'
import { ROUNDED } from '@/definitions/enums'
import { format } from 'date-fns'
import { BlogPostI } from '@/definitions/interfaces/_blog'
import { fetchContentStories } from '@/helper-functions/storyblok-fetch'

const BlogCollection: React.FC<BlogCollectionI> = async ({
  blok
}) => {
  const {
    heading
  } = blok
  const blogList = await fetchContentStories('published', 'blog', { content_type: 'blogPage' })
  return (
    <MarginSection>
      <Heading1
        text={heading}
      />
      {blogList &&
        <section className='mt-12 flex flex-row flex-wrap gap-6'>
          {blogList?.data?.stories?.map((blogPost: BlogPostI) => {
            return (
                <BlogPostCard
                  key={blogPost?.uuid}
                  title={blogPost?.name}
                  excerpt={blogPost?.content?.excerpt}
                  href={`/blog/${blogPost?.slug}`}
                  image={{
                    file: blogPost?.content?.featured_image[0]?.file,
                    alt_text: `${blogPost?.name} featured blog image`,
                    width: blogPost?.content?.featured_image[0]?.width,
                    height: blogPost?.content?.featured_image[0]?.height,
                    rounded_edges: ROUNDED.XL
                  }}
                  publishedDate={{
                    month: format(new Date(blogPost?.first_published_at), "MMM"),
                    day: format(new Date(blogPost?.first_published_at), "d")
                  }}
                  category={blogPost?.content?.category}
                />
            )
          })}
        </section>
      }
    </MarginSection>
  )
}

export default BlogCollection