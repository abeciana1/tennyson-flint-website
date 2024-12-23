import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('BlogSection', () => {
  beforeEach(() => {
    render(
      <BlogSection
        preheading='Latest Blog'
        headline='test'
      />
    )
  })
  test('should render blog section title', () => {
    const title = screen.getByRole('heading', { level: 1 })
    expect(title.textContent).toBe('Latest Blog')
    expect(title).toBeInTheDocument()
  })
  test('should render blog headline', () => {
    const headline = screen.getByTestId('headline')
    expect(headline.textContent).toBe('test')
    expect(headline).toBeInTheDocument()
  })
})