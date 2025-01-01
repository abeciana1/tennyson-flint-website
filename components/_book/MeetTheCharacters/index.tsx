import MarginSection from '@/components/_sections/MarginSection'
import { Heading2 } from '@/components/_styled/headings'
import { MeetTheCharactersI, CharacterI } from '@/definitions/interfaces/_book'

const MeetTheCharacters: React.FC<MeetTheCharactersI> = ({
  headingText,
  builderState
}) => {
  console.log('builderState', builderState)
  return (
    <MarginSection>
      <Heading2
        text={headingText}
      />
      {(builderState?.content?.data?.state?.character?.results) &&
        <div className='flex flex-wrap'>
          {builderState?.content?.data?.state?.character?.results?.map((char): CharacterI => {
            return (<></>)
          })}
        </div>
      }
    </MarginSection>
  )
}

export default MeetTheCharacters