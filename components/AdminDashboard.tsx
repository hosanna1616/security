// components/AdminDashboard.tsx
import React from 'react'

const AdminDashboard = () => {
  return (
    <div className='p-6 mt-25'>
      <div className='mb-6'>
        <h2 className='text-2xl font-bold text-gray-800 dark:text-white'>
          Admin Dashboard
        </h2>
        <p className='text-gray-600 dark:text-gray-400'>
          System administration and management
        </p>
      </div>

      {/* Stats Cards */}
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
        <div className='bg-white/10 backdrop-blur-md overflow-hidden shadow rounded-lg'>
          <div className='px-4 py-5 sm:p-6'>
            <div className='flex items-center'>
              <div className='flex-shrink-0 bg-primary rounded-md p-3'>
                <svg
                  className='h-6 w-6 text-white'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
              </div>
              <div className='ml-5 w-0 flex-1'>
                <dl>
                  <dt className='text-sm font-medium text-gray-500 dark:text-gray-400 truncate'>
                    Total Users
                  </dt>
                  <dd className='text-2xl font-semibold text-gray-900 dark:text-white'>
                    245
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white/10 backdrop-blur-md overflow-hidden shadow rounded-lg'>
          <div className='px-4 py-5 sm:p-6'>
            <div className='flex items-center'>
              <div className='flex-shrink-0 bg-primary rounded-md p-3'>
                <svg
                  className='h-6 w-6 text-white'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
                  />
                </svg>
              </div>
              <div className='ml-5 w-0 flex-1'>
                <dl>
                  <dt className='text-sm font-medium text-gray-500 dark:text-gray-400 truncate'>
                    Registrations
                  </dt>
                  <dd className='text-2xl font-semibold text-gray-900 dark:text-white'>
                    12,457
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white/10 backdrop-blur-md overflow-hidden shadow rounded-lg'>
          <div className='px-4 py-5 sm:p-6'>
            <div className='flex items-center'>
              <div className='flex-shrink-0 bg-primary rounded-md p-3'>
                <svg
                  className='h-6 w-6 text-white'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <div className='ml-5 w-0 flex-1'>
                <dl>
                  <dt className='text-sm font-medium text-gray-500 dark:text-gray-400 truncate'>
                    System Status
                  </dt>
                  <dd className='text-lg font-semibold text-green-600'>
                    Operational
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white/10 backdrop-blur-md overflow-hidden shadow rounded-lg'>
          <div className='px-4 py-5 sm:p-6'>
            <div className='flex items-center'>
              <div className='flex-shrink-0 bg-primary rounded-md p-3'>
                <svg
                  className='h-6 w-6 text-white'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <div className='ml-5 w-0 flex-1'>
                <dl>
                  <dt className='text-sm font-medium text-gray-500 dark:text-gray-400 truncate'>
                    Pending Approvals
                  </dt>
                  <dd className='text-2xl font-semibold text-gray-900 dark:text-white'>
                    23
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Admin Actions */}
      <div className='bg-white/10 backdrop-blur-md shadow rounded-lg p-6 mb-8'>
        <h3 className='text-lg font-medium text-gray-900 dark:text-white mb-4'>
          Administrative Actions
        </h3>
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-4'>
          <button className='bg-gray-900 hover:bg-secondary text-white px-4 py-3 rounded-md text-sm font-medium transition-colors'>
            Manage Users
          </button>
          <button className='bg-gray-900 hover:bg-secondary text-white px-4 py-3 rounded-md text-sm font-medium transition-colors'>
            System Settings
          </button>
          <button className='bg-gray-900 hover:bg-secondary text-white px-4 py-3 rounded-md text-sm font-medium transition-colors'>
            View Logs
          </button>
          <button className='bg-gray-900 hover:bg-secondary text-white px-4 py-3 rounded-md text-sm font-medium transition-colors'>
            Generate Reports
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className='bg-white/10 backdrop-blur-md shadow rounded-lg p-6'>
        <h3 className='text-lg font-medium text-gray-900 dark:text-white mb-4'>
          Recent System Activity
        </h3>
        <div className='space-y-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <div className='bg-gray-900 rounded-full p-2 mr-3'>
                <svg
                  className='h-4 w-4 text-green-600 dark:text-green-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
              </div>
              <div>
                <p className='text-sm font-medium text-gray-900 dark:text-white'>
                  New user registration approved
                </p>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  2 minutes ago
                </p>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <div className='bg-gray-900 rounded-full p-2 mr-3'>
                <svg
                  className='h-4 w-4 text-blue-600 dark:text-blue-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <div>
                <p className='text-sm font-medium text-gray-900 dark:text-white'>
                  System backup completed
                </p>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  1 hour ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
