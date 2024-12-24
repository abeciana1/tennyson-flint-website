import { BlogTemplateI } from '@/definitions/interfaces/_blog'
import { Heading1 } from '@/components/_styled/headings'
import MarginSection from '@/components/_sections/MarginSection'
import TextContent from '@/components/_styled/Text'
import {
  FONT_SIZE,
  FONT_STYLE
} from '@/definitions/enums'
import ImageComp from '@/components/_styled/ImageComp'

const BlogTemplate: React.FC<BlogTemplateI> = ({
  title,
  excerpt,
  image,
  publishedDate
}) => {
  const {
    src,
    alt,
    width,
    height,
    rounded
  } = image
  return (
    <>
      <MarginSection>
        <section className='md:px-10'>
          <Heading1
            text={title}
          />
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
                src={src}
                alt={alt}
                width={width}
                height={height}
                rounded={rounded}
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