import { use } from 'react'
import { Heading1 } from '@/components/_styled/headings'
import NavLink from '@/components/_navigation/NavLink'
import MobileMenu from '@/components/_navigation/MobileMenu'
import { fetchNavLinks } from '@/helper-functions/builder-fetch'
import Link from 'next/link'

const NavBar = () => {
  const navLinks = use(fetchNavLinks())
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
                key={link?.id}
                label={link?.data?.linkText}
                href={link?.data?.href}
              />
            )
          })}
        </ul>
        <MobileMenu />
      </nav>
    </header>
  )
}

export default NavBar;