import { BlogTemplateI } from '@/definitions/interfaces/_blog'
import { Heading1 } from '@/components/_styled/headings'
import MarginSection from '@/components/_sections/MarginSection'
import TextContent from '@/components/_styled/Text'
import {
  FONT_SIZE,
  FONT_STYLE,
  ROUNDED
} from '@/definitions/enums'
import ImageComp from '@/components/_styled/ImageComp'

const BlogTemplate: React.FC<BlogTemplateI> = ({
  title,
  excerpt,
  image,
  publishedDate
}) => {
  const {
    file,
    alt_text,
    width,
    height,
    rounded_edges
  } = image[0]
  return (
    <>
      <MarginSection>
        <section className='md:px-10 max-w-[1024px] mx-auto '>
          <div className='text-center'>
            <Heading1
              text={title}
            />
          </div>
          {excerpt &&
            <TextContent
              dataTestId='blogExcerpt'
              text={excerpt}
              fontSize={FONT_SIZE.XXL}
              fontStyle={FONT_STYLE.ITALIC}
            />
          }
          <section>
            <div
              className='flex justify-between my-2'
            >
              <TextContent
                text='By Tennyson Flint'
                fontSize={FONT_SIZE.XXL}
                fontStyle={FONT_STYLE.MEDIUM}
              />
              <TextContent
                dataTestId='publishedDate'
                text={publishedDate}
                fontSize={FONT_SIZE.XXL}
                fontStyle={FONT_STYLE.MEDIUM}
              />
            </div>
            <div className='flex justify-center'>
              <ImageComp
                file={file}
                alt_text={alt_text}
                width={width}
                height={height}
                rounded_edges={ROUNDED[rounded_edges]}
              />
            </div>
          </section>
        </section>
      </MarginSection>
      <hr className='mx-5 sm:mx-20 text-gray' />
    </>
  )
}

export default BlogTemplate