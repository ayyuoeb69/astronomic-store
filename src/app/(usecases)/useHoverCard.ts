import { useState } from "react";

export const useHoverCard = () => {
  const [isHover, setIsHover] = useState(false);

  return {
    isHover,
    setIsHover,
  };
};
