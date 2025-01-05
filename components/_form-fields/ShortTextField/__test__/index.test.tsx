import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ShortTextField from '@/components/_form-fields/ShortTextField'
import { FIELD_TYPE } from '@/definitions/enums'
import { slugify } from '@/helper-functions/general'

describe('ShortTextField', () => {
  beforeEach(() => {
    render(
      <ShortTextField
        type={FIELD_TYPE.TEXT}
        label='Test label'
        required={true}
        helperText='Enter text here'
      />
    )
  })
  test('should render textbox role', () => {
    const field = screen.getByRole('textbox', {
      name: 'test-label'
    })
    expect(field).toHaveAttribute('placeholder', 'Test label')
    expect(field).toHaveAttribute('required', 'true')
    expect(field).toHaveAttribute('name', 'test-label')
    expect(field).toBeInTheDocument()
  })
})