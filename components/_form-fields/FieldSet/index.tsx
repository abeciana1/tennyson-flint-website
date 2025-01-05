import { MarginSectionI } from '@/definitions/interfaces/_sections'

const FieldSet:React.FC<MarginSectionI> = ({
  children
}) => {
  return (
    <fieldset
      className='mt-10 w-full flex flex-wrap gap-10 justify-center'
    >
      {children}
    </fieldset>
  )
}

export default FieldSet