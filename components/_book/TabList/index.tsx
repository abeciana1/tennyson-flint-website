'use client'
import { TabListI } from '@/definitions/interfaces/_book'
import { useState } from 'react'
import { TabButton } from '@/components/_styled/buttons'

const TabList: React.FC<TabListI> = ({
  tabList,
  builderBlock
}) => {
  const [activeTab, setActiveTab] = useState(0)
  const changeHandler = (index: number) => {
    setActiveTab(index)
  }
  return (
    <>
      {tabList &&
        <div className='my-6 flex gap-8'>
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
    </>
  )
}

export default TabList