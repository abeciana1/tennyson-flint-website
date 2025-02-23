import { TextAreaI } from '@/definitions/interfaces/_form-fields'
import { COLORS } from '@/definitions/enums'
import cx from 'classnames'

const TextArea:React.FC<TextAreaI> = ({
  label,
  required,
  helperText,
  register,
  name,
  textColor,
  errors
}) => {
  return (
    <div className='flex flex-col grow relative'>
      <label
        htmlFor={name}
        className='sr-only'
      >
        {label + (required && '*')}
      </label>
      {errors[name] &&
          <div
            role='alert'
            className='text-red font-sans text-sm absolute -top-6'
          >
            {errors[name]?.message as string}
          </div>
      }
      <textarea
        id={name}
        {...register(name, {
          required: required && 'This field is required',
        })}
        className='py-3 px-3 rounded-lg h-40 font-sans'
        placeholder={label + (required && '*')}
        aria-invalid={errors[name] ? 'true' : 'false'}
      />
      {helperText &&
        <small
          className={cx('text-sm font-sans font-medium', {
            ['text-navy']: textColor === COLORS.NAVY,
            ['text-white']: textColor === COLORS.WHITE,
            ['text-black']: textColor === COLORS.BLACK,
            ['text-gold']: textColor === COLORS.GOLD,
            ['text-violet']: textColor === COLORS.VIOLET,
            ['text-red']: textColor === COLORS.RED,
            ['text-pink']: textColor === COLORS.PINK,
          })}
        >
          {helperText}
        </small>
      }
    </div>
  )
}

export default TextArea