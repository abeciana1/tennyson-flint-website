'use client'
import { useState } from 'react'
import { TabGroupI } from '@/definitions/interfaces/_styled/TabGroup'
import { TabButton } from '@/components/_styled/buttons'

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
      {/* {(tabList[activeTab].blocks?.length > 0) &&
        <div className='font-sans'>
        </div>
      } */}
    </div>
  )
}

export default TabGroup