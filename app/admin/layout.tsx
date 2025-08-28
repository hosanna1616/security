// app/Admin/layout.tsx
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '../globals.css'
import { Providers } from '../providers'
import ThemeInitializer from '@/components/ThemeInitializer'
import AdminNavbar from '@/components/AdminNavbar'
import AdminFooter from '@/components/AdminFooter'
import AdminSidebar from '@/components/AdminSidebar'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Admin – Secure Systems',
  description: 'Admin dashboard for Secure Systems',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <ThemeInitializer />
        <Providers>
          <AdminNavbar />
          <div className='flex'>
            {/* Sidebar */}
            <AdminSidebar />

            {/* Main content */}
            <main className='flex-1 p-6'>{children}</main>
          </div>
          <AdminFooter />
        </Providers>
      </body>
    </html>
  )
}
