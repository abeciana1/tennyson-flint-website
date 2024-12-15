import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import { Heading1 } from '@/components/_styled/headings'

describe('Headings', () => {
  describe('Heading1', () => {
    beforeEach(() => {
      render(
        <Heading1
          text='Test Heading 1'
        />
      )
    })
    it('should render component with role heading level 1', () => {
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading).toBeInTheDocument()
    })
    it ('should render component text input', () => {
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading.textContent).toBe('Test Heading 1')
    })
  })
})