'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import GashaWaf from '../public/image/GashWAF.png'
import Link from 'next/link'
gsap.registerPlugin(ScrollTrigger)

function GashaWAFSection() {
  const sectionRef = useRef(null)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  const paragraphOptions = [
    `Gasha Web Application Firewall (WAF) is a security solution that protects web applications by filtering and monitoring HTTP traffic. It acts as a shield between your web server and the internet.`,
    `It defends against common attacks such as cross-site scripting (XSS), SQL injection, and other OWASP Top 10 threats. Gasha WAF intelligently blocks malicious requests before they reach your application.`,
    `With real-time monitoring and adaptive threat detection, Gasha WAF ensures your web services remain secure, reliable, and compliant with modern cybersecurity standards.`,
  ]

  useEffect(() => {
    // GSAP scroll animation
    const ctx = gsap.context(() => {
      gsap.from('.waf-fade', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.waf-fade',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    // Paragraph rotation every 3 seconds
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % paragraphOptions.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      ref={sectionRef}
      className='relative w-full min-h-screen overflow-hidden'
    >
      {/* Content Overlay */}
      <div className='absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center px-4 sm:px-6 py-12 md:py-16 lg:py-20'>
        <div className='bg-white/10 backdrop-blur-md rounded-xl p-6 sm:p-8 lg:p-10 shadow-xl w-full max-w-6xl mx-4 text-white sm:my-5 md:my-5'>
          <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12'>
            {/* Image Section - Updated to match other components */}
            <div className='w-full lg:w-1/2 fade-in'>
              <div className='relative aspect-video lg:aspect-square lg:h-[350px] rounded-lg overflow-hidden shadow-lg'>
                <Image
                  src={GashaWaf}
                  alt='Gasha WAF'
                  fill
                  className='object-contain'
                  sizes='(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 400px'
                  priority
                />
              </div>
            </div>

            {/* Text Section - Updated for consistency */}
            <div className='w-full lg:w-1/2 space-y-4 sm:space-y-6 waf-fade'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-primary hover:text-[#38BDF8] transition-colors duration-300'>
                Gasha WAF
              </h2>
              <p className='text-base sm:text-lg text-gray-300 leading-relaxed transition-opacity duration-500 min-h-[120px] sm:min-h-[150px]'>
                {paragraphOptions[currentTextIndex]}
              </p>
              <div className='mt-4 sm:mt-6'>
                <Link
                  href='/Gasha'
                  className='text-white border border-white rounded-md px-3 py-1.5 sm:px-4 sm:py-2 hover:bg-gradient-to-r hover:from-[#00E0FF] hover:to-gray-800 hover:text-black transition-all duration-300 text-sm sm:text-base inline-block'
                >
                  View Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GashaWAFSection
