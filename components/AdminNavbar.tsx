'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

// components/AdminNavbar.tsx
export default function AdminNavbar() {
  const router = useRouter();

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
          Settings
        </Link>

        <Link
          href="/Admin/settings"
          className="w-10 h-10 rounded-full bg-primary flex items-center justify-center"
        >
          <span className="font-bold">A</span>
        </Link>

        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
