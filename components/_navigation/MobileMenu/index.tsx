'use client'
import { useState, useEffect } from 'react'
import NavLink from '@/components/_navigation/NavLink'
import Hamburger from 'hamburger-react'
import { NavBarI, NavLinkI } from '@/definitions/interfaces/_navigation'

const MobileMenu: React.FC<NavBarI> = ({ navLinks }) => {
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    const main = document?.getElementsByTagName('main')
    if (isOpen && main && main.length > 0) {
      main[0]!.style!.display = 'none';
    } else if (main && main.length > 0) {
      main[0]!.style!.display = 'block';
    }
  }, [isOpen])

  return (
    <>
      <div className='block md:hidden'>
        <Hamburger
          direction="right"
          toggled={isOpen}
          toggle={setOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        />
      </div>
      {isOpen &&
        <ul className='md:hidden flex flex-col gap-6 w-full bg-white absolute top-16 left-0 pl-10 pt-4 h-screen z-50'>
          {navLinks && navLinks?.map((link: NavLinkI) => {
            return (
              <NavLink
                key={link?._uid}
                label={link?.label}
                href={link?.href}
              />
            )
          })}
        </ul>
      }
    </>
  )
}

export default MobileMenu