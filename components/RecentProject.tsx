"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data";

const RecentProjects = () => {
  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="heading text-white">
         Selected{" "}
        <span className="text-purple"> Projects</span>
      </h1>
       <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-2xl md:tracking-wider text-white font-kaushan max-w-2xl mx-auto text-center">
        Curated projects showcasing my skills and problem-solving.
        </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center justify-center">
          {projects.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col bg-[#0d0e23] border border-white/[0.1] rounded-3xl overflow-hidden transition-all duration-500 hover:border-purple/50 hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)]"
            >
              {/* Image Container with Overlay */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e23] via-transparent to-transparent opacity-60" />
              </div>

              {/* Content Area */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-purple transition-colors">
                  {item.title}
                </h2>
                
                <p className="text-gray-400 text-sm md:text-base line-clamp-2 mb-8 leading-relaxed">
                  {item.des}
                </p>

                {/* Footer: Icons & Link */}
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[0.1] rounded-full bg-black-100 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center backdrop-blur-sm"
                        style={{
                          transform: `translateX(-${8 * index}px)`,
                        }}
                      >
                        <img src={icon} alt="icon" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <Link
                    href={item.link}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 text-purple hover:bg-purple hover:text-white transition-all duration-300 text-sm font-medium border border-purple/20 "
                  >
                    Live Demo
                    <FaLocationArrow className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Archive Link */}
        <div className="text-center mt-20">
          <Link
            href="https://github.com/Harsh-Pathak3601?tab=repositories"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple/10 to-transparent border border-purple/30 text-white font-semibold hover:from-purple/20 transition-all group hover:text-purple"
          >
            Explore Full Archive
            <ArrowUpRight
              size={20}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;