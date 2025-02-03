import TextContent from '@/components/_styled/Text'
import {
  FONT_FAMILY,
  FONT_SIZE,
  COLORS,
  ROUNDED,
  FONT_STYLE
} from '@/definitions/enums'
import { Heading1 } from '@/components/_styled/headings'
import { ButtonLink } from '@/components/_styled/links'

const NotFound = () => {
  return (
    <>
      <title>Page Not Found | Tennyson Flint</title>
      <meta name='description' content='The page you are looking for does not exist.' />
      <main className='grow px-2.5'>
        <section className='flex flex-col justify-center items-center text-center h-screen max-h-[500px]'>
          <Heading1
            text='Page Not Found'
          />
          <div className='mb-5'>
            <TextContent
              blok={{
                text: 'The page you are looking for does not exist.',
                font_size: FONT_SIZE.XXL,
                color: COLORS.BLACK,
                font_family: FONT_FAMILY.SANS
              }}
            />
          </div>
          <ButtonLink
            link_text='Return to the homepage'
            href='/'
            title='Return to the homepage'
            background_color={COLORS.NAVY}
            text_color={COLORS.GOLD}
            rounded_edges={ROUNDED.MD}
            font_style={FONT_STYLE.MEDIUM}
            arrow_icon
          />
        </section>
      </main>
    </>
  )
}

export default NotFound