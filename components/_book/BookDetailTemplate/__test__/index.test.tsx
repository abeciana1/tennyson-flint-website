import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import BookDetailTemplate from '@/components/_book/BookDetailTemplate'
import { ROUNDED } from '@/definitions/enums'

describe('BookDetailTemplate', () => {
  beforeEach(() => {
    render(
      <BookDetailTemplate
        preheading='Upcoming release'
        bookTitle='Book Title'
        bookCover={{
          src: '/book-cover.jpg',
          alt: 'Book Cover',
          width: 100,
          height: 150,
          rounded: ROUNDED.MD
        }}
        content={{}}
      />
    )
  })
  test('should render a preheading', () => {
    const preheading = screen.getByTestId('preheading')
    expect(preheading.textContent).toBe('Upcoming release')
    expect(preheading).toBeInTheDocument()
  })
  test('should render book title', () => {
    const bookTitle = screen.getByRole('heading', { level: 1 })
    expect(bookTitle.textContent).toBe('Book Title')
    expect(bookTitle).toBeInTheDocument()
  })
  test('should render book cover image', () => {
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('alt', 'Book Cover')
    expect(img).toHaveAttribute('width', '100')
    expect(img).toHaveAttribute('height', '150')
    expect(img).toBeInTheDocument()
  })
})