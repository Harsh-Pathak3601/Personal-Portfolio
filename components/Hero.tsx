'use client'

import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow, FaFilePdf } from 'react-icons/fa'
import Typewriter from 'typewriter-effect'

const Hero = () => {
  return (
    /* 1. FULL-WIDTH SHELL: 
       The 'w-full' and 'bg-mesh-purple' now fill the whole screen 
       because the parent container in page.tsx is no longer restricted.
    */
    <section id='Home' className="relative w-full min-h-screen overflow-hidden pt-32 bg-mesh-purple">
      
      {/* Spotlights - Integrated with Obsidian Purple Theme */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="hsl(var(--primary))"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="hsl(var(--purple-glow))"
        />
      </div>

     <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex min-h-[75vh] flex-col md:flex-row items-center justify-between gap-16">

      
          <div className="flex-1">
            <div className="flex justify-center">
              <div className="max-w-xl">

                
                <TextGenerateEffect
                  className="
                    text-center
                    text-4xl md:text-5xl lg:text-6xl
                    leading-tight
                    mb-6
                  "
                  words="Building Creativity with Scalable Technology" />

                
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
                <p className="text-center text-white/70 text-sm sm:text-base md:text-lg mb-8 max-w-xl leading-relaxed">
                 Building scalable, high-performance web applications with clean backend logic and intuitive UIs.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
  
  <a href="#projects" className="flex justify-center sm:w-[200px]">
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

          {/* RIGHT — IMAGE with Dynamic Obsidian Glow */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative group">
              {/* Dynamic halo that glows purple on hover */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-[60px]  group-hover:bg-primary/40 transition-all duration-700" />
              
              <img
                src="/harsh.jpeg"
                alt="Harsh"
                className="
                 relative
                  w-[400px] h-[400px]
                  md:w-[400px] md:h-[400px]
                  rounded-full
                  border-2 border-primary/30 
                  shadow-[0_0_50px_rgba(168,85,247,0.2)]
                  object-fill
                  transition-transform duration-500 group-hover:scale-105
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