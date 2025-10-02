'use client'
import React, { useEffect, useState } from 'react'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts'

type Incident = {
  id: number
  type: string
  count: number
}

const COLORS = ['#FF4C4C', '#FFA500', '#4CAF50']

const KEY_MAP: { [type: string]: string } = {
  Malware: 'Malware',
  'Unauthorized Access': 'Unauthorized_Access',
  'DDoS Attempt': 'DDoS_Attempt',
}

const LABEL_MAP: { [key: string]: string } = {
  Malware: 'Malware',
  Unauthorized_Access: 'Unauthorized Access',
  DDoS_Attempt: 'DDoS Attempt',
}

export default function SIEMDashboard() {
  const [incidents, setIncidents] = useState<Incident[]>([])
  const [loading, setLoading] = useState(true)

  // Fetch incidents from API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const res = await fetch('/api/siem/incidents')
      const data = await res.json()
      setIncidents(data)
      setLoading(false)
    }
    fetchData()
  }, [])

  // Update incident count
  const updateCount = async (incident: Incident, delta: number) => {
    const newCount = Math.max(0, incident.count + delta)

    // update optimistically
    setIncidents((prev) =>
      prev.map((it) =>
        it.id === incident.id ? { ...it, count: newCount } : it
      )
    )

    // push update to API
    await fetch('/api/siem/incidents', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: incident.id, count: newCount }),
    })
  }

  if (loading) return <p className='text-gray-500'>Loading incidents...</p>

  // PIE CHART data
  const pieData = incidents.map((it) => ({ name: it.type, value: it.count }))

  // AREA CHART data
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const areaData = days.map((day, idx) => ({
    day,
    ...incidents.reduce((acc, it) => {
      const key = KEY_MAP[it.type] || it.type.replace(/\s+/g, '_')
      acc[key] = Math.max(0, it.count - idx)
      return acc
    }, {} as Record<string, number>),
  }))

  return (
    <div className='bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md space-y-6'>
      <h2 className='text-lg font-semibold text-gray-800 dark:text-white mb-2'>
        Nisir SIEM Dashboard
      </h2>

      {/* Incident List with Controls */}
      <ul className='space-y-2'>
        {incidents.map((it) => (
          <li
            key={it.id}
            className='flex justify-between items-center p-3 rounded-lg bg-gray-100 dark:bg-gray-900'
          >
            <span className='font-medium'>{it.type}</span>

            <div className='flex items-center space-x-2'>
              <button
                onClick={() => updateCount(it, -1)}
                disabled={it.count <= 0}
                className='px-2 py-1 bg-gray-800 text-white rounded-lg disabled:opacity-40'
              >
                -
              </button>
              <span className='font-semibold'>{it.count}</span>
              <button
                onClick={() => updateCount(it, 1)}
                className='px-2 py-1 bg-gray-800 text-white rounded-lg'
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Charts */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* Pie Chart */}
        <div className='bg-gray-50 dark:bg-gray-900 p-4 rounded-xl'>
          <h3 className='text-md font-semibold mb-2 text-gray-800 dark:text-white'>
            Incident Types
          </h3>
          <ResponsiveContainer width='100%' height={240}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey='value'
                nameKey='name'
                cx='50%'
                cy='50%'
                outerRadius={80}
                label
              >
                {pieData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend formatter={(val) => LABEL_MAP[val] ?? val} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Area Chart */}
        <div className='bg-gray-50 dark:bg-gray-900 p-4 rounded-xl'>
          <h3 className='text-md font-semibold mb-2 text-gray-800 dark:text-white'>
            Incident Trends (Past Week)
          </h3>
          <ResponsiveContainer width='100%' height={240}>
            <AreaChart data={areaData}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='day' />
              <YAxis />
              <Tooltip />
              <Legend formatter={(val) => LABEL_MAP[val] ?? val} />
              {Object.keys(areaData[0] ?? {})
                .filter((k) => k !== 'day')
                .map((key, i) => (
                  <Area
                    key={key}
                    type='monotone'
                    dataKey={key}
                    stackId='1'
                    stroke={COLORS[i % COLORS.length]}
                    fill={COLORS[i % COLORS.length] + '33'}
                  />
                ))}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
