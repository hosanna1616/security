import Link from 'next/link'

// components/AdminNavbar.tsx
export default function AdminNavbar() {
  return (
    <header className='w-full bg-gray-900 border-b border-gray-700 px-6 py-4 flex justify-between items-center'>
      {/* Logo / Title */}
      <Link href='/Admin' className='text-xl font-bold text-primary'>
        Admin Dashboard
      </Link>

      {/* Profile / Settings */}
      <div className='flex items-center gap-4'>
        <Link
          href='/Admin/settings'
          className='bg-secondary px-5 mx-2 py-1 rounded hover:bg-gray-600'
        >
          Settings
        </Link>
        <Link
          href='/Admin/profile'
          className='w-10 h-10 rounded-full bg-primary flex items-center justify-center'
        >
          <span className='font-bold'>A</span>
        </Link>
      </div>
    </header>
  )
}
