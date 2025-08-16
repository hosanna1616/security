"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import nisir_dark from "../../public/image/nisir_dark.png";
import Nisir from "../../public/image/Nisir.png";
import Request from "@/app/GashAnti_Request.tsx/page";

gsap.registerPlugin(ScrollTrigger);

function NisirSIEMSection() {
  const sectionRef = useRef(null);

  const paragraphOptions = [
    `Nisir SIEM is a next-generation security information and event management platform designed to detect, analyze, and respond to threats in real time. It aggregates logs, monitors network activity, and provides actionable insights to security teams.`,

    `With advanced correlation rules, machine learning, and customizable dashboards, Nisir SIEM empowers organizations to stay ahead of evolving cyber threats. It integrates seamlessly with existing infrastructure and scales effortlessly across environments.`,

    `Built with a focus on visibility and control, Nisir SIEM offers intuitive alerting, forensic analysis, and compliance reporting. Whether you're defending a small business or a national enterprise, Nisir SIEM adapts to your security needs with precision.`,
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".siem-fade", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".siem-fade",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden mt-34"
    >
      {/* 🔹 Content Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-6xl siem-fade p-6 rounded-xl shadow-xl flex flex-col lg:flex-row items-center gap-8 bg-white/10 backdrop-blur-md">
          {/* Image Section */}
          <div className="w-full lg:w-1/3 flex justify-center items-center sm:hidden lg:block">
            <div className="max-w-md w-full rotate-animation sm:hidden lg:block">
              <Image
                src={Nisir}
                alt="Nisir SIEM"
                width={500}
                height={300}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/*  Text Section */}
          <div className="w-full lg:w-1/2 text-white space-y-4">
            {/* 🔹 Heading with larger image in front of SIEM */}
            <h2 className="text-4xl font-bold text-white flex items-center gap-4">
              <Image
                src={nisir_dark}
                alt="SIEM Icon"
                className="w-[2em] h-[em] object-contain"
                style={{ verticalAlign: "middle" }}
              />
              SIEM
            </h2>

            <button
              onClick={Request}
              className="rounded-md px-6 py-3 text-sm font-semibold shadow-sm transition-colors duration-200 bg-primary text-white hover:bg-secondary"
            >
              send Request
            </button>

            {/*  Icon + Paragraphs */}
            <div className="space-y-4 pt-4">
              {paragraphOptions.map((text, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-[#00E0FF] flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"></path>
                  </svg>
                  <p className="text-base text-gray-300 leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*  Custom Animation Keyframes */}
      <style jsx>{`
        @keyframes rotateLR {
          0% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(-5deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        .rotate-animation {
          animation: rotateLR 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default NisirSIEMSection;
