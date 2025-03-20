"use client";

import { motion } from "framer-motion";
import HeroBgIllustration from "@/components/illustrations/HeroBgIllustration";
import HeroBgStarIllustration from "@/components/illustrations/HeroBgStarIllustration";
import HeroBgBigCircularLightIllustration from "@/components/illustrations/HeroBgBigCircularLightIllustration";
import HeroBgCircularLightIllustration from "@/components/illustrations/HeroBgCircularLightIllustration";

const HeroSection = () => {
  return (
    <motion.section
      animate={{
        maskImage:
          "linear-gradient(180deg, #D9D9D9 51.36%, rgba(115, 115, 115, 0) 100%)",
      }}
      className="overflow-hidden relative"
    >
      <div className="absolute inset-0 backdrop-blur-md top-0 left-0 w-full h-full z-[-11]">
        <HeroBgIllustration className="absolute z-[-1]" />
        <HeroBgStarIllustration className="absolute z-[-1]" />
        <HeroBgBigCircularLightIllustration className="absolute top-0 left-1/2 -translate-x-1/2 z-[-1] w-full" />
        <HeroBgCircularLightIllustration className="absolute top-1/2 left-1/2 -translate-x-1/2 z-[-1]" />
      </div>
      <div className="pt-24 lg:pt-44 lg:pb-40 pb-20 relative z-[11]">
        <motion.div
          className="max-w-[1018px] mx-auto flex flex-col gap-8 z-[11]"
          animate={{
            opacity: 1,
          }}
          initial={{
            opacity: 0,
          }}
        >
          <div className="flex flex-col gap-4 max-w-[336px] mx-auto md:max-w-none text-white">
            <h1 className="font-poppins font-medium text-center md:text-[55px]/[60.5px] text-[35px]/[38.5px] tracking-[-0.02em]">
              Explore the Universe with the Best Astronomy Equipment
            </h1>
            <h2 className="font-poppins text-center lg:text-[20px]/[30px] text-[16px]/[24px] tracking-[-0.04em] max-w-[752px] mx-auto text-white/35">
              Your go-to destination for exploring the wonders of the night sky.
              We provide a wide range of telescopes, binoculars, lens filters,
              and astronomy accessories for beginners and professionals alike.
            </h2>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
