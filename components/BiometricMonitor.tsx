import React from 'react'

const biometricEvents = [
  { type: 'Fingerprint', status: 'Success' },
  { type: 'Facial Recognition', status: 'Failed' },
  { type: 'Iris Scan', status: 'Success' },
]

const BiometricMonitor = () => {
  return (
    <div className='bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md'>
      <h2 className='text-lg font-semibold text-gray-800 dark:text-white mb-2'>
        Biometric Identity Protection
      </h2>
      <ul className='space-y-2'>
        {biometricEvents.map((b, idx) => (
          <li
            key={idx}
            className={`flex justify-between p-3 rounded-lg ${
              b.status === 'Success'
                ? 'bg-secondary text-white'
                : 'bg-transparent text-white'
            }`}
          >
            <span>{b.type}</span>
            <span className='font-semibold'>{b.status}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BiometricMonitor
