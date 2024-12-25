import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BlogCollection } from '@/components/_sections/BlogCollection'

describe('BlogCollection', () => {
  beforeEach(() => {
    render(
      <BlogCollection
        heading='Articles, essays, & inspiration'
      />
    )
  })
  test('should render a heading for the collection', () => {
    const collectionHeading = screen.getByRole('heading', { level: 1 })
    expect(collectionHeading.textContent).toBe('Articles, essays, & inspiration')
    expect(collectionHeading).toBeInTheDocument();
  })
})