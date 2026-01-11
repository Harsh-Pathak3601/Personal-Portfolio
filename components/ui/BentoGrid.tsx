"use client";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
const skillIcons = {
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Express:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  MongoDB:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Git:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "Tailwind CSS":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  Redux:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  AWS:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  GraphQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  MySQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
} as const;

type SkillKey = keyof typeof skillIcons;
import { FaFilePdf } from "react-icons/fa";




// Also install this npm i --save-dev @types/react-lottie
import Lottie from "lottie-react";


import { cn } from "@/lib/utils";


import { BackgroundGradientAnimation } from "@/components/ui/GradientBg";
import animationData from "@/data/confetti.json";
import MagicButton from "@/components/ui/MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "pathakharsh3601@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
      <div className="w-full h-full absolute">
  {/* IMAGE FOR ALL IDS EXCEPT 5 */}
  {img && id !== 5 && (
    <img
      src={img}
      alt="grid-image"
      className={cn(
        "w-full h-full object-cover object-center",
        imgClassName
      )}
    />
  )}

  {/* SKILLS ONLY FOR ID === 5 */}
  {id === 5 && (
    <div className="relative w-full h-full overflow-hidden">
      {/* gradients */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#04071d] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#04071d] to-transparent z-10 pointer-events-none" />

      <div className="h-full flex items-center ">
        <div
          className="flex gap-6 w-max px-6 hover:[animation-play-state:paused]"
          style={{ animation: "skillScroll 28s linear infinite" }}
        >
          {[...Object.keys(skillIcons), ...Object.keys(skillIcons)].map(
            (skill, index) => (
              <div key={index} className="flex-shrink-0">
                <div className="flex flex-col items-center gap-3 px-6 py-5 rounded-2xl  hover:scale-110 transition">
                  <div className="w-14 h-14 rounded-xl bg-white/[0.04] p-2">
                    <img
                      src={skillIcons[skill as SkillKey]}
                      alt={skill}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs text-[#C1C2D3]">
                    {skill}
                  </span>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <style>
        {`
          @keyframes skillScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  )}


        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
                 </div>
        {/* Emai */}
        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 "
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
       <div
  className={cn(
    "font-sans text-lg lg:text-3xl max-w-96 font-bold z-10",
  id === 5 &&
`absolute top-0  md:top-16  sm:top-4 sm:bottom-2
 left-1/2 -translate-x-1/2
 text-center
 text-sm sm:text-lg lg:text-3xl
 font-bold
 whitespace-nowrap
 px-4
 z-20`

  )}
>
  {title}
</div>


{id === 4 && (
  <div className="mt-5 w-full flex justify-center">
    <div className="w-full max-w-[260px]">
      <a
        href="YOUR_RESUME_LINK_HERE"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <MagicButton
          title="View Resume"
         icon={<FaFilePdf className="text-lg" />}
          position="left"
        />
      </a>
    </div>
  </div>
)}


          {/* for github Stats */}
       { id === 2 && (
  <div className="mt-3 flex justify-center">
    <img
      src="https://github-readme-stats-fast.vercel.app/api?username=Harsh-Pathak3601&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000"
      alt="GitHub Stats"
      className="w-full max-w-3xl h-auto rounded-xl"
    />
  </div>
)}



          {/* Tech stack list div */}
       { id === 3 && (
  <div className="mt-4 flex flex-col gap-2 w-full items-center">
    <div className="w-full max-w-[240px]">
      <a
        href="https://github.com/Harsh-Pathak3601"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MagicButton
          title="GitHub"
          icon={<FaGithub className="text-lg text-gray-400 " />}
          position="left"
        />
      </a>
    </div>

    <div className="w-full max-w-[240px]">
      <a
        href="https://leetcode.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MagicButton
          title="LeetCode"
          icon={<SiLeetcode className="text-lg text-yellow-400" />}
          position="left"
        />
      </a>
    </div>

    <div className="w-full max-w-[240px]">
      <a
        href="https://www.codechef.com/users/span_shapes_78"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MagicButton
          title="CodeChef"
          icon={<SiCodechef className="text-lg text-white" />}
          position="left"
        />
      </a>
    </div>
  </div>
)}


        { id === 6 && (
  <div className="mt-5 relative">
    {copied && (
      <div className="absolute -bottom-5 right-0 pointer-events-none">
        <Lottie
          animationData={animationData}
          loop={false}
          style={{ width: 400, height: 200 }}
        />
      </div>
    )}

    <MagicButton
      title={copied ? "Email is Copied!" : "Copy my email address"}
      icon={<IoCopyOutline />}
      position="left"
      handleClick={handleCopy}
      otherClasses="!bg-[#161A31]"
    />
  </div>
)}

        </div>
      </div>
    </div>
  );
};