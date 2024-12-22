import Image from 'next/image'
import { ImageI } from '@/definitions/interfaces/_styled/ImageComp'
import cx from 'classnames'
import { ROUNDED } from '@/definitions/enums'

const ImageComp: React.FC<ImageI> = ({
  src,
  alt,
  width,
  height,
  rounded = ROUNDED.NONE
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cx({
        ['rounded-none']: rounded === ROUNDED.NONE,
        ['rounded-sm']: rounded === ROUNDED.SM,
        ['rounded-md']: rounded === ROUNDED.MD,
        ['rounded-lg']: rounded === ROUNDED.LG,
        ['rounded-xl']: rounded === ROUNDED.XL,
        ['rounded-2xl']: rounded === ROUNDED.XXL,
      })}
    />
  )
}

export default ImageComp