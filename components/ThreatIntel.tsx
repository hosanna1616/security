import React from 'react'

const threats = [
  { name: 'Emerging Malware', risk: 'High' },
  { name: 'Phishing Campaign', risk: 'Medium' },
  { name: 'Ransomware Variant', risk: 'High' },
]

const ThreatIntel = () => {
  return (
    <div className='bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md'>
      <h2 className='text-lg font-semibold text-gray-800 dark:text-white mb-2'>
        Threat Intelligence (Enyuma)
      </h2>
      <ul className='space-y-2'>
        {threats.map((t, idx) => (
          <li
            key={idx}
            className={`flex justify-between p-3 rounded-lg ${
              t.risk === 'High'
                ? 'bg-red-500 text-white'
                : t.risk === 'Medium'
                ? 'bg-yellow-400 text-black'
                : 'bg-green-500 text-white'
            }`}
          >
            <span>{t.name}</span>
            <span className='font-semibold'>{t.risk}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ThreatIntel
