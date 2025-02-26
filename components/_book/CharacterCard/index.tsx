import { CharacterI } from '@/definitions/interfaces/_book'
import TextContent from '@/components/_styled/Text'
import ImageComp from '@/components/_styled/ImageComp'
import {
  FONT_SIZE,
  FONT_STYLE,
  ROUNDED
} from '@/definitions/enums'
import { fetchSingleStory } from '@/helper-functions/storyblok-fetch'
import { RoundedType } from '@/definitions/interfaces/_styled/ImageComp'

const CharacterCard: React.FC<CharacterI> = async ({
  uuid
}) => {
  const character = await fetchSingleStory(uuid, "published")
  const {
    name,
    image,
    description
  } = await character?.story?.content
  const {
    file,
    alt_text,
    width,
    height,
    rounded_edges
  } = image[0]
  return (
    <div className='flex gap-6 items-start lg:max-w-sm xl:max-w-md 2xl:max-w-lg relative mx-auto'>
      <div className='hidden sm:block'>
        <ImageComp
          file={file}
          alt_text={alt_text}
          width={width}
          height={height}
          rounded_edges={rounded_edges}
        />
      </div>
      <div>
        <TextContent
          blok={{
            text: name,
            data_test_id: 'characterName',
            font_size: FONT_SIZE.XL,
            font_style: FONT_STYLE.SEMI_BOLD
          }}
        />
        <div className='block sm:hidden mt-6 sm:mt-0'>
          <ImageComp
            file={file}
            alt_text={alt_text}
            width={width}
            height={height}
            rounded_edges={ROUNDED[rounded_edges as RoundedType]}
          />
        </div>
        <div className='mt-6'>
          <TextContent
            blok={{
              data_test_id: 'characterDescription',
              text: description
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default CharacterCard