import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import NavLink from '@/components/_navigation/NavLink'

describe('NavLink', () => {
  beforeEach(() => {
    render(
      <NavLink
        label='Test'
        href='/test'
      />
    )
  })
  it('should render with role of listitem', () => {
    const link = screen.getByRole('listitem')
    expect(link).toBeInTheDocument()
  })
  it('should render link with label text and href', () => {
    const link = screen.getByRole('link')
    expect(link.getAttribute('href')).toBe('/test')
    expect(link.textContent).toBe('Test')
  })
})