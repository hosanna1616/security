// app/Admin/requests/page.tsx
'use client'

export default function RequestsPage() {
  const requests = [
    {
      id: 1,
      user: 'Alice Johnson',
      type: 'Access Request',
      status: 'Pending',
      date: '2025-08-28',
    },
    {
      id: 2,
      user: 'Bob Smith',
      type: 'Password Reset',
      status: 'Approved',
      date: '2025-08-25',
    },
    {
      id: 3,
      user: 'Alice Johnson',
      type: 'Access Request',
      status: 'Pending',
      date: '2025-08-28',
    },
    {
      id: 4,
      user: 'Bob Smith',
      type: 'Password Reset',
      status: 'Approved',
      date: '2025-08-25',
    },
    {
      id: 5,
      user: 'Alice Johnson',
      type: 'Access Request',
      status: 'Pending',
      date: '2025-08-28',
    },
    {
      id: 6,
      user: 'Bob Smith',
      type: 'Password Reset',
      status: 'Approved',
      date: '2025-08-25',
    },
  ]

  return (
    <div className='p-4 sm:p-6 overflow-x-auto'>
      <h1 className='text-2xl sm:text-3xl font-bold mb-4 text-white'>
        User Requests
      </h1>
      <div className='overflow-x-auto bg-gray-800 rounded-xl'>
        <table className='min-w-full divide-y divide-gray-700'>
          <thead className='bg-gray-700 text-white text-left'>
            <tr>
              <th className='px-3 py-2 text-sm sm:text-base'>ID</th>
              <th className='px-3 py-2 text-sm sm:text-base'>User</th>
              <th className='px-3 py-2 text-sm sm:text-base'>Type</th>
              <th className='px-3 py-2 text-sm sm:text-base'>Status</th>
              <th className='px-3 py-2 text-sm sm:text-base'>Date</th>
              <th className='px-3 py-2 text-sm sm:text-base'>Actions</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-700'>
            {requests.map((r) => (
              <tr key={r.id} className='hover:bg-gray-700'>
                <td className='px-3 py-2'>{r.id}</td>
                <td className='px-3 py-2'>{r.user}</td>
                <td className='px-3 py-2'>{r.type}</td>
                <td className='px-3 py-2'>{r.status}</td>
                <td className='px-3 py-2'>{r.date}</td>
                <td className='px-3 py-2 flex gap-2 flex-wrap'>
                  <button className='bg-green-600 px-2 py-1 rounded text-sm'>
                    Approve
                  </button>
                  <button className='bg-red-600 px-2 py-1 rounded text-sm'>
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
