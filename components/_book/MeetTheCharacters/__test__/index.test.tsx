import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import MeetTheCharacters from '@/components/_book/MeetTheCharacters'

describe('MeetTheCharacters', () => {
  beforeEach(() => {
    render(
      <MeetTheCharacters/>
    )
  })
  test('should render h2', () => {
    const h2 = screen.getByRole('heading', { level: 2 })
    expect(h2.textContent).toBe('Meet the Characters')
    expect(h2).toBeInTheDocument()
  })
})