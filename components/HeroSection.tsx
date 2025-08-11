'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export default function HeroSection() {
  const { theme } = useTheme()
  const controls = useAnimation()
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Video sources for light/dark modes
  const videoSources = {
    dark: '/videos/security-dark.mp4',
    light: '/videos/security-light.mp4',
  }

  // Image animation sequence
  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controls.start({ opacity: 0.3, transition: { duration: 3 } })
        await controls.start({ opacity: 1, transition: { duration: 3 } })
      }
    }
    sequence()
  }, [controls])

  // Detect theme change
  useEffect(() => {
    setIsDarkMode(theme === 'dark')
  }, [theme])

  return (
    <div
      className={`${
        theme === 'dark' ? 'dark-theme-styles' : 'light-theme-styles'
      }`}
    >
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 '>
        {/* Video Background - Changes based on theme */}
        <div className='absolute inset-0 z-0'>
          <video
            autoPlay
            loop
            muted
            playsInline
            className='w-full h-full object-cover'
            key={isDarkMode ? 'dark' : 'light'} // Force re-render on theme change
          >
            <source
              src={isDarkMode ? videoSources.dark : videoSources.light}
              type='video/mp4'
            />
          </video>
          <div
            className={`absolute inset-0 ${
              isDarkMode ? 'bg-black/50' : 'bg-white/10'
            }`}
          ></div>
        </div>

        <div className='relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          {/* Text Content */}
          <div className='text-center lg:text-left'>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              <span className='block'>Secure Your</span>
              <span className='block'>Systems with</span>
              <span
                className={`block ${
                  isDarkMode ? 'text-shadow-cyan-400' : 'text-shadow-cyan-600'
                }`}
              >
                Advanced Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className={`mt-6 text-lg sm:text-xl ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              } max-w-2xl mx-auto lg:mx-0`}
            >
              Cutting-edge security systems tailored to protect your home and
              business with the latest technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className='mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'
            >
              <button
                className={`rounded-md px-6 py-3 text-sm font-semibold shadow-sm transition-colors duration-200 ${
                  isDarkMode
                    ? 'bg-shadow-cyan-600 text-white hover:bg-shadow-cyan-500'
                    : 'bg-shadow-cyan-600 text-white hover:bg-shadow-cyan-500'
                }`}
              >
                Get Protected Today
              </button>
            </motion.div>
          </div>

          {/* Animated Image */}
          <motion.div animate={controls} className='hidden lg:block relative'>
            <img
              src={
                isDarkMode
                  ? '/images/security-dark.png'
                  : '/images/security-light.png'
              }
              alt='Security System'
              className='w-full h-auto rounded-lg shadow-2xl'
            />
            <div
              className={`absolute inset-0 rounded-lg ${
                isDarkMode ? 'bg-shadow-cyan-900/20' : 'bg-shadow-cyan-200/20'
              }`}
            ></div>
          </motion.div>
        </div>

        {/* Scrolling indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className='absolute bottom-8 left-1/2 -translate-x-1/2 z-10'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className={`w-8 h-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 14l-7 7m0 0l-7-7m7 7V3'
            />
          </svg>
        </motion.div>
      </section>
    </div>
  )
}
