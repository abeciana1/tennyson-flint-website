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
        <section className='md:px-10 max-w-[1024px] mx-auto'>
          <div className='text-center'>
            <Heading1
              text={title}
            />
          </div>
          {excerpt &&
            <TextContent
              blok={{
                data_test_id: 'blogExcerpt',
                text: excerpt,
                font_size: FONT_SIZE.XXL,
                font_style: FONT_STYLE.ITALIC
              }}
            />
          }
          <section>
            <div
              className='flex justify-between my-2'
            >
              <TextContent
                blok={{
                  text: 'By Tennyson Flint',
                  font_size: FONT_SIZE.XXL,
                  font_style: FONT_STYLE.MEDIUM
                }}
              />
              <TextContent
                blok={{
                  text: publishedDate,
                  font_size: FONT_SIZE.XXL,
                  font_style: FONT_STYLE.MEDIUM,
                  data_test_id: 'publishedDate'
                }}
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