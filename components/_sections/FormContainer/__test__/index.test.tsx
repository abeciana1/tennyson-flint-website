import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import FormContainer from '@/components/_sections/FormContainer'
import { COLORS } from '@/definitions/enums'

describe('FormContainer', () => {
  beforeEach(() => {
    render(
      <FormContainer
        heading='Test heading'
        textBody='Test body'
        bgColor={COLORS.NAVY}
        textColor={COLORS.GOLD}
      >
        <></>
      </FormContainer>
    )
  })
  test('should render form with headline', () => {
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Test heading')
    expect(heading).toBeInTheDocument()
  })
  test('should render form with text body', () => {
    const textBody = screen.getByTestId('formTestBody')
    expect(textBody.textContent).toBe('Test body')
    expect(textBody).toBeInTheDocument()
  })
})