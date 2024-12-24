import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import BlogImage from '@/components/_blog/BlogImage'
import { ROUNDED } from '@/definitions/enums'

describe('BlogImage', () => {
  beforeEach(() => {
    render(
      <BlogImage
        src='/test.jpg'
        alt='Test Image'
        width={100}
        height={100}
        rounded={ROUNDED.MD}
      />
    )
  })
  test('should render image', () => {
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('alt', 'Test Image')
    expect(img).toHaveAttribute('width', '100')
    expect(img).toHaveAttribute('height', '100')
    expect(img).toBeInTheDocument()
  })
})