"use client";

import { Avatar, AvatarFallback } from "@/components/commons/Avatar";
import { motion } from "framer-motion";
import { useHoverCard } from "../(usecases)/useHoverCard";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
}

const TestimonialCard = ({ quote, name, title }: TestimonialCardProps) => {
  const { isHover, setIsHover } = useHoverCard();

  return (
    <motion.div
      className="rounded-[16px] py-7 px-7 flex flex-col gap-4 overflow-hidden flex-shrink-0 w-full md:max-w-[300px]"
      style={{
        border: "0.5px solid rgba(255, 255, 255, 0.1)",
      }}
      animate={{
        boxShadow: "0px 5.39px 21.57px 0px #00000033",
        background: isHover
          ? "linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100.34%), radial-gradient(67.6% 71.85% at 50% 100%, rgba(168, 208, 62, 0.3) 0%, rgba(168, 208, 62, 0.01) 100%)"
          : "linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100.34%), radial-gradient(67.6% 71.85% at 50% 100%, rgba(168, 208, 62, 0) 0%, rgba(168, 208, 62, 0.01) 100%)",

        borderBottom: isHover
          ? "3px solid rgba(168, 208, 62, 1)"
          : "0.3px solid rgba(168, 208, 62, 0.3)",
      }}
      onHoverStart={() => {
        setIsHover(true);
      }}
      onHoverEnd={() => {
        setIsHover(false);
      }}
    >
      <div>
        <Avatar className="bg-white/30">
          <AvatarFallback className="bg-[#D9D9D9]/10">
            {name.charAt(0)}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-col flex gap-2">
        <p className="font-poppins font-medium text-white text-base/[24px]">
          {quote}
        </p>
        <div>
          <p className="text-[12px]/[17px] tracking-[-0.04em] text-white/35">
            {name}
          </p>
          <p className="text-[12px]/[17px] tracking-[-0.04em] text-white/35">
            {title}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
