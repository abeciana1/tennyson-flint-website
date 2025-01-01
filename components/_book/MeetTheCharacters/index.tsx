import MarginSection from '@/components/_sections/MarginSection'
import { Heading2 } from '@/components/_styled/headings'
import { MeetTheCharactersI } from '@/definitions/interfaces/_book'
import { BuilderBlocks } from '@builder.io/react'

const MeetTheCharacters: React.FC<MeetTheCharactersI> = ({
  headingText,
}) => {
  return (
    <MarginSection>
      <Heading2
        text={headingText}
      />
    </MarginSection>
  )
}

export default MeetTheCharacters