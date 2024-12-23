import { BlogSectionI } from '@/definitions/interfaces/_sections'
import { Heading1 } from '@/components/_styled/headings'
import TextContent from '@/components/_styled/Text'
import {
  FONT_STYLE,
  FONT_FAMILY
} from '@/definitions/enums'
import MarginSection from '@/components/_sections/MarginSection'

const BlogSection: React.FC<BlogSectionI> = ({
  preheading,
  headline
}) => {
  return (
    <section>
      <MarginSection>
        <Heading1
          text={preheading}
          fontSize='2xl'
        />
        <TextContent
          text={headline}
          dataTestId='headline'
          fontStyle={FONT_STYLE.MEDIUM}
          fontFamily={FONT_FAMILY.CINZEL}
        />
      </MarginSection>
    </section>
  )
}

export default BlogSection