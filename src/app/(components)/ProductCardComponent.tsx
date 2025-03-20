"use client";

import { motion } from "framer-motion";
import { useHoverCard } from "../(usecases)/useHoverCard";
import { IProductData } from "@/services/actions/products/interfaces";
import { cn } from "@/lib/utils";

interface ProductCardComponentProps {
  id: string;
  name: string;
  imageUrl: string;
  onClick: (data: IProductData) => void;
}

const ProductCardComponent = ({
  id,
  name,
  imageUrl,
  onClick,
}: ProductCardComponentProps) => {
  const { isHover, setIsHover } = useHoverCard();

  return (
    <motion.div
      onClick={() => onClick({ id, name, image: imageUrl })}
      className="flex relative shrink-0 w-full md:max-w-[285px] flex-col rounded-[10px] overflow-hidden cursor-pointer"
      animate={{
        boxShadow: "0px 5.39px 21.57px 0px #00000033",
        border: "0.5px solid rgba(255, 255, 255, 0.1)",
        background: isHover
          ? "linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100.34%), radial-gradient(65.02% 50% at 50% 100%, rgba(168, 208, 62, 0.3) 0%, rgba(168, 208, 62, 0.01) 100%)"
          : "linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100.34%), radial-gradient(65.02% 50% at 50% 100%, rgba(168, 208, 62, 0) 0%, rgba(168, 208, 62, 0.01) 100%)",

        borderBottom: isHover
          ? "3px solid rgba(168, 208, 62, 1)"
          : "0.1px solid rgba(168, 208, 62, 0.5)",
      }}
      transition={{
        duration: 0.3,
      }}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
    >
      <motion.div
        className="w-full md:size-[283px] relative"
        style={{
          maskImage:
            "linear-gradient(180deg, #D9D9D9 0%, rgba(115, 115, 115, 0) 100%)",
        }}
      >
        <motion.img
          src={imageUrl}
          alt={name}
          className="size-full md:object-fit"
          animate={{
            opacity: isHover ? 1 : 0.3,
          }}
        />
      </motion.div>

      <div className="absolute top-2 right-3">
        <p className="text-xl text-secondary font-bold tracking-[-0.04em]">
          # {id}
        </p>
      </div>
      <div className="flex justify-between gap-2 pt-[10px] px-7 pb-[26px]">
        <h3
          className={cn(
            "text-2xl font-medium font-poppins line-clamp-2",
            name ? "text-white" : "text-red-400"
          )}
        >
          {name || "No Product Name"}
        </h3>
      </div>
    </motion.div>
  );
};

export default ProductCardComponent;
