"use client";

import { motion, type SVGMotionProps } from "framer-motion";

type Props = SVGMotionProps<SVGSVGElement>;

const HeroBgBigCircularLightIllustration = (props: Props) => {
  const { ...restProps } = props;

  return (
    <motion.svg
      width="1440"
      height="1208"
      viewBox="0 0 1440 1208"
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
      <g opacity="0.2" filter="url(#filter0_f_52_1199)">
        <circle cx="720" cy="750" r="568" fill="#A8D03E" />
      </g>
      <defs>
        <filter
          id="filter0_f_52_1199"
          x="-301.089"
          y="-271.089"
          width="2042.18"
          height="2042.18"
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
            stdDeviation="226.545"
            result="effect1_foregroundBlur_52_1199"
          />
        </filter>
      </defs>
    </motion.svg>
  );
};

export default HeroBgBigCircularLightIllustration;
