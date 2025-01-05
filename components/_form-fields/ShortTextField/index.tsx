import { ShortTextFieldI } from '@/definitions/interfaces/_form-fields'

const ShortTextField: React.FC<ShortTextFieldI> = ({
  name,
  type,
  label,
  required = false,
  helperText = '',
  register
}) => {
  return (
    <div className='flex flex-col grow'>
      <label
        htmlFor={name}
        className='sr-only'
      >
        {label + (required && '*')}
      </label>
      <input
        id={name}
        type={type}
        placeholder={label + (required && '*')}
        {...register(name, {
          required: required && 'This field is required',
        })}
        className='max-h-12 py-3 px-3 rounded-lg font-sans w-full'
      />
      {helperText &&
        <small
          className=''
        >
          {helperText}
        </small>
      }
    </div>
  )
}

export default ShortTextField