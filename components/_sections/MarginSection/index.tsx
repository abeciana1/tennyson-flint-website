import { type MarginSectionI } from '@/definitions/interfaces/_sections'

const MarginSection: React.FC<MarginSectionI> = ({
  children
}) => {
  return (
    <section className='px-10'>
      {children}
    </section>
  )
}

export default MarginSection