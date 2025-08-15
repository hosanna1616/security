'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import EnyumaIAM from '../public/image/EnyumaIAM.png'

gsap.registerPlugin(ScrollTrigger)

function EnyumaSection() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)

  const paragraphOptions = [
    `Enyuma is a powerful threat intelligence engine designed to correlate external threat feeds with internal activity.`,
    `It enhances visibility into emerging risks, enabling proactive defense strategies and faster incident response.`,
    `With real-time enrichment and contextual analysis, Enyuma transforms raw data into actionable intelligence for security teams.`,
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🔹 Paragraph fade-in
      gsap.from('.enyuma-fade', {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.enyuma-fade',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        stagger: 0.2,
      })

      // 🔄 Image rotation
      gsap.to(imageRef.current, {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: 'linear',
        transformOrigin: '50% 50%',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden mt-24"
    >
      {/* 🔹 Content Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center px-6 py-10">
        <div className='w-full max-w-6xl p-6 rounded-xl shadow-xl flex flex-col lg:flex-row items-center gap-8 bg-white/10 backdrop-blur-md'>
          {/*  Text Section (left) */}
          <div className="w-full lg:w-1/2 text-white space-y-4">
            {/* 🔹 Gradient Heading */}
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-[#00E0FF] via-white to-[#00E0FF] text-transparent bg-clip-text">
              Enyuma IAM
            </h2>

            {/* Styled Button */}
            <div className="mt-4">
              <button className="text-white border border-white rounded-md px-6 py-3 text-sm font-semibold shadow-sm hover:bg-gradient-to-r hover:from-[#00E0FF] hover:to-gray-800 hover:text-white transition duration-300">
                show product
              </button>
            </div>

            {/*  Paragraphs */}
            <div className="space-y-4 pt-4">
              {paragraphOptions.map((text, index) => (
                <div
                  key={index}
                  className="enyuma-fade flex items-start gap-3 text-base text-gray-300 leading-relaxed"
                >
                  <svg
                    className="w-6 h-6 text-[#00E0FF] flex-shrink-0"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"
                    />
                  </svg>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/*  Image Section (right) */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="max-w-md w-full">
              <Image
                ref={imageRef}
                src={EnyumaIAM}
                alt="Enyuma"
                width={500}
                height={300}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/*  Custom Styles */}
      <style jsx>{`
        .enyuma-fade {
          will-change: transform, opacity;
        }
      `}</style>
    </div>
  );
}

export default EnyumaSection
