import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import HeroSection from '@/components/_sections/HeroSection'
import { ROUNDED } from '@/definitions/enums';

describe('HeroSection', () => {
  beforeEach(() => {
    render(
      <HeroSection
        heading='Hero Section'
        subheading='Subheading'
        textBody='Text Body'
        ctaChildren={[]}
        image={{
          src: '/test.jpg',
          alt: 'Test Image',
          width: 100,
          height: 100,
          rounded: ROUNDED.MD
        }}
      />
    )
  })
  test('should render heading 1', () => {
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.textContent).toBe('Hero Section');
    expect(heading).toBeInTheDocument();
  })
  test('should render heading 2', () => {
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading.textContent).toBe('Subheading');
    expect(heading).toBeInTheDocument();
  })
})