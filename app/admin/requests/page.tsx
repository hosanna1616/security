
// "use client";

// import { useState, useEffect } from "react";
// import { useRequests, type RequestData } from "@/contexts/RequestsContext";

// export default function RequestsPage() {
//   const { requests, updateRequestStatus } = useRequests();
//   const [selectedRequest, setSelectedRequest] = useState<RequestData | null>(
//     null
//   );
//   const [filterStatus, setFilterStatus] = useState<
//     "All" | "Pending" | "Approved" | "Rejected"
//   >("All");
//   const [statusUpdateMessage, setStatusUpdateMessage] = useState<{
//     type: string;
//     message: string;
//   } | null>(null);

//   // Force re-render when requests change
//   useEffect(() => {
//     console.log("Requests updated:", requests);
//   }, [requests]);

//   const handleStatusUpdate = (
//     id: string, // Changed from number to string to match RequestData.id
//     status: "Approved" | "Rejected" | "Pending"
//   ) => {
//     console.log(`Attempting to update request ${id} to ${status}`);
//     if (!updateRequestStatus) {
//       console.error("updateRequestStatus is not a function");
//       return;
//     }

//     const request = requests.find((req) => req.id === id);
//     if (!request) {
//       console.error(`Request with ID ${id} not found`);
//       return;
//     }

//     updateRequestStatus(id, status); // Use string id directly

//     // Simulate specified actions based on status
//     if (status === "Approved") {
//       console.log(`Sending approval confirmation to ${request.email}`);
//     } else if (status === "Rejected") {
//       console.log(`Logging rejection for ${request.fullName} (ID: ${id})`);
//     }

//     // Show status update message
//     setStatusUpdateMessage({
//       type: status.toLowerCase(),
//       message: `Request ${status.toLowerCase()} successfully!`,
//     });

//     // Clear message after 3 seconds
//     setTimeout(() => {
//       setStatusUpdateMessage(null);
//     }, 3000);
//   };

//   const filteredRequests =
//     filterStatus === "All"
//       ? requests
//       : requests.filter((request) => request.status === filterStatus);

//   // Button style with glowing effects
//   const getButtonStyle = (
//     type: "approve" | "reject" | "pending" | "details"
//   ) => {
//     const baseStyle =
//       "px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800";

//     switch (type) {
//       case "approve":
//         return `${baseStyle} bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white focus:ring-green-500 shadow-green-500/50 hover:shadow-green-500/70 shadow-lg hover:shadow-xl`;
//       case "reject":
//         return `${baseStyle} bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white focus:ring-red-500 shadow-red-500/50 hover:shadow-red-500/70 shadow-lg hover:shadow-xl`;
//       case "pending":
//         return `${baseStyle} bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white focus:ring-blue-500 shadow-blue-500/50 hover:shadow-blue-500/70 shadow-lg hover:shadow-xl`;
//       case "details":
//         return `${baseStyle} bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white focus:ring-purple-500 shadow-purple-500/50 hover:shadow-purple-500/70 shadow-lg hover:shadow-xl`;
//       default:
//         return baseStyle;
//     }
//   };

//   // Filter button style
//   const getFilterButtonStyle = (status: string) => {
//     const isActive = filterStatus === status;
//     const baseStyle =
//       "px-4 py-2 rounded-md font-medium transition-all duration-300 border-2 border-transparent";

//     if (isActive) {
//       switch (status) {
//         case "All":
//           return `${baseStyle} bg-gradient-to-r from-blue-400 to-cyan-400 text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-300 ring-opacity-50`;
//         case "Pending":
//           return `${baseStyle} bg-gradient-to-r from-yellow-400 to-amber-400 text-gray-800 shadow-lg shadow-yellow-500/30 ring-2 ring-yellow-300 ring-opacity-50`;
//         case "Approved":
//           return `${baseStyle} bg-gradient-to-r from-green-400 to-emerald-400 text-white shadow-lg shadow-green-500/30 ring-2 ring-green-300 ring-opacity-50`;
//         case "Rejected":
//           return `${baseStyle} bg-gradient-to-r from-red-400 to-rose-400 text-white shadow-lg shadow-red-500/30 ring-2 ring-red-300 ring-opacity-50`;
//         default:
//           return baseStyle;
//       }
//     } else {
//       return `${baseStyle} bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white border-gray-600`;
//     }
//   };

//   return (
//     <div className="p-4 sm:p-6 overflow-x-auto min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
//       <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-white text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
//         Security Requests Dashboard
//       </h1>

//       {/* Status Update Message */}
//       {statusUpdateMessage && (
//         <div
//           className={`mb-6 p-4 rounded-lg text-center font-semibold shadow-lg animate-pulse ${
//             statusUpdateMessage.type === "approved"
//               ? "bg-green-900/30 text-green-300 border border-green-500/50"
//               : statusUpdateMessage.type === "rejected"
//               ? "bg-red-900/30 text-red-300 border border-red-500/50"
//               : "bg-blue-900/30 text-blue-300 border border-blue-500/50"
//           }`}
//         >
//           {statusUpdateMessage.message}
//         </div>
//       )}

//       {/* Filter Controls */}
//       <div className="mb-8 flex flex-wrap gap-3 justify-center">
//         <button
//           onClick={() => setFilterStatus("All")}
//           className={getFilterButtonStyle("All")}
//         >
//           All ({requests.length})
//         </button>
//         <button
//           onClick={() => setFilterStatus("Pending")}
//           className={getFilterButtonStyle("Pending")}
//         >
//           Pending ({requests.filter((r) => r.status === "Pending").length})
//         </button>
//         <button
//           onClick={() => setFilterStatus("Approved")}
//           className={getFilterButtonStyle("Approved")}
//         >
//           Approved ({requests.filter((r) => r.status === "Approved").length})
//         </button>
//         <button
//           onClick={() => setFilterStatus("Rejected")}
//           className={getFilterButtonStyle("Rejected")}
//         >
//           Rejected ({requests.filter((r) => r.status === "Rejected").length})
//         </button>
//       </div>

//       <div className="overflow-x-auto bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/30 shadow-2xl shadow-blue-500/10">
//         <table className="min-w-full divide-y divide-gray-700/50">
//           <thead className="bg-gray-700/40">
//             <tr>
//               <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                 ID
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                 User
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                 Email
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                 Company
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                 Type
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                 Status
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                 Date
//               </th>
//               <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-700/30">
//             {filteredRequests.map((request) => (
//               <tr
//                 key={request.id}
//                 className="hover:bg-gray-700/30 transition-colors duration-200"
//               >
//                 <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-blue-400">
//                   #{request.id}
//                 </td>
//                 <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">
//                   {request.fullName}
//                 </td>
//                 <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">
//                   {request.email}
//                 </td>
//                 <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">
//                   {request.company}
//                 </td>
//                 <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">
//                   {request.type}
//                 </td>
//                 <td className="px-4 py-3 whitespace-nowrap">
//                   <span
//                     className={`px-2 py-1 rounded-full text-xs font-semibold ${
//                       request.status === "Approved"
//                         ? "bg-green-900/40 text-green-300 border border-green-600/50"
//                         : request.status === "Rejected"
//                         ? "bg-red-900/40 text-red-300 border border-red-600/50"
//                         : "bg-yellow-900/40 text-yellow-300 border border-yellow-600/50 animate-pulse"
//                     }`}
//                   >
//                     {request.status}
//                   </span>
//                 </td>
//                 <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-400">
//                   {request.date}
//                 </td>
//                 <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
//                   <div className="flex gap-2 flex-wrap">
//                     {request.status !== "Approved" && (
//                       <button
//                         onClick={
//                           () => handleStatusUpdate(request.id, "Approved") // Use request.id directly as string
//                         }
//                         className={getButtonStyle("approve")}
//                         title="Approve this request"
//                       >
//                         Approve
//                       </button>
//                     )}
//                     {request.status !== "Rejected" && (
//                       <button
//                         onClick={
//                           () => handleStatusUpdate(request.id, "Rejected") // Use request.id directly as string
//                         }
//                         className={getButtonStyle("reject")}
//                         title="Reject this request"
//                       >
//                         Reject
//                       </button>
//                     )}
//                     {(request.status === "Approved" ||
//                       request.status === "Rejected") && (
//                       <button
//                         onClick={
//                           () => handleStatusUpdate(request.id, "Pending") // Use request.id directly as string
//                         }
//                         className={getButtonStyle("pending")}
//                         title="Mark as pending"
//                       >
//                         Pending
//                       </button>
//                     )}
//                     <button
//                       onClick={() => setSelectedRequest(request)}
//                       className={getButtonStyle("details")}
//                       title="View request details"
//                     >
//                       Details
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         {filteredRequests.length === 0 && (
//           <div className="text-center py-12 text-gray-500">
//             <svg
//               className="mx-auto h-12 w-12 text-gray-600"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={1.5}
//                 d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//               />
//             </svg>
//             <h3 className="mt-4 text-lg font-medium text-gray-400">
//               No requests found
//             </h3>
//             <p className="mt-2 text-sm text-gray-500">
//               {filterStatus === "All"
//                 ? "No requests have been submitted yet."
//                 : `No requests with status "${filterStatus}" found.`}
//             </p>
//           </div>
//         )}
//       </div>

//       {/* Details Modal */}
//       {selectedRequest && (
//         <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
//           <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto border border-gray-700/50 shadow-2xl shadow-blue-500/20 animate-scaleIn">
//             <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-700/50">
//               <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
//                 Request Details
//               </h2>
//               <button
//                 onClick={() => setSelectedRequest(null)}
//                 className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-gray-700/50"
//                 title="Close details"
//               >
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-1">
//                 <h3 className="text-sm font-medium text-gray-400">
//                   Request Information
//                 </h3>
//                 <DetailItem label="ID" value={selectedRequest.id} />
//                 <DetailItem
//                   label="Status"
//                   value={
//                     <span
//                       className={`px-2 py-1 rounded-full text-xs font-semibold ${
//                         selectedRequest.status === "Approved"
//                           ? "bg-green-900/40 text-green-300"
//                           : selectedRequest.status === "Rejected"
//                           ? "bg-red-900/40 text-red-300"
//                           : "bg-yellow-900/40 text-yellow-300"
//                       }`}
//                     >
//                       {selectedRequest.status}
//                     </span>
//                   }
//                 />
//                 <DetailItem label="Date" value={selectedRequest.date} />
//                 <DetailItem label="Type" value={selectedRequest.type} />
//               </div>

//               <div className="space-y-1">
//                 <h3 className="text-sm font-medium text-gray-400">
//                   Personal Information
//                 </h3>
//                 <DetailItem
//                   label="Full Name"
//                   value={selectedRequest.fullName}
//                 />
//                 <DetailItem label="Email" value={selectedRequest.email} />
//                 <DetailItem label="Company" value={selectedRequest.company} />
//                 <DetailItem
//                   label="Job Title"
//                   value={selectedRequest.jobTitle || "N/A"}
//                 />
//                 <DetailItem
//                   label="Department"
//                   value={selectedRequest.department || "N/A"}
//                 />
//               </div>

//               <div className="space-y-1">
//                 <h3 className="text-sm font-medium text-gray-400">
//                   Contact Information
//                 </h3>
//                 <DetailItem
//                   label="Contact Name"
//                   value={selectedRequest.contactName || "N/A"}
//                 />
//                 <DetailItem
//                   label="Phone"
//                   value={selectedRequest.contactPhone || "N/A"}
//                 />
//                 <DetailItem
//                   label="Office Number"
//                   value={selectedRequest.officeNumber || "N/A"}
//                 />
//                 <DetailItem
//                   label="Website"
//                   value={selectedRequest.website || "N/A"}
//                 />
//               </div>

//               <div className="space-y-1">
//                 <h3 className="text-sm font-medium text-gray-400">
//                   Technical Information
//                 </h3>
//                 <DetailItem
//                   label="Operating System"
//                   value={selectedRequest.operatingSystem || "N/A"}
//                 />
//                 <DetailItem
//                   label="OS Architecture"
//                   value={selectedRequest.osDetails || "N/A"}
//                 />
//                 <DetailItem
//                   label="Total Agentless"
//                   value={selectedRequest.totalAgentless || "N/A"}
//                 />
//               </div>

//               <div className="md:col-span-2 space-y-1 pt-4 border-t border-gray-700/50">
//                 <h3 className="text-sm font-medium text-gray-400">Message</h3>
//                 <div className="mt-2 bg-gray-800/50 p-4 rounded-lg border border-gray-700/30">
//                   <p className="text-gray-300">
//                     {selectedRequest.message || "No message provided."}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-8 flex justify-end space-x-3 pt-4 border-t border-gray-700/50">
//               <button
//                 onClick={() => setSelectedRequest(null)}
//                 className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-gray-300 transition-colors border border-gray-600/50"
//               >
//                 Close
//               </button>
//               {selectedRequest.status !== "Approved" && (
//                 <button
//                   onClick={() => {
//                     handleStatusUpdate(selectedRequest.id, "Approved");
//                     setSelectedRequest(null);
//                   }}
//                   className={getButtonStyle("approve")}
//                 >
//                   Approve Request
//                 </button>
//               )}
//               {selectedRequest.status !== "Rejected" && (
//                 <button
//                   onClick={() => {
//                     handleStatusUpdate(selectedRequest.id, "Rejected");
//                     setSelectedRequest(null);
//                   }}
//                   className={getButtonStyle("reject")}
//                 >
//                   Reject Request
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Add some custom styles for animations */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }
//         @keyframes scaleIn {
//           from {
//             transform: scale(0.95);
//             opacity: 0;
//           }
//           to {
//             transform: scale(1);
//             opacity: 1;
//           }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-out;
//         }
//         .animate-scaleIn {
//           animation: scaleIn 0.3s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }

// // Helper component for detail items
// const DetailItem = ({
//   label,
//   value,
// }: {
//   label: string;
//   value: string | React.ReactNode;
// }) => (
//   <div className="flex justify-between py-2 border-b border-gray-700/20">
//     <span className="text-sm text-gray-500">{label}:</span>
//     <span className="text-sm text-gray-300 text-right">{value}</span>
//   </div>
// );
"use client";

import { useState, useEffect } from "react";
import { useRequests, type RequestData } from "@/contexts/RequestsContext";

export default function RequestsPage() {
  const { requests, updateRequestStatus } = useRequests();
  const [selectedRequest, setSelectedRequest] = useState<RequestData | null>(
    null
  );
  const [filterStatus, setFilterStatus] = useState<
    "All" | "Pending" | "Approved" | "Rejected"
  >("All");
  const [statusUpdateMessage, setStatusUpdateMessage] = useState<{
    type: string;
    message: string;
  } | null>(null);

  useEffect(() => {
    console.log("Requests updated:", requests);
  }, [requests]);

  const handleStatusUpdate = (
    id: string,
    status: "Approved" | "Rejected" | "Pending"
  ) => {
    if (!updateRequestStatus) return;
    const request = requests.find((req) => req.id === id);
    if (!request) return;

    updateRequestStatus(id, status);

    setStatusUpdateMessage({
      type: status.toLowerCase(),
      message: `Request ${status.toLowerCase()} successfully!`,
    });

    setTimeout(() => {
      setStatusUpdateMessage(null);
    }, 3000);
  };

  const filteredRequests =
    filterStatus === "All"
      ? requests
      : requests.filter((request) => request.status === filterStatus);

  // Button styles
  const getButtonStyle = (
    type: "approve" | "reject" | "pending" | "details"
  ) => {
    const base =
      "px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all shadow-md";
    switch (type) {
      case "approve":
        return `${base} bg-green-600 hover:bg-green-700 text-white`;
      case "reject":
        return `${base} bg-red-600 hover:bg-red-700 text-white`;
      case "pending":
        return `${base} bg-yellow-500 hover:bg-yellow-600 text-white`;
      case "details":
        return `${base} bg-blue-600 hover:bg-blue-700 text-white`;
      default:
        return base;
    }
  };

  const getFilterButtonStyle = (status: string) => {
    const isActive = filterStatus === status;
    const base =
      "px-3 py-1.5 rounded-md text-sm font-medium transition-all border";
    return isActive
      ? `${base} bg-blue-600 text-white border-blue-500`
      : `${base} bg-gray-700 text-gray-300 hover:bg-gray-600 border-gray-600`;
  };

  return (
    <div className="p-4 sm:p-6 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-white text-center">
        Security Requests Dashboard
      </h1>

      {/* Status message */}
      {statusUpdateMessage && (
        <div
          className={`mb-6 p-3 rounded-lg text-center font-semibold ${
            statusUpdateMessage.type === "approved"
              ? "bg-green-900/40 text-green-300"
              : statusUpdateMessage.type === "rejected"
              ? "bg-red-900/40 text-red-300"
              : "bg-yellow-900/40 text-yellow-300"
          }`}
        >
          {statusUpdateMessage.message}
        </div>
      )}

      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-2 justify-center">
        {["All", "Pending", "Approved", "Rejected"].map((status) => (
          <button
            key={status}
            onClick={() =>
              setFilterStatus(
                status as "All" | "Pending" | "Approved" | "Rejected"
              )
            }
            className={getFilterButtonStyle(status)}
          >
            {status} (
            {status === "All"
              ? requests.length
              : requests.filter((r) => r.status === status).length}
            )
          </button>
        ))}
      </div>

      {/* Requests list */}
      <div className="space-y-4">
        {filteredRequests.length > 0 ? (
          filteredRequests.map((request) => (
            <div
              key={request.id}
              className="bg-gray-800/60 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between border border-gray-700/40"
            >
              {/* Left: ID */}
              <div className="text-blue-400 font-semibold mb-2 sm:mb-0">
                #{request.id}
              </div>

              {/* Middle: Info */}
              <div className="flex-1 text-sm text-gray-300 space-y-1 mb-3 sm:mb-0 sm:mx-4">
                <div className="font-medium">{request.fullName}</div>
                <div className="text-gray-400">{request.email}</div>
                <div className="text-gray-400">{request.company}</div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Status:</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                      request.status === "Approved"
                        ? "bg-green-900/40 text-green-300"
                        : request.status === "Rejected"
                        ? "bg-red-900/40 text-red-300"
                        : "bg-yellow-900/40 text-yellow-300 animate-pulse"
                    }`}
                  >
                    {request.status}
                  </span>
                </div>
              </div>

              {/* Right: Actions */}
              <div className="flex gap-2 flex-wrap justify-end">
                {request.status !== "Approved" && (
                  <button
                    onClick={() => handleStatusUpdate(request.id, "Approved")}
                    className={getButtonStyle("approve")}
                  >
                    Approve
                  </button>
                )}
                {request.status !== "Rejected" && (
                  <button
                    onClick={() => handleStatusUpdate(request.id, "Rejected")}
                    className={getButtonStyle("reject")}
                  >
                    Reject
                  </button>
                )}
                {(request.status === "Approved" ||
                  request.status === "Rejected") && (
                  <button
                    onClick={() => handleStatusUpdate(request.id, "Pending")}
                    className={getButtonStyle("pending")}
                  >
                    Pending
                  </button>
                )}
                <button
                  onClick={() => setSelectedRequest(request)}
                  className={getButtonStyle("details")}
                >
                  Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-400 py-12">
            No requests found
          </div>
        )}
      </div>

      {/* Modal for details */}
      {selectedRequest && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-xl p-6 max-w-2xl w-full border border-gray-700/50 shadow-xl overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">Request Details</h2>
              <button
                onClick={() => setSelectedRequest(null)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2 text-sm text-gray-300">
              <DetailItem label="ID" value={selectedRequest.id} />
              <DetailItem label="Name" value={selectedRequest.fullName} />
              <DetailItem label="Email" value={selectedRequest.email} />
              <DetailItem label="Company" value={selectedRequest.company} />
              <DetailItem label="Type" value={selectedRequest.type} />
              <DetailItem label="Date" value={selectedRequest.date} />
              <DetailItem
                label="Message"
                value={selectedRequest.message || "No message"}
              />
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={() => setSelectedRequest(null)}
                className="px-3 py-1.5 rounded-md bg-gray-700 text-gray-300 hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Small helper
const DetailItem = ({
  label,
  value,
}: {
  label: string;
  value: string | React.ReactNode;
}) => (
  <div className="flex justify-between border-b border-gray-700/30 py-1">
    <span className="text-gray-400">{label}</span>
    <span className="text-gray-200">{value}</span>
  </div>
);
