import { BlogContentI } from '@/definitions/interfaces/_blog'
import '@/components/_blog/BlogContent/blog-content.css'
import Markdown from 'react-markdown'
import Link from 'next/link'
import { storyblokEditable } from '@storyblok/react/rsc';

const BlogContent: React.FC<BlogContentI> = ({
  blok
}) => {
  const {
    text
  } = blok
  return (
    <section
      data-testid='blogContent'
      className='blog-content px-5 sm:px-20'
      {...storyblokEditable(blok)}
    >
      <Markdown
        components={{
          a(props: any) {
            const { node, children } = props
            const hrefLink = node?.properties?.href as string
            const isExternal = hrefLink?.match(/http/i)
            return (
              <Link
                href={node?.properties?.href as string}
                target={isExternal? '_blank' : '_self'}
              >
                {children}{isExternal && <span className='text-base font-bold'>_↗</span>}
              </Link>
            )
            
          }
        }}
      >{text}</Markdown>
    </section>
  )
}

export default BlogContent