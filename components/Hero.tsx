import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from '@/utils/cn'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div className="relative min-h-screen pt-36 overflow-hidden">
      
        <div>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
            <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple"/>
            <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
        </div>

         <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/ [0.3] bg-grid-black/[0.03] absolute flex items-center justify-center top-0 left-0">
      <div
      />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>

    <div className="flex justify-center relative pt-15 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <img
            src="harsh.jpeg"
            alt="Harsh"
            className="w-[200px] h-[200px] rounded-full border-8 border-[#0c0c48aa] mb-6 "
          />


        <TextGenerateEffect
        className="text-center text-[40px] md:text-5xl lg:text-6px"
        words="Transforming Concepts into Seamless Experiences"/>

     <h2 className="mt-2 h-[28px] sm:h-[32px] text-sm sm:text-xl font-medium flex items-center justify-center mb-4">
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

        <a href="#about">
            <MagicButton title="Show my work"
            icon={<FaLocationArrow />} 
            position='right'/>
        </a>
        </div>
    </div>
        </div>
  )
}

export default Hero