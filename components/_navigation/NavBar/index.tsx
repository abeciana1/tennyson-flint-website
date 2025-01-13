import { Heading1 } from '@/components/_styled/headings'
import NavLink from '@/components/_navigation/NavLink'
import MobileMenu from '@/components/_navigation/MobileMenu'
import Link from 'next/link'
import { NavBarI } from '@/definitions/interfaces/_navigation'

const NavBar: React.FC<NavBarI> = ({ blok }) => {
  const { navLinks } = blok
  return (
    <header>
      <nav className='flex flex-row px-5 sm:px-10 py-3 items-center justify-between z-50 bg-white'>
        <Link href='/' title='Link to homepage'>
          <Heading1 text='Tennyson Flint' fontSize='2xl' />
        </Link>
        <ul className='hidden md:flex flex-row gap-6'>
          {navLinks && navLinks?.map((link) => {
            return (
              <NavLink
                key={link?._uid}
                label={link?.label}
                href={link?.href}
              />
            )
          })}
        </ul>
        <MobileMenu blok={blok} />
      </nav>
    </header>
  )
}

export default NavBar;