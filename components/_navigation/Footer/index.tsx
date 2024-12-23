import { use } from 'react'
import { RenderBuilderContent } from '@/components/builder'
import { fetchFooter } from '@/helper-functions/builder-fetch'
import MarginSection from '@/components/_sections/MarginSection'

const Footer: React.FC = () => {
  const content = use(fetchFooter())
  return (
    <MarginSection>
      <RenderBuilderContent content={content} model='footer' />
    </MarginSection>
  )
}

export default Footer