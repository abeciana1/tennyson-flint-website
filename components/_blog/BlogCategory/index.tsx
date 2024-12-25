import TextContent from '@/components/_styled/Text'
import {
  FONT_SIZE,
  FONT_STYLE
} from '@/definitions/enums'
import { BlogCategoryI } from '@/definitions/interfaces/_blog'
import { use } from 'react'
import { getBlogCategory } from '@/helper-functions/builder-fetch'

const BlogCategory: React.FC<BlogCategoryI> = ({
  id
}) => {
  const category = use(getBlogCategory(id))
  return (
    <>
    {category &&
      <div className='bg-slate-300 rounded-md px-2 py-1 max-w-fit'>
        <TextContent
          text={category?.data?.categoryName}
          fontSize={FONT_SIZE.MD}
          fontStyle={FONT_STYLE.MEDIUM}
        />
      </div>
      }
    </>
  )
}

export default BlogCategory