import { slugify } from '@/helper-functions/general'
import { ShortTextFieldI } from '@/definitions/interfaces/_form-fields'

const ShortTextField: React.FC<ShortTextFieldI> = ({
  type,
  label,
  required = false,
  helperText = ''
}) => {
  console.log('field type', type)
  return (
    <div>
      <label
        htmlFor={slugify(label)}
        className='sr-only'
      >
          {label}
      </label>
      <input
        type={type}
        name={slugify(label)}
        required={required}
      />
      {helperText &&
        <span
          className=''
        >
          {helperText}
        </span>
      }
    </div>
  )
}

export default ShortTextField