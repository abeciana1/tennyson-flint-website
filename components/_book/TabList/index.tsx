'use client'
import { TabListI } from '@/definitions/interfaces/_book'
import { useState } from 'react'
import { TabButton } from '@/components/_styled/buttons'
import { BuilderBlocks } from '@builder.io/react'

const TabList: React.FC<TabListI> = ({
  tabList,
  builderBlock
}) => {
  console.log('tabList', tabList)
  console.log('builderBlock', builderBlock)
  const [activeTab, setActiveTab] = useState(0)
  const changeHandler = (index: number) => {
    setActiveTab(index)
  }
  return (
    <div className='max-w-2xl my-6'>
      {tabList &&
        <div className='flex gap-8'>
          {tabList?.map((tab, index) => (
            <TabButton
              label={tab.tabName}
              active={activeTab === index}
              tabIndex={index}
              changeHandler={changeHandler}
            />
          ))}
        </div>
      }
      <div className='font-sans'>
        <BuilderBlocks
          parentElementId={builderBlock?.id}
          dataPath={`tabList.${activeTab}.blocks`}
          blocks={tabList[activeTab].blocks}
        />
      </div>
    </div>
  )
}

export default TabList