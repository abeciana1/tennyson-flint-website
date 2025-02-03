'use client'
import { useState } from 'react'
import { TabGroupI, TabContentI } from '@/definitions/interfaces/_styled/TabGroup'
import { TabButton } from '@/components/_styled/buttons'
import { MarkdownText } from '@/components/_styled/Text'
import ImageComp from '@/components/_styled/ImageComp'
import { ButtonLink } from '@/components/_styled/links'

const TabContent: React.FC<TabContentI> = ({
  block
}) => {
  return (
    <div className='mt-3 px-4'>
      {(block?.component === 'markdown_text') &&
        <MarkdownText text={block?.text} />
      }
      {(block?.component === 'image') &&
        <ImageComp
          file={block?.file}
          alt_text={block?.alt_text}
          width={block?.width}
          height={block?.height}
          rounded_edges={block?.rounded_edges}
        />
      }
      {(block?.component === 'buttonLink') &&
        <ButtonLink
          link_text={block?.link_text}
          title={block?.title}
          href={block?.href}
          target_blank={block?.target_blank}
          text_color={block?.text_color}
          arrow_icon={block?.arrow_icon}
          background_color={block?.background_color}
          rounded_edges={block?.rounded_edges}
          font_style={block?.font_style}
        />
      }
    </div>
  )
}

const TabGroup: React.FC<TabGroupI> = ({
  tabs
}) => {
  const [activeTab, setActiveTab] = useState(0)
  const changeHandler = (index: number) => {
    setActiveTab(index)
  }
  return (
    <div className='max-w-2xl my-6'>
      {tabs &&
        <ul role='tablist' className='flex gap-6'>
          {tabs?.map((tab, index) => (
            <TabButton
              key={tab.label + index}
              label={tab.label}
              active={activeTab === index}
              tabIndex={index}
              changeHandler={changeHandler}
            />
          ))}
        </ul>
      }
      {(tabs[activeTab].blocks?.length > 0) &&
        <div className='font-sans'>
          {tabs?.[activeTab]?.blocks?.map((content) => {
            return (
              <TabContent
                key={content._uid}
                block={content}
              />
            )
          })}
        </div>
      }
    </div>
  )
}

export default TabGroup