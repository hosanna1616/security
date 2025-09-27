import React from 'react'

const incidents = [
  { type: 'Malware', count: 12 },
  { type: 'Unauthorized Access', count: 5 },
  { type: 'DDoS Attempt', count: 3 },
]

const SIEMDashboard = () => {
  return (
    <div className='bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md'>
      <h2 className='text-lg font-semibold text-gray-800 dark:text-white mb-2'>
        Nisir SIEM Dashboard
      </h2>
      <ul className='space-y-2'>
        {incidents.map((i, idx) => (
          <li
            key={idx}
            className='flex justify-between p-3 rounded-lg bg-gray-100 dark:bg-gray-700'
          >
            <span>{i.type}</span>
            <span className='font-semibold'>{i.count}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SIEMDashboard
