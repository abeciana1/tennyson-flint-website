import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { ROUNDED } from '@/definitions/enums'
import { format } from 'date-fns'
import BlogTemplate from '@/components/_blog/BlogTemplate'

describe('BlogTemplate', () => {
  beforeEach(() => {
    render(
      <BlogTemplate
        title="Blog Template Title"
        excerpt="Blog Template Excerpt"
        image={{
          src: '/test.jpg',
          alt: 'Test Image',
          width: 100,
          height: 100,
          rounded: ROUNDED.MD
        }}
        publishedDate={format(new Date(), "MM/dd/yyyy")}
      />
    )
  })
  test('should render a title', () => {
    const title = screen.getByRole('heading', { level: 1 });
    expect(title.textContent).toBe('Blog Template Title');
    expect(title).toBeInTheDocument();
  })
  test('should render an excerpt if present', () => {
    const excerpt = screen.getByTestId('blogExcerpt')
    expect(excerpt.textContent).toBe('Blog Template Excerpt');
    expect(excerpt).toBeInTheDocument();
  })
  test('should render an image', () => {
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('alt', 'Test Image')
    expect(img).toHaveAttribute('width', '100')
    expect(img).toHaveAttribute('height', '100')
    expect(img).toBeInTheDocument()
  })
  test('should render a published date', () => {
    const publishedDate = screen.getByTestId('publishedDate')
    expect(publishedDate).toBeInTheDocument();
  })
})