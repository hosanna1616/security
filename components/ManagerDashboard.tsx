// components/ManagerDashboard.tsx
import React from 'react'

const ManagerDashboard = () => {
  return (
    <div className='p-6 mt-25'>
      <div className='mb-6'>
        <h2 className='text-2xl font-bold text-gray-800 dark:text-white'>
          Manager Dashboard
        </h2>
        <p className='text-gray-400'>
          Team management and performance monitoring
        </p>
      </div>

      {/* Manager-specific content */}
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8'>
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
                    d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
              </div>
              <div className='ml-5 w-0 flex-1'>
                <dl>
                  <dt className='text-sm font-medium text-gray-500 truncate'>
                    Team Members
                  </dt>
                  <dd className='text-2xl font-semibold text-gray-900'>15</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

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
                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <div className='ml-5 w-0 flex-1'>
                <dl>
                  <dt className='text-sm font-medium text-gray-500 truncate'>
                    Completed Tasks
                  </dt>
                  <dd className='text-2xl font-semibold text-gray-900'>89%</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white/10 backdrop-blur-md overflow-hidden shadow rounded-lg'>
          <div className='px-4 py-5 sm:p-6'>
            <div className='flex items-center'>
              <div className='flex-shrink-0 bg-yellow-500 rounded-md p-3'>
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
                  <dt className='text-sm font-medium text-gray-500 truncate'>
                    Pending Reviews
                  </dt>
                  <dd className='text-2xl font-semibold text-gray-900'>7</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white/10 backdrop-blur-md shadow rounded-lg p-6 mb-8'>
        <h3 className='text-lg font-medium text-white mb-4'>
          Team Performance
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <h4 className='font-medium text-gray-400 mb-3'>Top Performers</h4>
            <ul className='space-y-2'>
              <li className='flex justify-between items-center'>
                <span>hosanna</span>
                <span className='text-green-600 font-medium'>98%</span>
              </li>
              <li className='flex justify-between items-center'>
                <span>feven</span>
                <span className='text-green-600 font-medium'>95%</span>
              </li>
              <li className='flex justify-between items-center'>
                <span>nahom</span>
                <span className='text-green-600 font-medium'>92%</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-medium text-gray-400 mb-3'>Team Progress</h4>
            <div className='bg-gray-200 rounded-full h-4 mb-2'>
              <div
                className='bg-blue-600 h-4 rounded-full'
                style={{ width: '75%' }}
              ></div>
            </div>
            <p className='text-sm text-gray-500'>
              Quarterly target: 75% completed
            </p>
          </div>
        </div>
      </div>

      <div className='bg-white/10 backdrop-blur-md shadow rounded-lg p-6'>
        <h3 className='text-lg font-medium text-white mb-4'>
          Upcoming Reviews
        </h3>
        <div className='space-y-3'>
          <div className='flex justify-between items-center p-3 bg-gray-400 rounded-lg'>
            <div>
              <p className='font-medium'>Monthly Performance Review</p>
              <p className='text-sm text-gray-600'>Due: Tomorrow, 10:00 AM</p>
            </div>
            <button className='bg-blue-600 text-white px-3 py-1 rounded text-sm'>
              Start
            </button>
          </div>
          <div className='flex justify-between items-center p-3 bg-gray-400 rounded-lg'>
            <div>
              <p className='font-medium'>Team Meeting</p>
              <p className='text-sm text-gray-600'>Due: Friday, 2:00 PM</p>
            </div>
            <button className='bg-gray-600 text-white px-3 py-1 rounded text-sm'>
              Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManagerDashboard
