import React from 'react'

const AnalyticsOverview = () => {
  const stats = [
    { title: 'WAF Threats Blocked', value: 128, color: 'bg-red-500' },
    { title: 'VPN Active Sessions', value: 76, color: 'bg-blue-500' },
    { title: 'Unread Messages', value: 12, color: 'bg-green-500' },
  ]

  return (
    <div className='bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md space-y-4'>
      <h2 className='text-lg font-semibold text-gray-800 dark:text-white'>
        Analytics Overview
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        {stats.map((stat) => (
          <div
            key={stat.title}
            className={`p-4 rounded-lg text-white ${stat.color} flex flex-col items-center`}
          >
            <span className='text-2xl font-bold'>{stat.value}</span>
            <span className='text-sm'>{stat.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnalyticsOverview
