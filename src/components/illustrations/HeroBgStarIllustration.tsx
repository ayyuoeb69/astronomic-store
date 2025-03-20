"use client";

import { useEffect, useState } from "react";
import { motion, type SVGMotionProps } from "framer-motion";

type Props = SVGMotionProps<SVGSVGElement>;

const initialLights = [
  {
    cx: 966.658,
    cy: 154.572,
    r: 1.02952,
    fillOpacity: 1,
  },
  {
    cx: 596.03,
    cy: 175.163,
    r: 1.02952,
    fillOpacity: 1,
  },
  {
    cx: 904.887,
    cy: 113.391,
    r: 1.02952,
    fillOpacity: 0.6,
  },
  {
    cx: 317.801,
    cy: 103.982,
    r: 1.02952,
    fillOpacity: 0.6,
  },
  {
    cx: 564.887,
    cy: 1.02952,
    r: 1.02952,
    fillOpacity: 0.8,
  },
  {
    cx: 358.982,
    cy: 186.344,
    r: 1.02952,
    fillOpacity: 0.6,
  },
  {
    cx: 502.601,
    cy: 41.6957,
    r: 0.514762,
    fillOpacity: 1,
  },
  {
    cx: 440.829,
    cy: 51.105,
    r: 0.514762,
    fillOpacity: 1,
  },
  {
    cx: 626.144,
    cy: 92.286,
    r: 0.514762,
    fillOpacity: 1,
  },
  {
    cx: 0.514762,
    cy: 215.829,
    r: 0.514762,
    fillOpacity: 0.8,
  },
  {
    cx: 227.01,
    cy: 174.648,
    r: 0.514762,
    fillOpacity: 0.6,
  },
  {
    cx: 144.648,
    cy: 195.239,
    r: 0.514762,
    fillOpacity: 1,
  },
  {
    cx: 21.1051,
    cy: 174.648,
    r: 0.514762,
    fillOpacity: 0.6,
  },
  {
    cx: 124.058,
    cy: 30.5148,
    r: 0.514762,
    fillOpacity: 0.8,
  },
];

const makeRandomLightObject = () => {
  const maxWidth = 1440;
  const maxHeight = 400;

  return {
    cx: Math.random() * maxWidth,
    cy: Math.random() * maxHeight,
    r: Math.random() * (1.02952 - 0.514762) + 0.514762,
    fillOpacity: Math.random() * 0.4 + 0.6, // Random opacity between 0.6 and 1
  };
};

const generateLight = (maxOpacity: number) => {
  const randomDuration = Math.random() * (10 - 3) + 3;

  return {
    animate: {
      fillOpacity: [0, maxOpacity, 0],
    },
    initial: {
      fillOpacity: 0,
    },
    transition: {
      fillOpacity: {
        duration: randomDuration,
        repeatType: "loop",
        repeat: Number.POSITIVE_INFINITY,
      },
    },
  };
};

const HeroBgStarIllustration = (props: Props) => {
  const { ...restProps } = props;

  const [randomedLights, setRandomedLights] = useState<
    {
      cx: number;
      cy: number;
      r: number;
      fillOpacity: number;
    }[]
  >([]);

  useEffect(() => {
    setRandomedLights(
      Array.from({ length: 20 }, () => makeRandomLightObject())
    );
  }, []);

  return (
    <motion.svg
      width="968"
      height="217"
      viewBox="0 0 968 217"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      animate={{
        opacity: 1,
        rotateZ: [360, 0],
      }}
      transition={{
        opacity: {
          duration: 1,
        },
        rotateZ: {
          duration: 240,
          type: "tween",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "linear",
        },
      }}
      initial={{
        opacity: 0,
        rotateZ: 360,
      }}
      style={{
        top: "25%",
        left: "50%",
        translateX: "-50%",
        translateY: "-50%",
      }}
      {...restProps}
    >
      {initialLights.map((light) => (
        <motion.circle
          key={light.cx}
          cx={light.cx}
          cy={light.cy}
          r={light.r}
          fill="white"
          {...generateLight(light.fillOpacity)}
        />
      ))}
      {randomedLights.map((light) => (
        <motion.circle
          key={light.cx}
          cx={light.cx}
          cy={light.cy}
          r={light.r}
          fill="white"
          {...generateLight(light.fillOpacity)}
        />
      ))}
    </motion.svg>
  );
};

export default HeroBgStarIllustration;
