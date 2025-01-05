import { TextAreaI } from '@/definitions/interfaces/_form-fields'

const TextArea:React.FC<TextAreaI> = ({
  label,
  required,
  helperText,
  register,
  name
}) => {
  return (
    <div className='flex flex-col grow'>
      <label
        htmlFor={name}
        className='sr-only'
      >
        {label + (required && '*')}
      </label>
      <textarea
        id={name}
        {...register(name, {
          required: required && 'This field is required',
        })}
        className='py-3 px-3 rounded-lg h-40 font-sans'
        placeholder={label + (required && '*')}
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

export default TextArea