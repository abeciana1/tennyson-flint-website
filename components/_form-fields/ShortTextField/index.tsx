import { ShortTextFieldI } from '@/definitions/interfaces/_form-fields'

const ShortTextField: React.FC<ShortTextFieldI> = ({
  name,
  type,
  label,
  required = false,
  helperText = '',
  register
}) => {
  console.log('field type', type)
  return (
    <div>
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