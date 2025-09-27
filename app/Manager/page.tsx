import React from 'react'
import AnalyticsOverview from '@/components/dashboard/AnalyticsOverview'
import ServiceMonitor from '@/components/ServiceMonitor'
import ThreatIntel from '@/components/ThreatIntel'
import SIEMDashboard from '@/components/SIEMDashboard'

const ManagerDashboard = () => {
  return (
    <div className='p-6 bg-gray-50 dark:bg-gray-900 min-h-screen'>
      {/* Header */}
      <header className='mb-8'>
        <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>
          Security System – Manager Dashboard
        </h1>
        <p className='text-gray-600 dark:text-gray-400'>
          Monitor all security services, logs, and activities in real time.
        </p>
      </header>

      {/* Responsive Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>
        {/* Analytics Overview (full width on small, spans 4 on large) */}
        <div className='lg:col-span-4'>
          <AnalyticsOverview />
        </div>

        {/* Service Monitor (spans 4) */}
        <div className='lg:col-span-4'>
          <ServiceMonitor />
        </div>

        {/* Threat Intel (spans 4) */}
        <div className='lg:col-span-4'>
          <ThreatIntel />
        </div>

        {/* SIEM Dashboard (half width) */}
        <div className='lg:col-span-6'>
          <SIEMDashboard />
        </div>
      </div>
    </div>
  )
}

export default ManagerDashboard
