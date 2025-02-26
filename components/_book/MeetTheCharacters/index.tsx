import MarginSection from '@/components/_sections/MarginSection'
import { Heading2 } from '@/components/_styled/headings'
import { MeetTheCharactersI } from '@/definitions/interfaces/_book'
import CharacterCard from '@/components/_book/CharacterCard'

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
            character: string, index:number) => {
              console.log('character', character)
            return (
              <CharacterCard
                key={`${character}-${index}`}
                uuid={character}
              />
            )
          })}
        </div>
      }
    </MarginSection>
  )
}

export default MeetTheCharacters