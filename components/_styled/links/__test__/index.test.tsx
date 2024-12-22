import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { ButtonLink } from '@/components/_styled/links'
import { COLORS, ROUNDED } from '@/definitions/enums'

describe('Links', () => {
  describe('ButtonLink', () => {
    beforeEach(() => {
      render(
        <ButtonLink
          linkText='Link'
          href='/books'
          targetBlank
          arrow
          title='Link to Books page'
          bgColor={COLORS.NAVY}
          rounded={ROUNDED.MD}
        />
      )
    })
    test('should render link with text', () => {
      const link = screen.getByRole('link')
      expect(link.textContent).toBe('Link')
      expect(link).toBeInTheDocument()
    })
    test('should render link with href and title attributes', () => {
      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('href', '/books')
      expect(link).toHaveAttribute('title', 'Link to Books page')
    })
  })
})