import { BlogContentI } from '@/definitions/interfaces/_blog'
import DOMPurify from 'isomorphic-dompurify';
import '@/components/_blog/BlogContent/blog-content.css'

const BlogContent: React.FC<BlogContentI> = ({
  textContent
}) => {
  const sanitizedContent = DOMPurify.sanitize(textContent)
  return (
    <section
      data-testid='blogContent'
      className='blog-content px-5 sm:px-20'
      dangerouslySetInnerHTML={{__html: sanitizedContent}}
    />
  )
}

export default BlogContent