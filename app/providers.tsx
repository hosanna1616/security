'use client'

import { ThemeProvider } from 'next-themes'
import { useEffect, useState } from 'react'
export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='dark' // Force dark mode as default
      enableSystem={false} // Disable system preference detection
      storageKey='secure-shield-theme' // Custom storage key
    >
      {children}
    </ThemeProvider>
  )
}
