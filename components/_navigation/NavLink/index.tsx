import { NavLinkI } from '@/definitions/interfaces/_navigation'
import Link from 'next/link'

const NavLink: React.FC<NavLinkI> = ({
  label,
  href
}) => {
  return (
    <li>
      <Link
        href={href}
        className='text-xl font-medium font-sans'
      >
        {label}
      </Link>
    </li>
  )
}

export default NavLink