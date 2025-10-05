// 'use client'

// export default function DownloadsPage() {
//   const downloads = [
//     { file: 'Report_Q1.pdf', size: '1.2MB', count: 45, last: '2025-08-27' },
//     { file: 'AppInstaller.exe', size: '50MB', count: 120, last: '2025-08-20' },
//   ]

//   return (
//     <div className='p-4 sm:p-6 mb-50'>
//       <h1 className='text-2xl sm:text-3xl font-bold mb-4 text-white'>
//         Downloads
//       </h1>
//       <div className='overflow-x-auto bg-gray-800 rounded-xl'>
//         <table className='min-w-full divide-y divide-gray-700'>
//           <thead className='bg-gray-700 text-white text-left'>
//             <tr>
//               <th className='px-3 py-2 text-sm sm:text-base'>File</th>
//               <th className='px-3 py-2 text-sm sm:text-base'>Size</th>
//               <th className='px-3 py-2 text-sm sm:text-base'>Downloads</th>
//               <th className='px-3 py-2 text-sm sm:text-base'>Last Download</th>
//             </tr>
//           </thead>
//           <tbody className='divide-y divide-gray-700'>
//             {downloads.map((d, i) => (
//               <tr key={i} className='hover:bg-gray-700'>
//                 <td className='px-3 py-2'>{d.file}</td>
//                 <td className='px-3 py-2'>{d.size}</td>
//                 <td className='px-3 py-2'>{d.count}</td>
//                 <td className='px-3 py-2'>{d.last}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <button className='mt-4 bg-primary  px-4 py-2 rounded'>
//         Upload New File
//       </button>
//     </div>
//   )
// }
"use client";

import React from "react";
import { useDownloads } from "@/contexts/DownloadsContext";

export default function DownloadsPage() {
  const { downloads } = useDownloads();

  return (
    <div className="p-4 sm:p-6 mb-50">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
        Downloads
      </h1>
      <div className="overflow-x-auto bg-gray-800 rounded-xl">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-700 text-white text-left">
            <tr>
              <th className="px-3 py-2 text-sm sm:text-base">File</th>
              <th className="px-3 py-2 text-sm sm:text-base">Size</th>
              <th className="px-3 py-2 text-sm sm:text-base">Downloads</th>
              <th className="px-3 py-2 text-sm sm:text-base">Last Download</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {downloads.length > 0 ? (
              downloads.map((d, i) => (
                <tr key={i} className="hover:bg-gray-300">
                  <td className="px-3 py-2">{d.file}</td>
                  <td className="px-3 py-2">{d.size}</td>
                  <td className="px-3 py-2">{d.count}</td>
                  <td className="px-3 py-2">{d.last}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-3 py-2 text-center text-gray-500">
                  No downloads recorded.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* <button className="mt-4 bg-primary px-4 py-2 rounded">
        Upload New File
      </button> */}
    </div>
  );
}