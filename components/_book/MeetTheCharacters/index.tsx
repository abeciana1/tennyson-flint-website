import MarginSection from '@/components/_sections/MarginSection'
import { Heading2 } from '@/components/_styled/headings'
import { MeetTheCharactersI, CharacterI } from '@/definitions/interfaces/_book'
import CharacterCard from '@/components/_book/CharacterCard'
import { ROUNDED } from '@/definitions/enums'

const MeetTheCharacters: React.FC<MeetTheCharactersI> = ({
  headingText,
  builderState
}) => {
  return (
    <MarginSection>
      <Heading2
        text={headingText}
      />
      {(builderState?.content?.data?.characters) &&
        <div className='flex flex-wrap gap-12 mt-6'>
          {builderState?.content?.data?.characters?.map(({
            character
          }: CharacterI, index: number) => {
            return (
              <CharacterCard
                key={character?.value?.data?.characterName+index}
                name={character?.value?.data?.characterName}
                description={character?.value?.data?.characterBio}
                image={{
                  src: character?.value?.data?.characterImage,
                  alt: `${character?.value?.data?.characterName} image`,
                  width: character?.value?.data?.characterImgWidth,
                  height: character?.value?.data?.characterImgHeight,
                  rounded: ROUNDED.MD
                }}
              />
            )
          })}
        </div>
      }
    </MarginSection>
  )
}

export default MeetTheCharacters