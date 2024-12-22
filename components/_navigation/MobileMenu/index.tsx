'use client'
import { useState, useEffect } from 'react'
import NavLink from '@/components/_navigation/NavLink'
import Hamburger from 'hamburger-react'
import { fetchNavLinks } from '@/helper-functions/builder-fetch'
import { BuilderContent } from '@builder.io/sdk';

const MobileMenu = () => {
  const [isOpen, setOpen] = useState(false)
  const [navLinks, setNavLinks] = useState<BuilderContent[]>([]);
  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const links = await fetchNavLinks();
        setNavLinks(links);
      } catch (error) {
        console.error('Error fetching navigation links:', error);
      }
    }
    fetchLinks()
  }, [isOpen])

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
      }
    </>
  )
}

export default MobileMenu