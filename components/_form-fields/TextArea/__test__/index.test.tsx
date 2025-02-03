import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import TextArea from '@/components/_form-fields/TextArea'
import { useForm, FormProvider } from 'react-hook-form';
import { COLORS } from '@/definitions/enums'

const Wrapper = ({ children }: {children: React.ReactNode[] | React.ReactNode}) => {
  const methods = useForm();
  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe('TextArea', () => {
  const mockRegister = jest.fn();
  beforeEach(() => {
    render(
      <Wrapper>
        <TextArea
          label='Text Area'
          name='textArea'
          required
          helperText='helper text'
          register={mockRegister}
          textColor={COLORS.NAVY}
          errors={{}}
        />
      </Wrapper>
    )
  })
  test('should render textbox role', () => {
    const field = screen.getByRole('textbox')
    expect(field).toHaveAttribute('id', 'textArea')
    expect(field).toBeInTheDocument()
  })
})