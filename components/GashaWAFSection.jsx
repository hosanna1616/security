'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import GashaWaf from '../public/image/GashWAF.png'
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
      {/* 🔹 Content Overlay */}
      <div className='absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center px-6 py-16'>
        <div className='w-full max-w-6xl waf-fade bg-black/60 backdrop-blur-md p-8 rounded-xl shadow-xl flex flex-col lg:flex-row items-center gap-10'>
          {/* Image Section */}
          <div className='w-full lg:w-1/3 animate-[float_4s_ease-in-out_infinite]'>
            <Image
              src='/image/GashWAF.png'
              alt='Gasha WAF'
              width={300}
              height={300}
              className='w-full rounded-lg shadow-lg'
            />
          </div>

          {/* Text Section */}
          <div className='w-full lg:w-1/2 text-white space-y-6'>
            <h2 className='text-4xl font-bold text-primary transition duration-300 hover:text-[#38BDF8]'>
              Gasha WAF{' '}
            </h2>
            <p className='text-lg text-gray-300 leading-relaxed transition-opacity duration-500'>
              {paragraphOptions[currentTextIndex]}
            </p>
            <button className='rounded-md px-6 py-3 text-sm font-semibold shadow-sm transition-colors duration-200 bg-primary text-white hover:bg-secondary'>
              send Request
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GashaWAFSection
