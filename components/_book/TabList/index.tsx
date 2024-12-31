'use client'
import { TabListI } from '@/definitions/interfaces/_book'
import { useState } from 'react'
import { TabButton } from '@/components/_styled/buttons'
import { BuilderBlocks } from '@builder.io/react'

const TabList: React.FC<TabListI> = ({
  tabList
}) => {
  const [activeTab, setActiveTab] = useState(0)
  const changeHandler = (index: number) => {
    setActiveTab(index)
  }
  return (
    <div className='max-w-2xl my-6'>
      {tabList &&
        <ul role='tablist' className='flex gap-6'>
          {tabList?.map((tab, index) => (
            <TabButton
              key={tab.tabName + index}
              label={tab.tabName}
              active={activeTab === index}
              tabIndex={index}
              changeHandler={changeHandler}
            />
          ))}
        </ul>
      }
      {(tabList[activeTab].blocks?.length > 0) &&
        <div className='font-sans'>
          <BuilderBlocks
            parentElementId={tabList[activeTab].blocks[0].id}
            dataPath={`tabList.${activeTab}.blocks`}
            blocks={tabList[activeTab].blocks}
          />
        </div>
      }
    </div>
  )
}

export default TabList