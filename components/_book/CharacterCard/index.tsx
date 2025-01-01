import { CharacterCardI } from '@/definitions/interfaces/_book'
import TextContent from '@/components/_styled/Text'
import ImageComp from '@/components/_styled/ImageComp'
import {
  FONT_SIZE
} from '@/definitions/enums'

const CharacterCard: React.FC<CharacterCardI> = ({
  name,
  description,
  image
}) => {
  const {
    src,
    alt,
    width,
    height,
    rounded
  } = image
  return (
    <div className='flex gap-6 items-start max-w-[550px]'>
      <div>
        <ImageComp
          src={src}
          alt={alt}
          width={width}
          height={height}
          rounded={rounded}
        />
      </div>
      <div>
        <TextContent
          text={name}
          dataTestId='characterName'
          fontSize={FONT_SIZE.XL}
        />
        <div className='mt-6'>
          <TextContent
            dataTestId='characterDescription'
            text={description}
          />
        </div>
      </div>
    </div>
  )
}

export default CharacterCard