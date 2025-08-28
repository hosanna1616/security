// app/Admin/reports/page.tsx
'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

export default function ReportsPage() {
  const data = [
    { name: 'Jan', downloads: 30, requests: 15 },
    { name: 'Feb', downloads: 45, requests: 22 },
    { name: 'Mar', downloads: 60, requests: 30 },
  ]

  return (
    <div className='p-4 sm:p-6'>
      <h1 className='text-2xl sm:text-3xl font-bold mb-4 text-white'>
        Reports & Analytics
      </h1>
      <div className='bg-gray-800 p-4 sm:p-6 rounded-xl w-full'>
        <ResponsiveContainer width='100%' height={300}>
          <BarChart data={data}>
            <XAxis dataKey='name' stroke='#ccc' />
            <YAxis stroke='#ccc' />
            <Tooltip />
            <Bar dataKey='downloads' fill='#4F46E5' />
            <Bar dataKey='requests' fill='#10B981' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
