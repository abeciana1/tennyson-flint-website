import { BlogPostCardDateI } from '@/definitions/interfaces/_blog'
import TextContent from '@/components/_styled/Text'
import {
  FONT_STYLE,
  FONT_SIZE
} from '@/definitions/enums'

const BlogDate: React.FC<BlogPostCardDateI> = ({
  month,
  day
}) => {
  return (
    <div className='h-14 w-14 relative rounded-full flex flex-col justify-center bg-slate-300 text-center'>
      <TextContent
        blok={{
          text: month,
          font_style: FONT_STYLE.BOLD,
          font_size: FONT_SIZE.LG
        }}
      />
      <TextContent
        blok={{
          text: day,
          font_style: FONT_STYLE.BOLD,
          font_size: FONT_SIZE.LG
        }}
      />
    </div>
  )
}

export default BlogDate