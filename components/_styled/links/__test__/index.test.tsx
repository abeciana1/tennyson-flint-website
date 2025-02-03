import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { ButtonLink } from '@/components/_styled/links'
import { COLORS, ROUNDED } from '@/definitions/enums'

describe('Links', () => {
  describe('ButtonLink', () => {
    beforeEach(() => {
      render(
        <ButtonLink
          link_text='Link'
          href='/books'
          target_blank
          arrow_icon
          title='Link to Books page'
          background_color={COLORS.NAVY}
          rounded_edges={ROUNDED.MD}
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