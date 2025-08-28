// components/AdminNavbar.tsx
export default function AdminNavbar() {
  return (
    <header className='w-full bg-gray-900 border-b border-gray-700 px-6 py-4 flex justify-between items-center'>
      {/* Logo / Title */}
      <div className='text-xl font-bold text-blue-500'>Admin Dashboard</div>

      {/* Profile / Settings */}
      <div className='flex items-center gap-4'>
        <button className='bg-gray-700 px-3 py-1 rounded hover:bg-gray-600'>
          Settings
        </button>
        <div className='w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center'>
          <span className='font-bold'>A</span>
        </div>
      </div>
    </header>
  )
}
