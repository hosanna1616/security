'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import GashaAntivirus from '../../public/image/GashAntivirus.png'
import GashVPN from '../../public/image/GashVPN.png'
import GashaWAF from '../../public/image/GashWAF.png'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Gasha() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.fade-in',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.3, ease: 'power3.out' }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

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

  //   Gash WAF Section

  const paragraphOptionsGASHWAF = [
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
    <div>
      <div
        className='relative w-full h-screen overflow-hidden'
        ref={sectionRef}
      >
        {/* 🔹 Overlay Content */}
        <div className='absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center px-6 md:px-20 lg:px-32'>
          <section className='bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl w-full max-w-6xl text-white'>
            <div className='flex flex-col lg:flex-row items-center gap-12'>
              {/* Image Section */}
              <div className='w-full lg:w-1/2  fade-in'>
                <Image
                  src={GashaAntivirus}
                  alt='Gasha Antivirus'
                  className='w-full rounded-lg shadow-lg'
                />
              </div>

              {/* Text Content */}
              <div className='w-full lg:w-1/2 fade-in'>
                <h2 className='text-3xl font-bold mb-4 text-primary transition duration-300 hover:text-[#38BDF8]'>
                  Gasha Antivirus
                </h2>
                <p className='mb-6 text-lg leading-relaxed text-gray-100'>
                  A robust and intelligent defense system designed to safeguard
                  your digital world from viruses, malware, ransomware, and
                  evolving cyber threats. With cutting-edge technology,
                  real-time protection, and advanced threat detection, it
                  ensures your data, privacy, and devices stay secure.
                </p>

                <ul className='list-disc list-inside space-y-2 text-md text-gray-200'>
                  <li>
                    <strong>Real-Time Protection:</strong> Keeps desktops,
                    laptops, downloads, and external devices safe.
                  </li>
                  <li>
                    <strong>AI-Powered Detection:</strong> Protects against
                    known and unknown threats using artificial intelligence.
                  </li>
                  <li>
                    <strong>Up-to-Date Database:</strong> Regular virus
                    definition updates to counter emerging threats.
                  </li>
                  <li>
                    <strong>Tamper Protection:</strong> Secures your Windows
                    registry from unauthorized changes.
                  </li>
                </ul>

                <div className='mt-8 flex gap-4 fade-in'>
                  <button className='bg-primary text-white px-6 py-2 rounded hover:bg-secondary transition'>
                    Download
                  </button>
                  <button className='border border-primary text-primary px-6 py-2 rounded hover:bg-secondary hover:text-white transition'>
                    Send Request
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div
        ref={sectionRef}
        className='relative w-full min-h-screen overflow-hidden mt-24'
      >
        {/* 🔹 Content Overlay */}
        <div className='absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center px-6 py-16'>
          <div className='w-full max-w-6xl vpn-fade p-8 rounded-xl shadow-xl flex flex-col lg:flex-row items-center lg:items-start gap-10 bg-black/60 backdrop-blur-md'>
            {/* 🖼️ Image Section (Left) with floating animation */}
            <div className='w-full lg:w-1/2  animate-[float_4s_ease-in-out_infinite]'>
              <Image
                src={GashVPN}
                alt='Gasha VPN'
                width={600}
                height={400}
                className='w-full rounded-lg shadow-lg'
              />
            </div>

            {/* 📄 Text Section (Right) */}
            <div className='w-full lg:w-1/2 text-white space-y-6'>
              {/* 🔷 Mixed Color Heading */}
              <h2 className='text-4xl font-bold transition duration-300'>
                <span className='text-white'>Gasha </span>
                <span className='text-[#00E0FF] hover:text-[#38BDF8]'>VPN</span>
              </h2>

              {/* 🔄 Paragraph with fade transition */}
              <p
                ref={textRef}
                className='text-lg text-gray-300 leading-relaxed transition-opacity duration-500'
              >
                {paragraphOptions[currentTextIndex]}
              </p>

              {/* 🔘 Button Row */}
              <div className='pt-4 flex flex-wrap gap-4'>
                {/* ➡ Arrow Button */}
                <button
                  onClick={handleNextText}
                  className='text-white border border-white rounded-full px-4 py-2 hover:bg-gradient-to-r hover:from-[#00E0FF] hover:to-gray-800 hover:text-black transition duration-300'
                >
                  →
                </button>

                {/* 📥 Download Button */}
                <button className='text-white border border-white rounded-md px-6 py-3 text-sm font-semibold shadow-sm hover:bg-gradient-to-r hover:from-[#00E0FF] hover:to-gray-800 hover:text-black transition duration-300'>
                  Download
                </button>

                {/* 📤 Send Request Button */}
                <button className='text-white border border-white rounded-md px-6 py-3 text-sm font-semibold shadow-sm hover:bg-gradient-to-r hover:from-[#00E0FF] hover:to-gray-800 hover:text-black transition duration-300'>
                  Send Request
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 🔧 Custom Animation Keyframes */}
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

      {/* Gash WAF section */}

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
                src={GashaWAF}
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
                {paragraphOptionsGASHWAF[currentTextIndex]}
              </p>
              <button className='rounded-md px-6 py-3 text-sm font-semibold shadow-sm transition-colors duration-200 bg-primary text-white hover:bg-secondary'>
                send Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gasha
