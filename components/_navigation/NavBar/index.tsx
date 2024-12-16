import { Heading1 } from '@/components/_styled/headings'
import { builder } from "@builder.io/sdk";
import NavLink from '@/components/_navigation/NavLink'

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const NavBar = async () => {
  const navLinks = await builder.getAll('navigation-links', { prerender: true })
  return (
    <header>
      <nav className='flex flex-row px-10 py-3 items-center justify-between'>
        <Heading1 text='Tennyson Flint' fontSize='3xl' />
        <ul className='flex flex-row gap-6'>
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
      </nav>
    </header>
  )
}

export default NavBar;