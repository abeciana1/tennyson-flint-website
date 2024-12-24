import { type MarginSectionI } from '@/definitions/interfaces/_sections'

const MarginSection: React.FC<MarginSectionI> = ({
  children
}) => {
  return (
    <section className='px-5 sm:px-10 my-4 md:my-8 lg:my-16 relative flex-grow'>
      {children}
    </section>
  )
}

export default MarginSection