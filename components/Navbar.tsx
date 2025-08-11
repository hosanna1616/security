'use client'

import { useState, useEffect } from 'react'
import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/image/logo.png'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  // Toggle dark mode and persist in localStorage
  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    document.documentElement.classList.toggle('dark', newMode)
    localStorage.setItem('darkMode', String(newMode))
  }

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    const initialMode = savedMode ? savedMode === 'true' : systemPrefersDark
    setDarkMode(initialMode)
    document.documentElement.classList.toggle('dark', initialMode)
  }, [])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Gasha', href: '/' },
    { name: 'Nisir', href: '/Nisir' },
    { name: 'Enyuma IAM', href: '/Enyuma_IAM' },
    { name: 'Code Protection', href: '/Code Protection' },
    { name: 'Biometrics', href: '/Biometrics' },
    { name: 'Contact us', href: '/Contact_us' },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md' : ''
      }`}
    >
      <nav className='max-w-7xl mx-auto flex items-center justify-between p-6 lg:px-8'>
        {/* Logo */}
        <Link href='/' className='flex items-center'>
          <Image src={logo} alt='Logo' className='h-20 w-20 mr-2' />
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex lg:items-center lg:gap-8'>
          <div className='flex gap-8'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className='p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
            aria-label='Toggle dark mode'
          >
            {darkMode ? (
              <SunIcon className='h-5 w-5' />
            ) : (
              <MoonIcon className='h-5 w-5' />
            )}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type='button'
          className='lg:hidden p-2 rounded-md text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400'
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className='sr-only'>Open menu</span>
          <Bars3Icon className='h-6 w-6' />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className='lg:hidden fixed inset-0 z-40'>
          {/* Backdrop */}
          <div
            className='fixed inset-0 bg-black/30 backdrop-blur-sm'
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu panel */}
          <div className='fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white dark:bg-gray-900 shadow-lg'>
            <div className='flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800'>
              <Link
                href='/'
                className='flex items-center'
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image src={logo} alt='Logo' className='h-20 w-20 mr-20' />
              </Link>
              <div className='flex items-center gap-4'>
                <button
                  onClick={toggleDarkMode}
                  className='p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                >
                  {darkMode ? (
                    <SunIcon className='h-6 w-6' />
                  ) : (
                    <MoonIcon className='h-6 w-6' />
                  )}
                </button>
                <button
                  type='button'
                  className='-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className='sr-only'>Close menu</span>
                  <XMarkIcon className='h-6 w-6' />
                </button>
              </div>
            </div>
            <div className='flow-root p-6'>
              <div className='-my-6 divide-y divide-gray-200 dark:divide-gray-800'>
                <div className='space-y-6 py-6'>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className='-mx-3 block py-2 text-base font-medium text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400'
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
