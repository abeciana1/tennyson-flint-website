import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import TabList from '@/components/_book/TabList'

describe('TabList', () => {
  render(
    <TabList
      defaultTab={0}
      tabs={[
        {
          label: 'Tab1',
          blocks: <><div/><div/></>
        }
      ]}
      builderBlock={[]}
    />
  )
})