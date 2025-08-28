// app/Admin/downloads/page.tsx
export default function DownloadsPage() {
  const downloads = [
    { file: 'Report_Q1.pdf', size: '1.2MB', count: 45, last: '2025-08-27' },
    { file: 'AppInstaller.exe', size: '50MB', count: 120, last: '2025-08-20' },
  ]

  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>Downloads</h1>
      <table className='w-full border-collapse bg-gray-800 rounded-xl overflow-hidden'>
        <thead className='bg-gray-700 text-left'>
          <tr>
            <th className='p-3'>File</th>
            <th className='p-3'>Size</th>
            <th className='p-3'>Downloads</th>
            <th className='p-3'>Last Download</th>
          </tr>
        </thead>
        <tbody>
          {downloads.map((d, i) => (
            <tr key={i} className='border-t border-gray-700 hover:bg-gray-700'>
              <td className='p-3'>{d.file}</td>
              <td className='p-3'>{d.size}</td>
              <td className='p-3'>{d.count}</td>
              <td className='p-3'>{d.last}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className='mt-4 bg-blue-600 px-4 py-2 rounded'>
        Upload New File
      </button>
    </div>
  )
}
