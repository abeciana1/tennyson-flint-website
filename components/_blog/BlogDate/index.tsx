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
        text={month}
        fontStyle={FONT_STYLE.BOLD}
        fontSize={FONT_SIZE.LG}
      />
      <TextContent
        text={day}
        fontStyle={FONT_STYLE.BOLD}
        fontSize={FONT_SIZE.LG}
      />
    </div>
  )
}

export default BlogDate