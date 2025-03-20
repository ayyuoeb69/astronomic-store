"use client";

import { motion, type SVGMotionProps } from "framer-motion";

type Props = SVGMotionProps<SVGSVGElement>;

const drawMeteor = (i: number) => {
  const delay = 0 + i * 0.5;

  return {
    initial: {
      opacity: 0,
      pathLength: 0,
    },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    },
  };
};

const HeroBgIllustration = (props: Props) => {
  const { ...restProps } = props;

  return (
    <motion.svg
      width="981"
      height="981"
      viewBox="0 0 981 981"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      animate={{
        rotate: [360, 0],
      }}
      initial={{
        rotate: 0,
      }}
      style={{
        top: 410,
        left: "50%",
        translateX: "-50%",
        translateY: "-50%",
        scale: 0.85,
      }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        type: "tween",
        ease: "linear",
        duration: 24,
      }}
      {...restProps}
    >
      <motion.circle
        cx="490"
        cy="490"
        r="489.5"
        fill="url(#paint0_linear_52_1201)"
        stroke="url(#paint1_linear_52_1201)"
      />
      <motion.circle
        cx="490"
        cy="490"
        r="392.5"
        fill="url(#paint2_linear_52_1201)"
        stroke="url(#paint3_linear_52_1201)"
      />
      <motion.path
        d="M490 94.9241C272.952 94.9241 97 270.876 97 487.924"
        stroke="url(#paint4_linear_52_1201)"
        {...drawMeteor(0)}
      />
      <motion.path
        d="M490 980C760.62 980 980 760.619 980 490"
        stroke="url(#paint5_linear_52_1201)"
        {...drawMeteor(0.5)}
      />
      <motion.circle
        cx="490"
        cy="490"
        r="286.5"
        fill="url(#paint6_linear_52_1201)"
        stroke="url(#paint7_linear_52_1201)"
      />
      <motion.path
        d="M777 490C777 331.494 648.506 203 490 203"
        stroke="url(#paint8_linear_52_1201)"
        {...drawMeteor(1)}
      />
      <defs>
        <motion.linearGradient
          id="paint0_linear_52_1201"
          x1="490"
          y1="0"
          x2="490"
          y2="980"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="#999999" stopOpacity="0.03" />
        </motion.linearGradient>
        <motion.linearGradient
          id="paint1_linear_52_1201"
          x1="490"
          y1="0"
          x2="490"
          y2="980"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.02" />
          <stop offset="1" stopColor="#999999" stopOpacity="0.01" />
        </motion.linearGradient>
        <motion.linearGradient
          id="paint2_linear_52_1201"
          x1="490"
          y1="97"
          x2="490"
          y2="883"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="#999999" stopOpacity="0.03" />
        </motion.linearGradient>
        <motion.linearGradient
          id="paint3_linear_52_1201"
          x1="490"
          y1="97"
          x2="490"
          y2="883"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.02" />
          <stop offset="1" stopColor="#999999" stopOpacity="0.01" />
        </motion.linearGradient>
        <motion.linearGradient
          id="paint4_linear_52_1201"
          x1="97"
          y1="487.924"
          x2="138.626"
          y2="340.396"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D7E3B8" />
          <stop offset="1" stopColor="#A8D03E" stopOpacity="0" />
        </motion.linearGradient>
        <motion.linearGradient
          id="paint5_linear_52_1201"
          x1="980"
          y1="490"
          x2="928.1"
          y2="673.941"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D7E3B8" />
          <stop offset="1" stopColor="#A8D03E" stopOpacity="0" />
        </motion.linearGradient>
        <motion.linearGradient
          id="paint6_linear_52_1201"
          x1="490"
          y1="203"
          x2="490"
          y2="777"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="#999999" stopOpacity="0.04" />
        </motion.linearGradient>
        <motion.linearGradient
          id="paint7_linear_52_1201"
          x1="490"
          y1="203"
          x2="490"
          y2="777"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.02" />
          <stop offset="1" stopColor="#999999" stopOpacity="0.01" />
        </motion.linearGradient>
        <motion.linearGradient
          id="paint8_linear_52_1201"
          x1="490"
          y1="203"
          x2="597.737"
          y2="233.399"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D7E3B8" />
          <stop offset="1" stopColor="#A8D03E" stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </motion.svg>
  );
};

export default HeroBgIllustration;
