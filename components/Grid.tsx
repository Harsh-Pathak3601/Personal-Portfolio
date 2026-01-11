import { gridItems } from "@/data/index";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section
      id="about"
      className="relative
    z-10
    pt-32
    pb-20
    min-h-fit
    scroll-mt-32
  "   // section spacing
    >
      {/* 🔹 SECTION TITLE */}
      <div className="mb-12 text-center px-4">
        <h1 className="heading text-white">
          Inside My <span className="text-purple">World</span>
        </h1>

        <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-2xl md:tracking-wider text-white font-kaushan max-w-2xl mx-auto">
          A snapshot of my work, skills, and developer mindset.
        </p>
      </div>

      {/* 🔹 BENTO GRID */}
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
    </section>
  );
};

export default Grid;
