import { BlogContentI } from '@/definitions/interfaces/_blog'
import MarginSection from '@/components/_sections/MarginSection'

const BlogContent: React.FC<BlogContentI> = ({
  textContent
}) => {
  console.log('textContent', textContent)
  return (
    <MarginSection>
      <div/>
    </MarginSection>
  )
}

export default BlogContent