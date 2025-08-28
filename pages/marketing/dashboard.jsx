// pages/marketing/dashboard.tsx
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import DashboardLayout from '../../components/ManagerDashboard'

export default function MarketingDashboard() {
  const [user, setUser] = useState < any > null
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const userData = JSON.parse(localStorage.getItem('user') || '{}')

    if (!token || userData.role !== 'marketing') {
      router.push('/login')
      return
    }

    setUser(userData)
  }, [])

  if (!user) return <div>Loading...</div>

  return (
    <>
      <Head>
        <title>Marketing Dashboard - Fayda System</title>
      </Head>
      <DashboardLayout userRole={user.role} userName={user.name}>
        <div className='mb-6'>
          <h2 className='text-2xl font-bold text-gray-800'>
            Marketing Dashboard
          </h2>
          <p className='text-gray-600'>
            Campaign analytics and user engagement
          </p>
        </div>

        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8'>
          <div className='bg-white overflow-hidden shadow rounded-lg'>
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

          <div className='bg-white overflow-hidden shadow rounded-lg'>
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

          <div className='bg-white overflow-hidden shadow rounded-lg'>
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

        <div className='bg-white shadow rounded-lg p-6'>
          <h3 className='text-lg font-medium text-gray-900 mb-4'>
            Campaign Analytics
          </h3>
          <p className='text-gray-600'>
            Marketing campaign performance and user engagement analytics will be
            displayed here.
          </p>
        </div>
      </DashboardLayout>
    </>
  )
}
