import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import ImageComp from '@/components/_styled/ImageComp'
import { ROUNDED } from '@/definitions/enums'

describe('ImageComp', () => {
  beforeEach(() => {
    render(
      <ImageComp
        src='/test.jpg'
        alt='Test Image'
        width={100}
        height={100}
        rounded={ROUNDED.MD}
      />
    )
  })
  test('should render with role of image', () => {
    const img = screen.getByRole('img')
    expect(img).toBeInTheDocument()
  })
  test('should render with alt text', () => {
    const img = screen.getByAltText('Test Image')
    expect(img).toBeInTheDocument()
  })
})