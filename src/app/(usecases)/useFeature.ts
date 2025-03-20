import { useState } from "react";

export const useFeature = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const handleHover = (index?: number) => {
    setHoverIndex(index ?? null);
  };

  return {
    hoverIndex,
    handleHover,
  };
};
