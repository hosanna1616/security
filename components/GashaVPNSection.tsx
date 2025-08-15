'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function GashaVPNSection() {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  const paragraphOptions = [
    `Gasha VPN is a secure tunneling solution designed to safeguard your digital footprint. It encrypts your internet traffic, masks your IP address, and ensures complete anonymity while browsing. Whether you're accessing public Wi-Fi or working remotely, Gasha VPN provides a fortified shield against cyber threats and surveillance.`,

    `Our advanced protocols protect you from data interception, ISP tracking, and geo-restrictions. With Gasha VPN, you can stream content, access restricted websites, and communicate freely—without compromising your privacy. It's the ultimate tool for digital freedom in an increasingly monitored world.`,

    `Powered by high-speed servers and military-grade encryption, Gasha VPN delivers a seamless experience across all devices. Enjoy lightning-fast connections, zero-logging policies, and intuitive controls that make security effortless. Whether you're a casual user or a cybersecurity professional, Gasha VPN adapts to your needs with precision and reliability.`,
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.vpn-fade', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.vpn-fade',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleNextText = () => {
    gsap.to(textRef.current, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        setCurrentTextIndex((prev) => (prev + 1) % paragraphOptions.length)
        gsap.to(textRef.current, { opacity: 1, duration: 0.3 })
      },
    })
  }

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden mt-24"
    >
      {/*  Content Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center px-6 py-16">
        <div className='w-full max-w-6xl vpn-fade p-8 rounded-xl shadow-xl flex flex-col lg:flex-row items-center lg:items-start gap-10 bg-white/10 backdrop-blur-md'>
          {/* Image Section (Left) with floating animation */}
          <div className="w-full lg:w-1/2  animate-[float_4s_ease-in-out_infinite]">
            <Image
              src="/image/GashVPN.png"
              alt="Gasha VPN"
              width={600}
              height={400}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section (Right) */}
          <div className="w-full lg:w-1/2 text-white space-y-6">
            {/* 🔷 Mixed Color Heading */}
            <h2 className="text-4xl font-bold transition duration-300">
              <span className="text-white">Gasha </span>
              <span className="text-[#00E0FF] hover:text-[#38BDF8]">VPN</span>
            </h2>

            {/*  Paragraph with fade transition */}
            <p
              ref={textRef}
              className="text-lg text-gray-300 leading-relaxed transition-opacity duration-500"
            >
              {paragraphOptions[currentTextIndex]}
            </p>

            {/*  Button Row */}
            <div className="pt-4 flex flex-wrap gap-4">
              {/* Arrow Button */}
              <button
                onClick={handleNextText}
                className="text-white border border-white rounded-full px-4 py-2 hover:bg-gradient-to-r hover:from-[#00E0FF] hover:to-gray-800 hover:text-black transition duration-300"
              >
                →
              </button>

              {/* Download Button */}
              <button className="text-white border border-white rounded-md px-6 py-3 text-sm font-semibold shadow-sm hover:bg-gradient-to-r hover:from-[#00E0FF] hover:to-gray-800 hover:text-black transition duration-300">
                Download
              </button>

              {/* Send Request Button */}
              <button className="text-white border border-white rounded-md px-6 py-3 text-sm font-semibold shadow-sm hover:bg-gradient-to-r hover:from-[#00E0FF] hover:to-gray-800 hover:text-black transition duration-300">
                Send Request
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*  Custom Animation Keyframes */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
}

export default GashaVPNSection
