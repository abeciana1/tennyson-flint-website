import { TextContentI, MarkdownTextI } from '@/definitions/interfaces/_styled/Text'
import {
  FONT_SIZE,
  FONT_STYLE,
  FONT_FAMILY,
  COLORS
} from "@/definitions/enums";
import cx from 'classnames'
import '@/components/_blog/BlogContent/blog-content.css'
import Link from 'next/link'
import { storyblokEditable } from '@storyblok/react/rsc';
import Markdown from 'react-markdown';

export const MarkdownText: React.FC<MarkdownTextI> = ({
  text
}) => {
  return (
    <div>
      <Markdown
        components={{
          a(props: any) {
            const { node, children } = props
            const hrefLink = node?.properties?.href as string
            const isExternal = hrefLink?.match(/http/i)
            return (
              <Link
                href={node?.properties?.href as string}
                target={isExternal? '_blank' : '_self'}
              >
                {children}{isExternal && <span className='text-base font-bold'>_↗</span>}
              </Link>
            )
            
          }
        }}
      >{text}</Markdown>
    </div>
  )
}

const TextContent: React.FC<TextContentI> = ({
  blok
}) => {
  const {
    text,
    font_size = FONT_SIZE.LG,
    font_style = FONT_STYLE.NORMAL,
    font_family = FONT_FAMILY.SANS,
    color = COLORS.BLACK,
    data_test_id = ''
  } = blok
  return (
    <div
      {...storyblokEditable(blok)}
      data-testid={data_test_id}
      className={cx('leading-normal', {
        ['font-bold']: font_style === FONT_STYLE.BOLD,
        ['font-semibold']: font_style === FONT_STYLE.SEMI_BOLD,
        ['font-medium']: font_style === FONT_STYLE.MEDIUM,
        ['font-normal']: font_style === FONT_STYLE.NORMAL,
        ['italic']: font_style === FONT_STYLE.ITALIC,
        ['text-lg']: font_size === FONT_SIZE.LG,
        ['text-sm']: font_size === FONT_SIZE.SM,
        ['text-xl']: font_size === FONT_SIZE.XL,
        ['text-md']: font_size === FONT_SIZE.MD,
        ['text-2xl']: font_size === FONT_SIZE.XXL,
        ['text-3xl']: font_size === FONT_SIZE.XXXL,
        ['text-4xl']: font_size === FONT_SIZE.XXXXL,
        ['font-sans']: font_family === FONT_FAMILY.SANS,
        ['font-cinzel']: font_family === FONT_FAMILY.CINZEL,
        ['font-cinzel-dec']: font_family === FONT_FAMILY.CINZEL_DEC,
        ['text-white']: color === COLORS.WHITE,
        ['text-black']: color === COLORS.BLACK
      })}
    >
      {text}
    </div>
  )
}

export default TextContent