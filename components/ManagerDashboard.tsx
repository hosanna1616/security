'use client'
import { useEffect, useState } from 'react'

interface Message {
  id: number
  email: string
  content: string
  seen: boolean
  createdAt: string
}

export default function ManagerDashboard() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchMessages = async () => {
    try {
      const res = await fetch('/api/messages/all')
      const data = await res.json()
      if (res.ok) {
        setMessages(data)
      } else {
        setError(data.error || 'Failed to load messages')
      }
    } catch (err) {
      setError('Error fetching messages')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMessages()
  }, [])

  const markAsRead = async (id: number) => {
    try {
      const res = await fetch('/api/messages/all', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      })
      if (res.ok) {
        setMessages((prev) =>
          prev.map((msg) => (msg.id === id ? { ...msg, seen: true } : msg))
        )
      }
    } catch (err) {
      console.error(err)
    }
  }

  if (loading) {
    return <div className='p-6 text-white'>Loading messages...</div>
  }

  if (error) {
    return <div className='p-6 text-red-500'>{error}</div>
  }

  return (
    <div className='p-6 text-white min-h-screen bg-gray-900'>
      <h2 className='text-2xl font-bold mb-6'>📨 Manager Dashboard</h2>

      <div className='overflow-x-auto rounded-lg border border-gray-700'>
        <table className='min-w-full text-left text-sm'>
          <thead className='bg-gray-800 text-gray-300 uppercase text-xs'>
            <tr>
              <th className='px-4 py-3'>ID</th>
              <th className='px-4 py-3'>Email</th>
              <th className='px-4 py-3'>Message</th>
              <th className='px-4 py-3'>Status</th>
              <th className='px-4 py-3'>Created At</th>
              <th className='px-4 py-3'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <tr
                key={msg.id}
                className={`border-t border-gray-700 ${
                  msg.seen ? 'bg-gray-800/40' : 'bg-gray-800/80'
                }`}
              >
                <td className='px-4 py-3'>{msg.id}</td>
                <td className='px-4 py-3'>{msg.email}</td>
                <td className='px-4 py-3'>{msg.content}</td>
                <td className='px-4 py-3'>
                  {msg.seen ? (
                    <span className='text-green-400 font-semibold'>Seen</span>
                  ) : (
                    <span className='text-yellow-400 font-semibold'>
                      Unseen
                    </span>
                  )}
                </td>
                <td className='px-4 py-3'>
                  {new Date(msg.createdAt).toLocaleString()}
                </td>
                <td className='px-4 py-3'>
                  {!msg.seen && (
                    <button
                      onClick={() => markAsRead(msg.id)}
                      className='px-3 py-1 text-sm bg-blue-600 hover:bg-blue-700 rounded-lg'
                    >
                      Mark as Read
                    </button>
                  )}
                </td>
              </tr>
            ))}

            {messages.length === 0 && (
              <tr>
                <td colSpan={6} className='px-4 py-6 text-center text-gray-400'>
                  No messages found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
