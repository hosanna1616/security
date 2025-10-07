// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { useLanguage } from "@/contexts/LanguageContext";

// // components/AdminNavbar.tsx
// export default function AdminNavbar() {
//   const router = useRouter();
//   const [avatar, setAvatar] = useState<string | null>(null);
//   const [fullName, setFullName] = useState<string>("Admin");
//   const { t } = useLanguage();

//   useEffect(() => {
//     try {
//       const raw =
//         typeof window !== "undefined"
//           ? localStorage.getItem("admin-profile")
//           : null;
//       if (raw) {
//         const parsed = JSON.parse(raw);
//         if (parsed?.avatar) setAvatar(parsed.avatar as string);
//         if (parsed?.fullName) setFullName(parsed.fullName as string);
//       }
//     } catch {}
//   }, []);

//   const handleLogout = () => {
//     // Optional: clear session, cookies, or localStorage here
//     // Example: localStorage.removeItem("authToken");

//     router.push("/");
//   };

//   return (
//     <header className="w-full bg-gray-900 border-b border-gray-700 px-6 py-3 flex justify-between items-center">
//       {/* Logo / Title */}
//       <Link href="/">
//         <Image src="/image/logo.png" alt="Logo" width={55} height={55} />
//       </Link>

//       {/* Profile / Settings / Logout */}
//       <div className="flex items-center gap-4">
//         <Link
//           href="/Admin/settings"
//           className="bg-secondary px-5 mx-2 py-1 rounded hover:bg-gray-600"
//         >
//           {t("admin_settings")}
//         </Link>

//         <Link
//           href="/Admin/settings"
//           className="w-10 h-10 rounded-full bg-primary flex items-center justify-center overflow-hidden"
//           title={fullName}
//         >
//           {avatar ? (
//             // Use native img to support data URLs without Next config
//             <img
//               src={avatar}
//               alt="Profile"
//               className="w-full h-full object-cover"
//             />
//           ) : (
//             <span className="font-bold">
//               {fullName?.charAt(0)?.toUpperCase() || "A"}
//             </span>
//           )}
//         </Link>

//         <button
//           onClick={handleLogout}
//           className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
//         >
//           {t("admin_logout")}
//         </button>
//       </div>
//     </header>
//   );
// }
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AdminNavbar() {
  const router = useRouter();
  const [avatar, setAvatar] = useState<string | null>(null);
  const [fullName, setFullName] = useState<string>("Admin");
  const { t } = useLanguage();

  useEffect(() => {
    try {
      const raw =
        typeof window !== "undefined"
          ? localStorage.getItem("admin-profile")
          : null;
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed?.avatar) setAvatar(parsed.avatar as string);
        if (parsed?.fullName) setFullName(parsed.fullName as string);
      }
    } catch {}
  }, []);

  const handleLogout = () => {
    // Optional: clear session, cookies, or localStorage here
    // Example: localStorage.removeItem("authToken");

    router.push("/");
  };

  return (
    <header className="w-full bg-gray-900 border-b border-gray-700 px-6 py-3 flex justify-between items-center">
      {/* Logo / Title */}
      <Link href="/">
        <Image src="/image/logo.png" alt="Logo" width={55} height={55} />
      </Link>

      {/* Profile / Settings / Logout */}
      <div className="flex items-center gap-4">
        <Link
          href="/Admin/settings"
          className="bg-secondary px-5 mx-2 py-1 rounded hover:bg-gray-600"
        >
          {t("admin_settings")}
        </Link>

        <Link
          href="/Admin/settings"
          className="w-10 h-10 rounded-full bg-primary flex items-center justify-center overflow-hidden"
          title={fullName}
        >
          {avatar && !avatar.startsWith("data:") ? (
            <Image
              src={avatar}
              alt="Profile"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src="/image/avatar-placeholder.png"
              alt="Profile"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          )}
        </Link>

        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
        >
          {t("admin_logout")}
        </button>
      </div>
    </header>
  );
}
