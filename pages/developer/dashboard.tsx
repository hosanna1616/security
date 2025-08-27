// // pages/developer/dashboard.tsx
// import { useEffect, useState } from 'react'
// import { useRouter } from 'next/router'
// import Head from 'next/head'
// import DashboardLayout from '../../components/DashboardLayout'

// export default function DeveloperDashboard() {
//   const [user, setUser] = useState<any>(null)
//   const router = useRouter()

//   useEffect(() => {
//     const token = localStorage.getItem('token')
//     const userData = JSON.parse(localStorage.getItem('user') || '{}')

//     if (!token || userData.role !== 'developer') {
//       router.push('/login')
//       return
//     }

//     setUser(userData)
//   }, [])

//   if (!user) return <div>Loading...</div>

//   return (
//     <>
//       <Head>
//         <title>Developer Dashboard - Fayda System</title>
//       </Head>
//       <DashboardLayout userRole={user.role} userName={user.name}>
//         <div className='mb-6'>
//           <h2 className='text-2xl font-bold text-gray-800'>
//             Developer Dashboard
//           </h2>
//           <p className='text-gray-600'>System development and API management</p>
//         </div>

//         <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8'>
//           <div className='bg-white overflow-hidden shadow rounded-lg'>
//             <div className='px-4 py-5 sm:p-6'>
//               <div className='flex items-center'>
//                 <div className='flex-shrink-0 bg-green-500 rounded-md p-3'>
//                   <svg
//                     className='h-6 w-6 text-white'
//                     fill='none'
//                     viewBox='0 0 24 24'
//                     stroke='currentColor'
//                   >
//                     <path
//                       strokeLinecap='round'
//                       strokeLinejoin='round'
//                       strokeWidth={2}
//                       d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
//                     />
//                   </svg>
//                 </div>
//                 <div className='ml-5 w-0 flex-1'>
//                   <dl>
//                     <dt className='text-sm font-medium text-gray-500 truncate'>
//                       API Health
//                     </dt>
//                     <dd className='text-lg font-semibold text-green-600'>
//                       100%
//                     </dd>
//                   </dl>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className='bg-white overflow-hidden shadow rounded-lg'>
//             <div className='px-4 py-5 sm:p-6'>
//               <div className='flex items-center'>
//                 <div className='flex-shrink-0 bg-blue-500 rounded-md p-3'>
//                   <svg
//                     className='h-6 w-6 text-white'
//                     fill='none'
//                     viewBox='0 0 24 24'
//                     stroke='currentColor'
//                   >
//                     <path
//                       strokeLinecap='round'
//                       strokeLinejoin='round'
//                       strokeWidth={2}
//                       d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
//                     />
//                   </svg>
//                 </div>
//                 <div className='ml-5 w-0 flex-1'>
//                   <dl>
//                     <dt className='text-sm font-medium text-gray-500 truncate'>
//                       Active Sessions
//                     </dt>
//                     <dd className='text-2xl font-semibold text-gray-900'>
//                       1,243
//                     </dd>
//                   </dl>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className='bg-white overflow-hidden shadow rounded-lg'>
//             <div className='px-4 py-5 sm:p-6'>
//               <div className='flex items-center'>
//                 <div className='flex-shrink-0 bg-purple-500 rounded-md p-3'>
//                   <svg
//                     className='h-6 w-6 text-white'
//                     fill='none'
//                     viewBox='0 0 24 24'
//                     stroke='currentColor'
//                   >
//                     <path
//                       strokeLinecap='round'
//                       strokeLinejoin='round'
//                       strokeWidth={2}
//                       d='M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z'
//                     />
//                   </svg>
//                 </div>
//                 <div className='ml-5 w-0 flex-1'>
//                   <dl>
//                     <dt className='text-sm font-medium text-gray-500 truncate'>
//                       API Requests
//                     </dt>
//                     <dd className='text-2xl font-semibold text-gray-900'>
//                       24.5k
//                     </dd>
//                   </dl>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className='bg-white shadow rounded-lg p-6'>
//           <h3 className='text-lg font-medium text-gray-900 mb-4'>
//             System Metrics
//           </h3>
//           <p className='text-gray-600'>
//             Developer tools, API management, and system health monitoring will
//             be displayed here.
//           </p>
//         </div>
//       </DashboardLayout>
//     </>
//   )
// }
