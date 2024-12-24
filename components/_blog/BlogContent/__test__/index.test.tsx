import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import BlogContent from '@/components/_blog/BlogContent'

describe('BlogContent', () => {
  beforeEach(() => {
    render(
      <BlogContent
        textContent="<b>Text content</b>"
      />
    )
  })
  test('should render blog content', () => {
    const BlogContent = screen.getByTestId('blogContent')
    expect(BlogContent.textContent).toBe('Text content')
    expect(BlogContent).toBeInTheDocument()
  })
})