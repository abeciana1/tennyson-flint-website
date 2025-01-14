import TextContent from '@/components/_styled/Text'
import {
  FONT_SIZE,
  FONT_STYLE
} from '@/definitions/enums'
import { BlogCategoryI } from '@/definitions/interfaces/_blog'

const BlogCategory: React.FC<BlogCategoryI> = ({
  name
}) => {
  return (
    <>
    {name &&
      <div className='bg-slate-300 rounded-md px-2 py-1 max-w-fit'>
        <TextContent
          dataTestId='category'
          text={name}
          fontSize={FONT_SIZE.MD}
          fontStyle={FONT_STYLE.MEDIUM}
        />
      </div>
      }
    </>
  )
}

export default BlogCategory