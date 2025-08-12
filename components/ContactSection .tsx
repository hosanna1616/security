"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (containerRef.current && contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const ShieldIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-[#00E0FF] transition duration-300 group-hover:drop-shadow-[0_0_6px_#00E0FF]"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z" />
    </svg>
  );

  const handleSend = () => {
    if (!email.trim()) {
      setShowError(true);
      alert("Please enter your email before sending.");
      return;
    }

    console.log("Sending email:", email);
    setEmail("");
    setShowError(false);
    // Integrate with backend or email service here
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full py-20 flex justify-center items-center bg-[#0A0F2C] overflow-hidden"
    >
      {/* 🔹 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/security-dark.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Glowing Border Container */}
      <div className="relative z-10 max-w-3xl w-full px-8 py-12 bg-[#0A0F2C]/80 backdrop-blur-md rounded-xl shadow-xl border border-[#00E0FF] group transition-all duration-500 hover:shadow-[0_0_20px_#00E0FF]">
        <div ref={contentRef} className="space-y-6 text-white text-center">
          <h2 className="text-3xl font-bold flex justify-center items-center gap-3 group">
            
            We’d love to hear from you
          </h2>

          <p className="text-lg text-gray-300 flex justify-center items-start gap-3 group">
         
            Reach out to us and let’s explore how we can help secure your
            digital future.
          </p>

          {/* 📩 Email Input + Send Button */}
          <div className="flex justify-center items-center gap-4 pt-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className={`px-4 py-2 w-64 rounded-lg bg-[#0A0F2C] border ${
                showError ? "border-red-500" : "border-[#00E0FF]"
              } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00E0FF]`}
            />
            <button
              onClick={handleSend}
              className="px-5 py-2 bg-[#00E0FF] hover:bg-[#00b8cc] text-black font-semibold rounded-lg transition"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
