import { ShortTextFieldI } from '@/definitions/interfaces/_form-fields'
import { COLORS } from '@/definitions/enums'
import cx from 'classnames'
import { validateEmail } from '@/helper-functions/general'

const ShortTextField: React.FC<ShortTextFieldI> = ({
  name,
  type,
  label,
  required = false,
  helperText = '',
  register,
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
      <input
        id={name}
        type={type}
        placeholder={label + (required && '*')}
        {...register(name, {
          required: required && 'This field is required',
          validate: value => {
            if (type === 'email') {
              const isValid = validateEmail(value);
              return isValid || 'The email address is invalid.';
            }
            return true;
          }
        })}
        className='max-h-12 py-3 px-3 rounded-lg font-sans w-full'
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

export default ShortTextField