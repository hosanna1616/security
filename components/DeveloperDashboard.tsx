// components/DeveloperDashboard.tsx
import React from 'react'

const DeveloperDashboard = () => {
  return (
    <div className='p-6 mt-25'>
      <div className='mb-6'>
        <h2 className='text-2xl font-bold text-gray-800 dark:text-white'>
          Developer Dashboard
        </h2>
        <p className='text-gray-600 dark:text-gray-400'>
          System development and API management
        </p>
      </div>

      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8'>
        <div className='bg-white/10 backdrop-blur-md overflow-hidden shadow rounded-lg'>
          <div className='px-4 py-5 sm:p-6'>
            <div className='flex items-center'>
              <div className='flex-shrink-0 bg-green-500 rounded-md p-3'>
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
                    API Health
                  </dt>
                  <dd className='text-lg font-semibold text-green-600'>100%</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white/10 backdrop-blur-md overflow-hidden shadow rounded-lg'>
          <div className='px-4 py-5 sm:p-6'>
            <div className='flex items-center'>
              <div className='flex-shrink-0 bg-blue-500 rounded-md p-3'>
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
                    d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
                  />
                </svg>
              </div>
              <div className='ml-5 w-0 flex-1'>
                <dl>
                  <dt className='text-sm font-medium text-gray-500 dark:text-gray-400 truncate'>
                    Active Sessions
                  </dt>
                  <dd className='text-2xl font-semibold text-gray-900 dark:text-white'>
                    1,243
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white/10 backdrop-blur-md overflow-hidden shadow rounded-lg'>
          <div className='px-4 py-5 sm:p-6'>
            <div className='flex items-center'>
              <div className='flex-shrink-0 bg-purple-500 rounded-md p-3'>
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
                    d='M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z'
                  />
                </svg>
              </div>
              <div className='ml-5 w-0 flex-1'>
                <dl>
                  <dt className='text-sm font-medium text-gray-500 dark:text-gray-400 truncate'>
                    API Requests
                  </dt>
                  <dd className='text-2xl font-semibold text-gray-900 dark:text-white'>
                    24.5k
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white/10 backdrop-blur-md shadow rounded-lg p-6 mb-8'>
        <h3 className='text-lg font-medium text-gray-900 dark:text-white mb-4'>
          System Metrics
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <h4 className='font-medium text-gray-700 dark:text-gray-300 mb-3'>
              Server Status
            </h4>
            <div className='space-y-2'>
              <div className='flex justify-between items-center'>
                <span className='text-gray-600 dark:text-gray-400'>
                  Main Server
                </span>
                <span className='text-green-600 font-medium'>Online</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-gray-600 dark:text-gray-400'>
                  Database
                </span>
                <span className='text-green-600 font-medium'>Online</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-gray-600 dark:text-gray-400'>
                  API Gateway
                </span>
                <span className='text-green-600 font-medium'>Online</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className='font-medium text-gray-700 dark:text-gray-300 mb-3'>
              Response Times
            </h4>
            <div className='space-y-2'>
              <div className='flex justify-between items-center'>
                <span className='text-gray-600 dark:text-gray-400'>
                  API Response
                </span>
                <span className='font-medium text-gray-900 dark:text-white'>
                  128ms
                </span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-gray-600 dark:text-gray-400'>
                  Database Query
                </span>
                <span className='font-medium text-gray-900 dark:text-white'>
                  45ms
                </span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-gray-600 dark:text-gray-400'>
                  Cache Hit
                </span>
                <span className='font-medium text-gray-900 dark:text-white'>
                  12ms
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white/10 backdrop-blur-md shadow rounded-lg p-6'>
        <h3 className='text-lg font-medium text-gray-900 dark:text-white mb-4'>
          Development Tools
        </h3>
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-4'>
          <button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-md text-sm font-medium transition-colors'>
            API Docs
          </button>
          <button className='bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-md text-sm font-medium transition-colors'>
            Test Suite
          </button>
          <button className='bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-md text-sm font-medium transition-colors'>
            Log Viewer
          </button>
          <button className='bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-md text-sm font-medium transition-colors'>
            Debug Tools
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeveloperDashboard
