import Image from 'next/image'
import { ImageI } from '@/definitions/interfaces/_styled/ImageComp'
import cx from 'classnames'
import { ROUNDED } from '@/definitions/enums'

const ImageComp: React.FC<ImageI> = ({
  file,
  alt_text,
  width,
  height,
  rounded_edges = ROUNDED.NONE
}) => {
  return (
    <Image
      src={file?.filename}
      alt={alt_text}
      width={Number(width)}
      height={Number(height)}
      className={cx('mx-auto',{
        ['rounded-none']: rounded_edges === ROUNDED.NONE,
        ['rounded-sm']: rounded_edges === ROUNDED.SM,
        ['rounded-md']: rounded_edges === ROUNDED.MD,
        ['rounded-lg']: rounded_edges === ROUNDED.LG,
        ['rounded-xl']: rounded_edges === ROUNDED.XL,
        ['rounded-2xl']: rounded_edges === ROUNDED.XXL,
      })}
    />
  )
}

export default ImageComp