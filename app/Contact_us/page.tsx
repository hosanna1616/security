'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Textarea } from '@headlessui/react'
import GlitchText from '../../components/GlitchText'

gsap.registerPlugin(ScrollTrigger)

const ContactSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    if (containerRef.current && contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }
  }, [])

  const handleSend = async () => {
    if (!email.trim() || !message.trim()) {
      setShowError(true)
      alert('Please enter both email and message before sending.')
      return
    }

    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      })

      if (res.ok) {
        alert('Message sent successfully!')
        setEmail('')
        setMessage('')
        setShowError(false)
      } else {
        alert('Failed to send message')
      }
    } catch (error) {
      console.error(error)
      alert('Something went wrong')
    }
  }

  return (
    <div
      ref={containerRef}
      className='relative w-full py-20 flex justify-center items-center overflow-hidden mt-23'
    >
      <div
        className='relative z-10 max-w-3xl w-full px-8 py-12 bg-black/80 backdrop-blur-md rounded-xl border border-primary group transition-all duration-500'
        style={{ boxShadow: '0 0 40px rgba(0, 224, 255, 0.4)' }}
      >
        <div ref={contentRef} className='space-y-6 text-white text-center'>
          <GlitchText
            speed={1}
            enableShadows={true}
            enableOnHover={true}
            className='custom-class'
          >
            We’d love to hear from you
          </GlitchText>

          <p className='text-lg text-gray-300'>
            Reach out to us and let’s explore how we can help secure your
            digital future.
          </p>

          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='px-8 py-8 w-full rounded-lg bg-gray-950 border text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary border-primary'
            placeholder='Your message...'
          />

          <div className='flex justify-center items-center gap-4 pt-4'>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Your email'
              required
              className={`px-4 py-2 w-64 rounded-lg bg-gray-950 border ${
                showError ? 'border-red-500' : 'border-primary'
              } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary`}
            />
            <button
              onClick={handleSend}
              className='px-5 py-2 bg-primary hover:bg-secondary text-black font-semibold rounded-lg transition duration-300 hover:shadow-[0_0_10px_#00E0FF]'
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
