import { use } from 'react'
import { RenderBuilderContent } from '@/components/builder'
import { fetchFooter } from '@/helper-functions/builder-fetch'
import MarginSection from '@/components/_sections/MarginSection'
import TextContent from '@/components/_styled/Text'
import {
  FONT_FAMILY,
  FONT_SIZE,
  COLORS,
  FONT_STYLE
} from '@/definitions/enums'

const Footer: React.FC = () => {
  const content = use(fetchFooter())
  return (
    <footer className='bg-gray max-h-fit'>
      <MarginSection>
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
      </MarginSection>
    </footer>
  )
}

export default Footer