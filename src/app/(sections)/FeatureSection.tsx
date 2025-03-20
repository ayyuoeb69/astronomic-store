"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useFeature } from "../(usecases)/useFeature";
import TitleComponent from "../(components)/TitleComponent";

const ITEMS = [
  {
    title: "Refractor & Reflector Telescopes",
    description: "Crystal-clear views of stars and planets",
  },
  {
    title: "Astronomy Binoculars",
    description: "Perfect for wide-field celestial observation",
  },
  {
    title: "Filters & Lenses",
    description: "Enhance your viewing experience with top-tier accessories",
  },
  {
    title: "Mounts & Tripods",
    description: "Maximum stability for an optimal stargazing experience",
  },
  {
    title: "Star Maps & Guides",
    description: "Learn and navigate the night sky like a pro",
  },
  {
    title: "Smartphone Adapters",
    description: "Capture breathtaking celestial moments with your phone",
  },
];

const FeatureSection = () => {
  const { hoverIndex, handleHover } = useFeature();

  return (
    <motion.section
      animate={{
        opacity: 1,
      }}
      initial={{
        opacity: 0,
      }}
      className="py-10 max-w-[1171px] mx-auto px-[30px] lg:px-0 backdrop-blur-lg"
    >
      <TitleComponent subtitle="Feature" title=" Our Featured Products" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {ITEMS.map((item, index) => (
          <motion.div
            className={cn("flex flex-col gap-2 pl-5 lg:pl-6")}
            initial={{
              borderLeft: "0.5px solid rgba(255, 255, 255, 0.2)",
            }}
            animate={{
              borderLeft:
                hoverIndex === index
                  ? "2px solid rgba(168, 208, 62, 1)"
                  : "0.5px solid rgba(255, 255, 255, 0.2)",
            }}
            onHoverEnd={() => handleHover(undefined)}
            onHoverStart={() => handleHover(index)}
            key={item.title}
          >
            <h3 className="text-base/[24px] text-white font-medium flex items-center gap-2">
              <span>{item.title}</span>
            </h3>
            <p className="text-sm text-white/55 tracking-[-0.04em]">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default FeatureSection;
