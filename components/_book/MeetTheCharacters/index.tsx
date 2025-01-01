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
      {(builderState?.content?.data?.state?.character?.results) &&
        <div className='flex flex-wrap gap-12 mt-6'>
          {builderState?.content?.data?.state?.character?.results?.map(({
            data
          }: CharacterI, index: number) => {
            return (
              <CharacterCard
                key={data?.characterName+index}
                name={data?.characterName}
                description={data?.characterBio}
                image={{
                  src: data?.characterImage,
                  alt: `${data?.characterName} image`,
                  width: data?.characterImgWidth,
                  height: data?.characterImgHeight,
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