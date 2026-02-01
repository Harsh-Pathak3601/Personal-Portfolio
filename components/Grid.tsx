import { gridItems } from "@/data/index";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import MagicButton from './ui/MagicButton';

const Grid = () => {
  return (
    /* 1. FULL-WIDTH SHELL: 
       The 'w-full' ensures your 'bg-mesh-purple' and 'border-t' 
       span the entire browser width. 
    */
    <section
      id="about"
      className="relative z-10 w-full pt-32 pb-20 min-h-fit scroll-mt-32 bg-mesh-purple border-t border-border/30"
    >
      
    
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* SECTION TITLE */}
        <div className="mb-12 text-center">
          <h1 className="heading text-foreground">
            Engineering <span className="text-primary">Snapshot</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl md:tracking-wider text-muted-foreground font-kaushan max-w-2xl mx-auto">
            Proof of my skills, consistency, and problem-solving approach.
          </p>
        </div>

        {/* BENTO GRID */}
        <BentoGrid className="w-full">
          {gridItems.map((item, i) => (
            <BentoGridItem
              id={item.id}
              key={i}
              title={item.title}
              description={item.description}
              className={item.className}
              img={item.img}
              imgClassName={item.imgClassName}
              titleClassName={item.titleClassName}
              spareImg={item.spareImg}
            />
          ))}
        </BentoGrid>

        {/* PROFILE LINKS */}
        <div className="mt-20">
          <p className="font-kaushan text-center text-2xl md:text-3xl mb-8 text-primary/80">
            Problem-Solving Profiles
          </p>
          
          <div className="mt-2 md:mt-0.5 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full justify-center items-center">
            <div className="w-full sm:w-auto max-w-[240px]">
              <a
                href="https://github.com/Harsh-Pathak3601"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MagicButton
                  title="GitHub"
                  icon={<FaGithub className="text-lg text-gray-400" />}
                  position="left"
                />
              </a>
            </div>

            <div className="w-full sm:w-auto max-w-[240px] ">
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

            <div className="w-full sm:w-auto max-w-[240px]">
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
        </div>
      </div>
    </section>
  );
};

export default Grid;