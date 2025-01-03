import TextContent from '@/components/_styled/Text'
import {
  FONT_FAMILY,
  FONT_SIZE,
  COLORS,
  FONT_STYLE
} from '@/definitions/enums'
import { RenderBuilderContent } from '@/components/builder'
import { use } from 'react'
import { fetchFooter } from '@/helper-functions/builder-fetch'

const Footer: React.FC = () => {
  const content = use(fetchFooter())
  return (
    <>
      <footer className='bg-gray relative bottom-0 w-full px-5 sm:px-10 pt-2 md:pt-4 lg:pt-8'>
        <section className='mx-auto text-center'>
          <TextContent
            text='Tennyson Flint'
            fontFamily={FONT_FAMILY.CINZEL_DEC}
            fontSize={FONT_SIZE.XXXL}
            color={COLORS.WHITE}
            fontStyle={FONT_STYLE.SEMI_BOLD}
          />
          <RenderBuilderContent content={content} model='footer' />
        </section>
      </footer>
    </>
  )
}

export default Footer