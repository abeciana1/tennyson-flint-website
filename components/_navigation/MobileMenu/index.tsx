'use client'
import { useState, useEffect } from 'react'
import NavLink from '@/components/_navigation/NavLink'
import Hamburger from 'hamburger-react'
import { NavBarI, NavLinkI } from '@/definitions/interfaces/_navigation'

const MobileMenu: React.FC<NavBarI> = ({ navLinks }) => {
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    const logo = document.getElementById('nav-logo')
    logo?.addEventListener('click', handleLinkClick)
    return () => {
      logo?.removeEventListener('click', handleLinkClick)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const handleLinkClick = () => {
    setTimeout(() => {
      setOpen(false)
    }, 100)
  }

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
        <div className='fixed md:hidden inset-0 top-16 bg-white z-50 flex flex-col gap-6 pt-4 pl-10'>
          <ul className='flex flex-col gap-6 w-full' onClick={handleLinkClick}>
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
        </div>
      }
    </>
  )
}

export default MobileMenu