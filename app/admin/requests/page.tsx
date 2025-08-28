// app/Admin/requests/page.tsx
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
  ]

  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>User Requests</h1>
      <table className='w-full border-collapse bg-gray-800 rounded-xl overflow-hidden'>
        <thead className='bg-gray-700 text-left'>
          <tr>
            <th className='p-3'>ID</th>
            <th className='p-3'>User</th>
            <th className='p-3'>Type</th>
            <th className='p-3'>Status</th>
            <th className='p-3'>Date</th>
            <th className='p-3'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((r) => (
            <tr
              key={r.id}
              className='border-t border-gray-700 hover:bg-gray-700'
            >
              <td className='p-3'>{r.id}</td>
              <td className='p-3'>{r.user}</td>
              <td className='p-3'>{r.type}</td>
              <td className='p-3'>{r.status}</td>
              <td className='p-3'>{r.date}</td>
              <td className='p-3 flex gap-2'>
                <button className='bg-green-600 px-3 py-1 rounded'>
                  Approve
                </button>
                <button className='bg-red-600 px-3 py-1 rounded'>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
