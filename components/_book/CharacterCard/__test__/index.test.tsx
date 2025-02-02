import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import CharacterCard from '@/components/_book/CharacterCard'
import { ROUNDED } from '@/definitions/enums'

describe('CharacterCard', () => {
  beforeEach(() => {
    render(
      <CharacterCard
        name='Alex'
        description='character bio'
        image={{
          file: {
            filename: '/test.jpg'
          },
          alt_text: 'Character image',
          width: 200,
          height: 200,
          rounded_edges: ROUNDED.MD
        }}
      />
    )
  })
  test('should render character name', () => {
    const name = screen.getByTestId('characterName')
    expect(name.textContent).toBe('Alex')
    expect(name).toBeInTheDocument()
  })
  test('should render character description', () => {
    const description = screen.getByTestId('characterDescription')
    expect(description.textContent).toBe('character bio')
    expect(description).toBeInTheDocument()
  })
  test('should render character image', () => {
    const images = screen.getAllByRole('img')
    expect(images[0]).toHaveAttribute('alt', 'Character image')
    expect(images[0]).toHaveAttribute('width', '200')
    expect(images[0]).toHaveAttribute('height', '200')
    expect(images[0]).toBeInTheDocument()
  })
})