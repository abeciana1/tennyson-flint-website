import { Heading1 } from '@/components/_styled/headings'

const NavBar = () => {
  return (
    <header>
      <nav className='flex flex-row'>
        <Heading1 text='Tennyson Flint' />
      </nav>
    </header>
  )
}

export default NavBar;