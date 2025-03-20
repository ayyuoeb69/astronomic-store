"use client";

import { motion, type SVGMotionProps } from "framer-motion";

type Props = SVGMotionProps<SVGSVGElement>;

const HeroBgCircularLightIllustration = (props: Props) => {
  const { ...restProps } = props;

  return (
    <motion.svg
      width="994"
      height="728"
      viewBox="0 0 994 728"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      animate={{
        opacity: 1,
      }}
      initial={{
        opacity: 0,
      }}
      {...restProps}
    >
      <g
        style={{ mixBlendMode: "hard-light" }}
        opacity="0.3"
        filter="url(#filter0_f_52_1200)"
      >
        <ellipse cx="497" cy="364" rx="297" ry="164" fill="#EFF4DF" />
      </g>
      <defs>
        <filter
          id="filter0_f_52_1200"
          x="0"
          y="0"
          width="994"
          height="728"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="100"
            result="effect1_foregroundBlur_52_1200"
          />
        </filter>
      </defs>
    </motion.svg>
  );
};

export default HeroBgCircularLightIllustration;
