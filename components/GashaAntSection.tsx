'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import GashaAntivirus from '../public/image/GashAntivirus.png'
import Link from 'next/link'

function GashaAntSection() {
  const sectionRef = useRef(null)

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

  return (
    <div
      ref={sectionRef}
      className='relative w-full min-h-screen overflow-hidden '
    >
      {/* Content Overlay */}
      <div className='absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center px-6 py-16 '>
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
                evolving cyber threats. With cutting-edge technology, real-time
                protection, and advanced threat detection, it ensures your data,
                privacy, and devices stay secure.
              </p>

              <div className='mt-8 flex gap-4 fade-in'>
                <button className='bg-primary text-white px-6 py-2 rounded hover:bg-secondary transition'>
                  Download
                </button>
                <button className='border border-primary text-primary px-6 py-2 rounded hover:bg-secondary hover:text-white transition'>
                  {/*<Link
                    href="/Request"
                    className="text-blue-400 underline hover:text-blue-200 transition"
                  >
                    send request
                  </Link> */}
                  Send Request
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default GashaAntSection
