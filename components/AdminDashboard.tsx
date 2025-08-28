'use client'

import React, { useState, useEffect } from 'react'

import {
  UserIcon,
  CloudArrowDownIcon,
  CheckCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline'

const AdminDashboard = () => {
  // Example state (replace later with API data)
  const [totalUsers, setTotalUsers] = useState(245)
  const [downloads, setDownloads] = useState(1430)
  const [pendingRequests, setPendingRequests] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Sara Kidane', email: 'sara@example.com' },
  ])
  const [activityLog, setActivityLog] = useState([
    {
      id: 1,
      message: 'New user request approved',
      time: '2 min ago',
      type: 'success',
    },
    {
      id: 2,
      message: 'System backup completed',
      time: '1 hr ago',
      type: 'info',
    },
  ])

  // Example approve/deny actions
  const handleApprove = (id: number) => {
    setPendingRequests((prev) => prev.filter((req) => req.id !== id))
    setActivityLog((prev) => [
      {
        id: Date.now(),
        message: `Request ${id} approved`,
        time: 'Just now',
        type: 'success',
      },
      ...prev,
    ])
  }

  const handleDeny = (id: number) => {
    setPendingRequests((prev) => prev.filter((req) => req.id !== id))
    setActivityLog((prev) => [
      {
        id: Date.now(),
        message: `Request ${id} denied`,
        time: 'Just now',
        type: 'error',
      },
      ...prev,
    ])
  }

  return (
    <>
      <main className='pt-32 pb-16 px-6 max-w-7xl mx-auto'>
        {/* Header */}
        <div className='mb-10 text-center'>
          <h1 className='text-4xl font-bold text-primary'>Admin Dashboard</h1>
          <p className='text-gray-500 dark:text-gray-400'>
            Manage users, requests, and downloads of the security system
          </p>
        </div>

        {/* Stats Section */}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10'>
          <div className='bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl shadow-lg text-center'>
            <UserIcon className='h-10 w-10 text-primary mx-auto' />
            <h3 className='text-lg font-medium text-gray-400 mt-3'>
              Total Users
            </h3>
            <p className='text-3xl font-bold text-white'>{totalUsers}</p>
          </div>

          <div className='bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl shadow-lg text-center'>
            <CloudArrowDownIcon className='h-10 w-10 text-primary mx-auto' />
            <h3 className='text-lg font-medium text-gray-400 mt-3'>
              App Downloads
            </h3>
            <p className='text-3xl font-bold text-white'>{downloads}</p>
          </div>

          <div className='bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl shadow-lg text-center'>
            <UserIcon className='h-10 w-10 text-primary mx-auto' />
            <h3 className='text-lg font-medium text-gray-400 mt-3'>
              Pending Requests
            </h3>
            <p className='text-3xl font-bold text-white'>
              {pendingRequests.length}
            </p>
          </div>
        </div>

        {/* Pending Requests */}
        <section className='bg-white/10 dark:bg-gray-900/60 p-6 rounded-2xl shadow-lg mb-10'>
          <h2 className='text-xl font-semibold mb-4 text-primary'>
            User Requests
          </h2>
          {pendingRequests.length === 0 ? (
            <p className='text-gray-400'>No pending requests 🎉</p>
          ) : (
            <div className='space-y-4'>
              {pendingRequests.map((req) => (
                <div
                  key={req.id}
                  className='flex items-center justify-between bg-gray-800/40 p-4 rounded-xl'
                >
                  <div>
                    <p className='font-medium text-white'>{req.name}</p>
                    <p className='text-sm text-gray-400'>{req.email}</p>
                  </div>
                  <div className='flex gap-2'>
                    <button
                      onClick={() => handleApprove(req.id)}
                      className='flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-md text-sm'
                    >
                      <CheckCircleIcon className='h-5 w-5' /> Approve
                    </button>
                    <button
                      onClick={() => handleDeny(req.id)}
                      className='flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm'
                    >
                      <XCircleIcon className='h-5 w-5' /> Deny
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Activity Logs */}
        <section className='bg-white/10 dark:bg-gray-900/60 p-6 rounded-2xl shadow-lg'>
          <h2 className='text-xl font-semibold mb-4 text-primary'>
            Recent Activity
          </h2>
          <div className='space-y-3'>
            {activityLog.map((log) => (
              <div
                key={log.id}
                className='flex items-center gap-3 bg-gray-800/40 p-3 rounded-xl'
              >
                {log.type === 'success' && (
                  <CheckCircleIcon className='h-5 w-5 text-green-500' />
                )}
                {log.type === 'error' && (
                  <XCircleIcon className='h-5 w-5 text-red-500' />
                )}
                <div>
                  <p className='text-sm font-medium text-white'>
                    {log.message}
                  </p>
                  <p className='text-xs text-gray-400'>{log.time}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default AdminDashboard
