import { BlogSectionI } from '@/definitions/interfaces/_sections'
import { Heading1 } from '@/components/_styled/headings'
import TextContent from '@/components/_styled/Text'
import {
  FONT_STYLE,
  FONT_FAMILY,
  FONT_SIZE,
  ROUNDED,
  COLORS
} from '@/definitions/enums'
import MarginSection from '@/components/_sections/MarginSection'
import BlogPostCard from '@/components/_blog/BlogPostCard'
import {format} from 'date-fns'
import { ButtonLink } from '@/components/_styled/links'
import { fetchContentStories } from '@/helper-functions/storyblok-fetch'
import { BlogPostI } from '@/definitions/interfaces/_blog'
import { use } from 'react'

const BlogSection: React.FC<BlogSectionI> = ({
  blok
}) => {
  const {
    preheading,
    headline
  } = blok
  const blogList = use(fetchContentStories('published', 'blog', { content_type: 'blogPage' }))
  return (
    <MarginSection>
      <Heading1
        text={preheading}
        fontSize='2xl'
        fontFamily={FONT_FAMILY.SANS}
      />
      <TextContent
        blok={{
          text: headline,
          data_test_id: 'headline',
          font_size: FONT_SIZE.XXXXL,
          font_style: FONT_STYLE.MEDIUM,
          font_family: FONT_FAMILY.CINZEL
        }}
      />
      {blogList?.data &&
        <section className='mt-12 flex flex-row flex-wrap gap-6 justify-center'>
          {blogList?.data?.stories?.slice(0,3)?.map((blogPost: BlogPostI) => {
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
      {blogList && blogList?.data?.stories?.length > 2 &&
        <div className='mt-12 flex justify-center'>
          <ButtonLink
            link_text='View all blogs'
            title='Link to all blog posts pages'
            href='/blog'
            background_color={COLORS.NAVY}
            text_color={COLORS.GOLD}
            rounded_edges={ROUNDED.MD}
            font_style={FONT_STYLE.BOLD}
          />
        </div>
      }
    </MarginSection>
  )
}

export default BlogSection