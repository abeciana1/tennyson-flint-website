import { type MarginSectionI } from '@/definitions/interfaces/_sections'

const MarginSection: React.FC<MarginSectionI> = ({
  children
}) => {
  return (
    <section className='px-5 sm:px-10 py-4 md:py-8 lg:py-16'>
      {children}
    </section>
  )
}

export default MarginSection