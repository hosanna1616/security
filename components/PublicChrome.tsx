'use client'

import { usePathname } from 'next/navigation'
import Footer from './Footer '
import VideoBackground from './VideoBackground'
import Navbar from './Navbar'

export default function PublicChrome({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isAdmin = pathname?.startsWith('/Admin') // matches your uppercase route

  // Only render public chrome on non-admin pages
  if (isAdmin) return <>{children}</>

  return (
    <>
      <VideoBackground />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
