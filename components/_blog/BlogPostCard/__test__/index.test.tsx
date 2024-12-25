import '@testing-library/jest-dom'
import { act, render, screen }  from '@testing-library/react'
import { format } from 'date-fns'
import { ROUNDED } from '@/definitions/enums'
import BlogPostCard from '@/components/_blog/BlogPostCard'

describe('BlogPostCard', () => {
  beforeEach(() => {
    render(
      <BlogPostCard
        title='Test Blog Post Title'
        excerpt='Test Blog Post Excerpt'
        href='/blog/post'
        image={{
          src: '/test.jpg',
          alt: 'Test Blog Post Image',
          width: 100,
          height: 100,
          rounded: ROUNDED.MD
        }}
        publishedDate={{
          month: format(new Date(), "MM/dd/yyyy"),
          day: format(new Date(), "MM/dd/yyyy")
        }}
        category='8caca91acc834ed6a9ab4ce37a22acf0'
      />
    )
  })
  test('should render a blog post title', async () => {
    const title = await screen.getByTestId('title')
    expect(title.textContent).toBe('Test Blog Post Title')
    expect(title).toBeInTheDocument()
  })
  test('should render a category', () => {
    const category = screen.getByTestId('category')
    expect(category.textContent).toBe('Teaching')
    expect(category).toBeInTheDocument()
  })
  test('should render an excerpt', () => {
    const excerpt = screen.getByTestId('excerpt')
    expect(excerpt.textContent).toBe('Test Blog Post Excerpt'.substring(0, 46) + '...')
    expect(excerpt).toBeInTheDocument()
  })
  test('should render an image', () => {
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('alt', 'Test Blog Post Image')
    expect(img).toHaveAttribute('width', '100')
    expect(img).toHaveAttribute('height', '100')
    expect(img).toBeInTheDocument()
  })
})