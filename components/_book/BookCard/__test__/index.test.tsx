import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import BookCard from '@/components/_book/BookCard'
import { ROUNDED } from '@/definitions/enums'

describe('BookCard', () => {
  beforeEach(() => {
    render(
      <BookCard
        bookTitle='title'
        slug='test'
        bookCover={{
          src: '/test.jpg',
          alt: 'test',
          width: 200,
          height: 300,
          rounded: ROUNDED.MD
        }}
      />
    )
  })
  test('should hyperlink book card', () => {
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/books/test')
    expect(link).toHaveAttribute('title', 'title')
    expect(link).toBeInTheDocument()
  })
  test('should render book cover', () => {
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('alt', 'test')
    expect(img).toHaveAttribute('width', '200')
    expect(img).toHaveAttribute('height', '300')
    expect(img).toBeInTheDocument()
  })
})