import { Heading1 } from '@/components/_styled/headings'
import { builder } from "@builder.io/sdk";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const NavBar = async () => {
  const navLinks = await builder.getAll('navigation-links')
  console.log('navLinks', navLinks)
  return (
    <header>
      <nav className='flex flex-row px-10 py-3'>
        <Heading1 text='Tennyson Flint' fontSize='3xl' />
      </nav>
    </header>
  )
}

export default NavBar;