"use client";

import { FaLocationArrow} from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";


import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { link } from "fs";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading text-white">
         Selected{" "}
        <span className="text-purple"> Projects</span>
      </h1>
       <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-2xl md:tracking-wider text-white font-kaushan max-w-2xl mx-auto text-center">
        Curated projects showcasing my skills and problem-solving.
        </p>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((item) => (
          <div
           className="
   sm:h-[41rem]
    h-[28rem]
    lg:min-h-[32.5rem]
    flex items-center justify-center
    sm:w-[570px] w-[80vw]
    relative
    mb-8
"

            key={item.id}
          >
            <PinContainer 
                title={item.link} href={item.link}
            >
             <div className="relative sm:w-[570px] w-[80vw] aspect-[16/9] mb-10 rounded-2xl overflow-hidden">
  <img
    src={item.img}
    alt={item.title}
    className="w-full h-full object-cover"
  />
</div>



              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-purple"> 
                {item.title}
              </h1>     
              {/* line-clamp is used so that title doesnt go below 2 lines */}

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                 <Link
  href={item.link}
  target="_blank"
  className="flex items-center lg:text-xl md:text-xs text-sm text-purple hover:underline"
>
 View Project
  <FaLocationArrow className="ms-3" color="#CBACF9" />
</Link>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
        <div className="text-center mt-0 sm:mt-6 lg:mt-10">
          <a href="https://github.com/Harsh-Pathak3601?tab=repositories" className="inline-flex font-bold items-center gap-2 text-white hover:text-purple transition-colors  group text-lg">
            View Full Project Archive
            <ArrowUpRight size={20} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>
    </div>
  );
};

export default RecentProjects;