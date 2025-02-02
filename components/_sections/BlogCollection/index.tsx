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
  const mappedJsonLdPosts = blogList?.data?.stories?.map((blogPost: BlogPostI) => {
    return {
      "@type": "BlogPosting",
      "@id": `https://tennysonflinthttps://tennysonflint.com.com/${blogPost?.full_slug}`,
      "mainEntityOfPage": `https://tennysonflinthttps://tennysonflint.com.com/${blogPost?.full_slug}`,
      "url": `https://tennysonflinthttps://tennysonflint.com.com/${blogPost?.full_slug}`,
      "name": blogPost?.name,
      "headline": blogPost?.name,
      "description": blogPost?.content?.excerpt,
      "author": {
        "@type": "Person",
        "givenName": "Tennyson",
        "familyName": "Flint",
        "additionalName": "Augusta Gilmor",
        "image": {
          "@type": "ImageObject",
          "url": "https://a.storyblok.com/f/320446/440x440/21006da3ff/d856641e-d5ae-40b2-8955-006307e9762c-1.png",
          "width": "150",
          "height": "150"
        }
      },
      "datePublished": format(blogPost?.content?.published_date, 'yyyy-MM-dd'),
      "image": {
        "@type": "ImageObject",
        "@id": blogPost?.content?.featured_image[0]?.file.filename,
        "url": blogPost?.content?.featured_image[0]?.file.filename,
        "width": blogPost?.content?.featured_image[0]?.width,
        "height": blogPost?.content?.featured_image[0]?.height
      }
    }
  })
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Blog",
    "@id": "https://tennysonflint.com/blog",
    "mainEntityOfPage": "https://tennysonflint.com/blog",
    "name": "Tennyson Flint Blog",
    "description": "Articles, Essays, and Inspiration",
    blogPost: mappedJsonLdPosts
  }
  return (
    <MarginSection>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
      />
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