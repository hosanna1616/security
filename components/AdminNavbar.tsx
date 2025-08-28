'use client'

import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/image/logo.png'

const AdminNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Dashboard', href: '/Admin' },
    { name: 'Users', href: '/Admin/users' },
    { name: 'Requests', href: '/Admin/requests' },
    { name: 'Downloads', href: '/Admin/downloads' },
    { name: 'Reports', href: '/Admin/reports' },
  ]

  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-gray-900 text-white shadow-lg'>
      <nav className='max-w-7xl mx-auto flex items-center justify-between p-3 lg:px-8'>
        {/* Logo */}
        <Link href='/Admin' className='flex items-center gap-2'>
          <Image src={logo} alt='Logo' className='h-15 w-15' />
          <span className='font-bold text-xl text-primary'>Admin Panel</span>
        </Link>

        {/* Desktop Menu */}
        <div className='hidden lg:flex gap-8'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='text-sm py-2 font-medium hover:text-primary transition-colors'
            >
              {item.name}
            </Link>
          ))}
          <button className='bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium'>
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type='button'
          className='lg:hidden p-2 rounded-md text-gray-200 hover:text-primary'
          onClick={() => setMobileMenuOpen(true)}
        >
          <Bars3Icon className='h-6 w-6' />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className='lg:hidden fixed inset-0 z-40'>
          <div
            className='fixed inset-0 bg-black/40'
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className='fixed right-0 top-0 h-full w-64 bg-gray-800 p-6 shadow-lg'>
            <div className='flex justify-between items-center mb-6'>
              <h2 className='text-lg font-bold'>Admin Menu</h2>
              <button onClick={() => setMobileMenuOpen(false)}>
                <XMarkIcon className='h-6 w-6 text-gray-200' />
              </button>
            </div>
            <div className='space-y-4'>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className='block text-gray-200 hover:text-primary transition'
                >
                  {item.name}
                </Link>
              ))}
              <button className='w-full bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium'>
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default AdminNavbar
