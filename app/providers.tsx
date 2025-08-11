'use client'

import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='dark' // Force dark mode as default
      enableSystem={false} // Disable system preference detection
    >
      {children}
    </ThemeProvider>
  )
}
