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
          src: '/test.jpg',
          alt: 'Character image',
          width: 200,
          height: 200,
          rounded: ROUNDED.MD
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
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('alt', 'Character image')
    expect(image).toHaveAttribute('width', '200')
    expect(image).toHaveAttribute('height', '200')
    expect(image).toBeInTheDocument()
  })
})