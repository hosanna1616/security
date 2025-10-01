'use client'
import React, { useState } from 'react'
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
  type: string
  count: number
}

// initial demo incidents
const initialIncidents: Incident[] = [
  { type: 'Malware', count: 12 },
  { type: 'Unauthorized Access', count: 5 },
  { type: 'DDoS Attempt', count: 3 },
]

// colors for pie slices
const COLORS = ['#FF4C4C', '#FFA500', '#4CAF50']

// mapping safe keys for area chart (no spaces)
const KEY_MAP: { [type: string]: string } = {
  Malware: 'Malware',
  'Unauthorized Access': 'Unauthorized_Access',
  'DDoS Attempt': 'DDoS_Attempt',
}

// user friendly labels (optional, used by legend formatter)
const LABEL_MAP: { [key: string]: string } = {
  Malware: 'Malware',
  Unauthorized_Access: 'Unauthorized Access',
  DDoS_Attempt: 'DDoS Attempt',
}

export default function SIEMDashboard() {
  const [incidents, setIncidents] = useState<Incident[]>(initialIncidents)

  const updateCount = (index: number, delta: number) => {
    setIncidents((prev) =>
      prev.map((it, i) =>
        i === index ? { ...it, count: Math.max(0, it.count + delta) } : it
      )
    )
  }

  // --- PIE DATA (Recharts expects objects like { name, value, ... } ) ---
  type PieDatum = { name: string; value: number; [key: string]: any }
  const pieData: PieDatum[] = incidents.map((it) => ({
    name: it.type,
    value: it.count,
  }))

  // --- AREA DATA (one object per day; keys correspond to dataKey used below) ---
  type AreaPoint = { day: string; [key: string]: number | string }
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  // Helper: get count by incident type
  const getCount = (typeName: string) =>
    incidents.find((i) => i.type === typeName)?.count ?? 0

  const areaData: AreaPoint[] = days.map((day, idx) => {
    // simple simulated trend: subtract idx (so chart shows a curve). Keep >= 0
    return {
      day,
      [KEY_MAP['Malware']]: Math.max(0, getCount('Malware') - idx),
      [KEY_MAP['Unauthorized Access']]: Math.max(
        0,
        getCount('Unauthorized Access') - idx
      ),
      [KEY_MAP['DDoS Attempt']]: Math.max(0, getCount('DDoS Attempt') - idx),
    }
  })

  // Legend formatter to show friendly labels instead of keys
  const legendFormatter = (value: string) => LABEL_MAP[value] ?? value

  return (
    <div className='bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md space-y-6'>
      <h2 className='text-lg font-semibold text-gray-800 dark:text-white mb-2'>
        Nisir SIEM Dashboard
      </h2>

      {/* Incident List with Controls */}
      <ul className='space-y-2'>
        {incidents.map((it, idx) => (
          <li
            key={it.type}
            className='flex justify-between items-center p-3 rounded-lg bg-gray-100 dark:bg-gray-900'
          >
            <span className='font-medium'>{it.type}</span>

            <div className='flex items-center space-x-2'>
              <button
                onClick={() => updateCount(idx, -1)}
                disabled={it.count <= 0}
                className='px-2 py-1 bg-gray-800 text-white rounded-lg disabled:opacity-40'
                aria-label={`Decrease ${it.type}`}
              >
                -
              </button>

              <span className='font-semibold'>{it.count}</span>

              <button
                onClick={() => updateCount(idx, 1)}
                className='px-2 py-1 bg-gray-800 text-white rounded-lg'
                aria-label={`Increase ${it.type}`}
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

          <div style={{ width: '100%', height: 240 }}>
            <ResponsiveContainer>
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
                <Legend formatter={legendFormatter} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Area Chart */}
        <div className='bg-gray-50 dark:bg-gray-900 p-4 rounded-xl'>
          <h3 className='text-md font-semibold mb-2 text-gray-800 dark:text-white'>
            Incident Trends (Past Week)
          </h3>

          <div style={{ width: '100%', height: 240 }}>
            <ResponsiveContainer>
              <AreaChart data={areaData}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='day' />
                <YAxis />
                <Tooltip />
                <Legend formatter={legendFormatter} />
                <Area
                  type='monotone'
                  dataKey={KEY_MAP['Malware']}
                  stackId='1'
                  stroke='#FF4C4C'
                  fill='#FF4C4C33'
                />
                <Area
                  type='monotone'
                  dataKey={KEY_MAP['Unauthorized Access']}
                  stackId='1'
                  stroke='#FFA500'
                  fill='#FFA50033'
                />
                <Area
                  type='monotone'
                  dataKey={KEY_MAP['DDoS Attempt']}
                  stackId='1'
                  stroke='#4CAF50'
                  fill='#4CAF5033'
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
