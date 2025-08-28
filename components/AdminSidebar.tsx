'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { name: 'Dashboard', href: '/Admin' },
  { name: 'Users', href: '/Admin/users' },
  { name: 'Requests', href: '/Admin/requests' },
  { name: 'Downloads', href: '/Admin/downloads' },
  { name: 'Reports', href: '/Admin/reports' },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className='w-64 bg-gray-900 text-white p-4 pt-10 space-y-2 min-h-screen'>
      <h2 className='text-lg font-bold mb-6'>Admin Panel</h2>
      <nav className='flex flex-col space-y-2'>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 py-2 rounded-lg transition ${
              pathname === link.href ? 'bg-blue-600' : 'hover:bg-gray-700'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
