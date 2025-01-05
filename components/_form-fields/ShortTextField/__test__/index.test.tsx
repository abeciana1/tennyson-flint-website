import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ShortTextField from '@/components/_form-fields/ShortTextField'
import { FIELD_TYPE } from '@/definitions/enums'
import { useForm, FormProvider } from 'react-hook-form';
import { slugify } from '@/helper-functions/general'
import { ReactNode } from 'react';

const Wrapper = ({ children }: {children: ReactNode[] | ReactNode}) => {
  const methods = useForm();
  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe('ShortTextField', () => {
  const mockRegister = jest.fn();
  beforeEach(() => {
    render(
      <Wrapper>
        <ShortTextField
          name='testLabel'
          type={FIELD_TYPE.TEXT}
          label='Test label'
          required
          helperText='Enter text here'
          register={mockRegister}
        />
      </Wrapper>
    )
  })
  test('should render textbox role', () => {
    const field = screen.getByRole('textbox')
    expect(field).toHaveAttribute('placeholder', 'Test label*')
    expect(field).toHaveAttribute('id', 'testLabel')
    expect(field).toHaveAttribute('type', 'text')
    expect(field).toBeInTheDocument()
  })
})