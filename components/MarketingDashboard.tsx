import React from 'react'
const MarketingDashboard = () => {
  return (
    <div className='p-6 mt-25'>
      <div className='mb-6'>
        <h2 className='text-2xl font-bold text-gray-800 dark:text-white'>
          Marketing Dashboard
        </h2>
        <p className='text-gray-600'>Campaign analytics and user engagement</p>
      </div>

      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8'>
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
                    d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                  />
                </svg>
              </div>
              <div className='ml-5 w-0 flex-1'>
                <dl>
                  <dt className='text-sm font-medium text-gray-500 truncate'>
                    Campaign Views
                  </dt>
                  <dd className='text-2xl font-semibold text-gray-900'>
                    24.5k
                  </dd>
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
                    Conversion Rate
                  </dt>
                  <dd className='text-2xl font-semibold text-gray-900'>
                    12.8%
                  </dd>
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
                    d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
              </div>
              <div className='ml-5 w-0 flex-1'>
                <dl>
                  <dt className='text-sm font-medium text-gray-500 truncate'>
                    New Users
                  </dt>
                  <dd className='text-2xl font-semibold text-gray-900'>
                    3,142
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white/10 backdrop-blur-md shadow rounded-lg p-6 mb-8'>
        <h3 className='text-lg font-medium text-gray-900 mb-4'>
          Campaign Performance
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <h4 className='font-medium text-gray-700 mb-3'>Top Campaigns</h4>
            <ul className='space-y-2'>
              <li className='flex justify-between items-center'>
                <span>Summer Promotion</span>
                <span className='text-green-600 font-medium'>+15.2%</span>
              </li>
              <li className='flex justify-between items-center'>
                <span>Referral Program</span>
                <span className='text-green-600 font-medium'>+9.8%</span>
              </li>
              <li className='flex justify-between items-center'>
                <span>Email Newsletter</span>
                <span className='text-green-600 font-medium'>+7.3%</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-medium text-gray-700 mb-3'>Engagement Rate</h4>
            <div className='bg-gray-200 rounded-full h-4 mb-2'>
              <div
                className='bg-purple-600 h-4 rounded-full'
                style={{ width: '65%' }}
              ></div>
            </div>
            <p className='text-sm text-gray-600'>Overall engagement: 65%</p>
          </div>
        </div>
      </div>

      <div className='bg-white/10 backdrop-blur-md shadow rounded-lg p-6'>
        <h3 className='text-lg font-medium text-gray-900 mb-4'>
          Marketing Tools
        </h3>
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-4'>
          <button className='bg-purple-600 text-white px-4 py-3 rounded-md text-sm font-medium hover:bg-purple-700'>
            Create Campaign
          </button>
          <button className='bg-blue-600 text-white px-4 py-3 rounded-md text-sm font-medium hover:bg-blue-700'>
            Analytics
          </button>
          <button className='bg-green-600 text-white px-4 py-3 rounded-md text-sm font-medium hover:bg-green-700'>
            Email Marketing
          </button>
          <button className='bg-red-600 text-white px-4 py-3 rounded-md text-sm font-medium hover:bg-red-700'>
            Social Media
          </button>
        </div>
      </div>
    </div>
  )
}

export default MarketingDashboard
