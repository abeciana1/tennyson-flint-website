import MarginSection from '@/components/_sections/MarginSection'
import { Heading2 } from '@/components/_styled/headings'
import { MeetTheCharactersI, CharacterI } from '@/definitions/interfaces/_book'
import CharacterCard from '@/components/_book/CharacterCard'
import { ROUNDED } from '@/definitions/enums'

const MeetTheCharacters: React.FC<MeetTheCharactersI> = ({
  blok
}) => {
  const {
    heading_text,
    characters
  } = blok
  return (
    <MarginSection>
      <Heading2
        text={heading_text}
      />
      {(characters && characters?.length > 0) &&
        <div className='flex flex-wrap gap-12 mt-6'>
          {characters?.map((
            character: CharacterI) => {
            console.log({ character })
            return (
              <CharacterCard
                key={character?.content?._uid}
                name={character?.content?.name}
                description={character?.content?.description}
                image={{
                  file: character?.content?.image[0]?.file,
                  alt_text: character?.content?.image[0]?.alt_text,
                  width: character?.content?.image[0]?.width,
                  height: character?.content?.image[0]?.height,
                  rounded_edges: ROUNDED.MD
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