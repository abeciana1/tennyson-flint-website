import '@testing-library/jest-dom';
import { render, screen }  from '@testing-library/react'
import TextContent from '@/components/_styled/Text'

describe('TextContent', () => {
  beforeEach(() => {
    render(
      <TextContent
        blok={{
          text: 'Hello World!'
        }}
      />
    )
  })
  test('should render text content', () => {
    const text = screen.getByText('Hello World!')
    expect(text).toBeInTheDocument()
  })
})