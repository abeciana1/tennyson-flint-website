import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import BlogSection from '@/components/_sections/BlogSection'

describe('BlogSection', () => {
  beforeEach(() => {
    render(
      <BlogSection
        blok={{
          preheading: 'Latest Blog',
          headline: 'test'
        }}
      />
    )
  })
  test('should render blog section title', async () => {
    waitFor(() => {
      screen.logTestingPlaygroundURL()
      const preheading = screen.getByRole('heading', { level: 1 })
      expect(preheading.textContent).toContain('Latest Blog')
      expect(preheading).toBeInTheDocument()
    })
  })
  test('should render blog headline', () => {
    waitFor(() => {
      const headline = screen.getByTestId('headline')
      expect(headline.textContent).toContain('test')
      expect(headline).toBeInTheDocument()
    })
  })
})