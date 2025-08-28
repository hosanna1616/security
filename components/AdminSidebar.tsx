'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  HomeIcon,
  ArrowDownTrayIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  ClipboardDocumentListIcon,
} from '@heroicons/react/24/outline'

const navItems = [
  { name: 'Dashboard', href: '/Admin', icon: <HomeIcon className='h-6 w-6' /> },

  {
    name: 'Requests',
    href: '/Admin/requests',
    icon: <ClipboardDocumentListIcon className='h-6 w-6' />,
  },
  {
    name: 'Downloads',
    href: '/Admin/downloads',
    icon: <ArrowDownTrayIcon className='h-6 w-6' />,
  },
  {
    name: 'Reports',
    href: '/Admin/reports',
    icon: <ChartBarIcon className='h-6 w-6' />,
  },
  {
    name: 'Settings',
    href: '/Admin/settings',
    icon: <Cog6ToothIcon className='h-6 w-6' />,
  },
]

export default function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div
      className={`flex flex-col h-auto bg-gray-900 text-white transition-width duration-300
      ${collapsed ? 'w-16' : 'w-64'}`}
    >
      {/* Toggle Button */}
      <div className='flex justify-end p-2 border-b border-gray-700'>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className='p-1 rounded hover:bg-gray-700'
        >
          {collapsed ? '➤' : '⇐'}
        </button>
      </div>

      {/* Navigation Items */}
      <nav className='flex-1 mt-4'>
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center gap-3 p-3 hover:bg-gray-700 transition-colors ${
              collapsed ? 'justify-center' : ''
            }`}
          >
            {item.icon}
            {!collapsed && <span className='font-medium'>{item.name}</span>}
          </Link>
        ))}
      </nav>
    </div>
  )
}
