'use client'

import { useState } from 'react'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'system'>(
    'profile'
  )

  return (
    <div className='p-4 sm:p-6'>
      <h1 className='text-2xl sm:text-3xl font-bold mb-6 text-white'>
        Admin Settings
      </h1>

      {/* Tabs */}
      <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 mb-6'>
        <button
          onClick={() => setActiveTab('profile')}
          className={`px-4 py-2 rounded text-sm sm:text-base font-medium ${
            activeTab === 'profile'
              ? 'bg-primary text-white'
              : 'bg-gray-700 text-gray-300'
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveTab('security')}
          className={`px-4 py-2 rounded text-sm sm:text-base font-medium ${
            activeTab === 'security'
              ? 'bg-primary text-white'
              : 'bg-gray-700 text-gray-300'
          }`}
        >
          Security
        </button>
        <button
          onClick={() => setActiveTab('system')}
          className={`px-4 py-2 rounded text-sm sm:text-base font-medium ${
            activeTab === 'system'
              ? 'bg-primary text-white'
              : 'bg-gray-700 text-gray-300'
          }`}
        >
          System
        </button>
      </div>

      {/* Content */}
      <div className='bg-gray-800 p-4 sm:p-6 rounded-xl space-y-6'>
        {activeTab === 'profile' && (
          <div>
            <h2 className='text-xl font-semibold mb-4'>Profile Settings</h2>
            <form className='space-y-4'>
              <div>
                <label className='block mb-1'>Full Name</label>
                <input
                  type='text'
                  placeholder='Admin Name'
                  className='w-full px-3 py-2 rounded bg-gray-700 text-white'
                />
              </div>
              <div>
                <label className='block mb-1'>Email</label>
                <input
                  type='email'
                  placeholder='admin@example.com'
                  className='w-full px-3 py-2 rounded bg-gray-700 text-white'
                />
              </div>
              <div>
                <label className='block mb-1'>Avatar</label>
                <input
                  type='file'
                  className=' text-gray-300 bg-gray-600 pl-3 py-1 rounded my-2 '
                />
              </div>
              <button className='bg-primary px-4 py-2 rounded'>
                Save Changes
              </button>
            </form>
          </div>
        )}

        {activeTab === 'security' && (
          <div className='space-y-4'>
            <h2 className='text-xl font-semibold mb-2 text-white'>
              Security Settings
            </h2>
            <form className='space-y-4'>
              <div>
                <label className='block mb-1 text-gray-200'>
                  Current Password
                </label>
                <input
                  type='password'
                  className='w-full px-3 py-2 rounded bg-gray-700 text-white'
                />
              </div>
              <div>
                <label className='block mb-1 text-gray-200'>New Password</label>
                <input
                  type='password'
                  className='w-full px-3 py-2 rounded bg-gray-700 text-white'
                />
              </div>
              <div className='flex items-center gap-2'>
                <input type='checkbox' className='mr-2' />
                <label className='text-gray-200'>
                  Enable Two-Factor Authentication
                </label>
              </div>
              <button className='bg-primary px-4 py-2 rounded mt-2'>
                Update Security
              </button>
            </form>
          </div>
        )}

        {activeTab === 'system' && (
          <div className='space-y-4'>
            <h2 className='text-xl font-semibold mb-2 text-white'>
              System Preferences
            </h2>
            <form className='space-y-4'>
              <div>
                <label className='block mb-1 text-gray-200'>Theme</label>
                <select className='w-full px-3 py-2 rounded bg-gray-700 text-white'>
                  <option>Dark</option>
                  <option>Light</option>
                  <option>System Default</option>
                </select>
              </div>
              <div className='flex items-center gap-2'>
                <input type='checkbox' className='mr-2' defaultChecked />
                <label className='text-gray-200'>Email Notifications</label>
              </div>
              <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2'>
                <label className='text-gray-200'>System Logs</label>
                <button className='bg-gray-600 px-3 py-1 rounded'>
                  Download Logs
                </button>
              </div>
              <button className='bg-primary px-4 py-2 rounded mt-2'>
                Save Preferences
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
