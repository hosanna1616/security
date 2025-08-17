'use client'
import { useTheme } from 'next-themes'

export default function VideoBackground() {
  const { theme } = useTheme()

  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>
      <video
        autoPlay
        loop
        muted
        playsInline
        key={theme}
        className='w-full h-full object-cover'
      >
        <source
          src={
            theme === 'dark'
              ? '/videos/security-dark.webm'
              : '/videos/security-light.webm'
          }
          type='video/webm'
        />
      </video>
      <div
        className={`absolute inset-0 ${
          theme === 'dark' ? 'bg-black/50' : 'bg-black/50'
        }`}
      ></div>
    </div>
  )
}
