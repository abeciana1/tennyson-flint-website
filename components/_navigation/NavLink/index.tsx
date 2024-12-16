'use client'
import { NavLinkI } from '@/definitions/interfaces/_navigation'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import cx from 'classnames'

const NavLink: React.FC<NavLinkI> = ({
  label,
  href
}) => {
  const pathname = usePathname()
  console.log('pathname', pathname)
  const isActive = pathname === href
  return (
    <li>
      <Link
        href={href}
        className={cx('text-xl font-medium font-sans', {
          ['text-navy underline decoration-navy underline-offset-2']: isActive
        })}
      >
        {label}
      </Link>
    </li>
  )
}

export default NavLink