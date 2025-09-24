import React from 'react'

const AnalyticsOverview = () => {
  return (
    <div className='bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md'>
      <h2 className='text-lg font-semibold text-gray-800 dark:text-white mb-2'>
        Analytics Overview
      </h2>
      <p className='text-sm text-gray-600 dark:text-gray-300'>
        Quick KPIs like threats blocked, VPN sessions, active users.
      </p>
    </div>
  )
}

export default AnalyticsOverview
