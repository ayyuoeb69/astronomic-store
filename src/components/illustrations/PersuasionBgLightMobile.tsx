"use client";

import { motion, useInView, type SVGMotionProps } from "framer-motion";
import { useRef } from "react";

type Props = SVGMotionProps<SVGSVGElement>;

const PersuasionBgLightMobile = (props: Props) => {
  const { ...restProps } = props;

  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 0px -400px 0px",
  });

  return (
    <motion.svg
      width="390"
      height="940"
      viewBox="0 0 390 940"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      ref={ref}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: isInView ? 1 : 0,
      }}
      transition={{
        opacity: {
          duration: 1,
          type: "tween",
          ease: "anticipate",
        },
      }}
      {...restProps}
    >
      <circle
        opacity="0.2"
        cx="204"
        cy="470"
        r="470"
        fill="url(#paint0_radial_495_21536)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_495_21536"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(204 470) rotate(90) scale(470)"
        >
          <stop stopColor="#A8D03E" />
          <stop offset="1" stopColor="#566A20" stopOpacity="0" />
        </radialGradient>
      </defs>
    </motion.svg>
  );
};

export default PersuasionBgLightMobile;
