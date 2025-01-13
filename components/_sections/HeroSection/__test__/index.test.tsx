import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import HeroSection from '@/components/_sections/HeroSection'
import { ROUNDED } from '@/definitions/enums';

describe('HeroSection', () => {
  beforeEach(() => {
    render(
      <HeroSection
        blok={{
          heading: 'Hero Section',
          subheading: 'Subheading',
          text_body: 'Text Body',
          cta_children: [],
          image: [
            {
              file: {
                filename: '/test.jpg'
              },
              alt_text: 'Test Image',
              width: '100',
              height: '100',
              rounded_edges: ROUNDED.MD
            }
          ]
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