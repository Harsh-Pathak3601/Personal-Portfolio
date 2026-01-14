'use client'

import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow, FaFilePdf } from 'react-icons/fa'
import Typewriter from 'typewriter-effect'

const Hero = () => {
  return (
    <section id='Home' className="relative min-h-screen overflow-hidden pt-32">
      {/* Spotlights */}
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight
        className="top-10 left-full h-[80vh] w-[50vw]"
        fill="purple"
      />
      <Spotlight
        className="top-28 left-80 h-[80vh] w-[50vw]"
        fill="blue"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex min-h-[75vh] flex-col md:flex-row items-center justify-between gap-16">

          {/* LEFT — TEXT */}
          <div className="flex-1">

            {/* CENTERED BLOCK (this is the magic) */}
            <div className="flex justify-center">
              <div className="max-w-xl">

                {/* TITLE — left aligned */}
                <TextGenerateEffect
                  className="
                    text-center
                    text-4xl md:text-5xl lg:text-6xl
                    leading-tight
                    mb-6
                  "
                  words="Building Creativity with Scalable Technology" />

                {/* H2 — PERFECT, UNTOUCHED */}
                <h2 className="mt-2 h-[28px] sm:h-[32px] text-sm sm:text-xl font-kaushan flex items-center justify-center mb-4 whitespace-nowrap">
                  Hi👋, I'm Harsh — A
                  <span className="text-purple font-bold pl-2">
                    <Typewriter
                      options={{
                        strings: [
                          'Frontend Developer',
                          'Backend Developer',
                          'Web Developer',
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 70,
                        deleteSpeed: 40,
                      }}
                    />
                  </span>
                </h2>
                <p className="text-center md:text-center text-white-100/70 text-base md:text-lg mb-8 max-w-lg leading-relaxed">
                  Specializing in building high-performance web applications that 
                  combine robust backend logic with seamless user interfaces. 
                  Turning complex ideas into scalable reality.
                </p>
                {/* BUTTON — centered like picture 2 */}
             <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
  
  <a href="#about" className="flex justify-center sm:w-[200px]">
    <MagicButton
      title="Show my work"
      icon={<FaLocationArrow />}
      position="right"
    />
  </a>

  <a
    href="YOUR_RESUME_LINK_HERE"
    target="_blank"
    rel="noopener noreferrer"
    className="flex justify-center sm:w-[200px]"
  >
    <MagicButton
      title="View Resume"
      icon={<FaFilePdf className="text-lg" />}
      position="left"
      otherClasses="border border-white-100/10 !bg-black-200"
    />
  </a>

</div>


              </div>
            </div>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-2xl  " />
              <img
                src="/harsh.jpeg"
                alt="Harsh"
                className="
                  relative
                  w-[400px] h-[400px]
                  md:w-[400px] md:h-[400px]
                  rounded-full
                 border border-sky-400/30 shadow-[0_0_25px_rgba(56,189,248,0.35)
                  object-fill
                  md:left-[-50px]

                "
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero