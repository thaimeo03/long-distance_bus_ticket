'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

interface IMenuLinkItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  children: React.ReactNode
  path: string
}

export function Menu({ children }: { children: React.ReactNode }) {
  return <ul className='flex justify-between space-x-7'>{children}</ul>
}

export function MenuLinkItem({ children, path, ...rest }: IMenuLinkItemProps) {
  const pathname = usePathname()

  return (
    <li className={twMerge('font-semibold', pathname === path ? 'text-primary' : '', rest.className)}>
      <Link href={path} className={`text-base p-2 hover:text-primary ${pathname === path ? 'text-primary' : ''}`}>
        {children}
      </Link>
    </li>
  )
}

export function MenuCustomItem({ children }: { children: React.ReactNode }) {
  return <li className='cursor-pointer hover:text-primary'>{children}</li>
}
