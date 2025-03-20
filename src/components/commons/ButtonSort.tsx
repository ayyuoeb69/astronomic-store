import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

export const Button = ({
  children,
  selected = false,
  ...props
}: PropsWithChildren<IButton>) => {
  console.log(selected, "selected");
  return (
    <button
      className={cn(
        " text-white px-4 h-9 cursor-pointer hover:opacity-70 rounded-[10px] border-[0.5px] border-white/50 flex items-center gap-2 text-sm",
        selected ? "bg-secondary text-black/80" : "bg-white/35"
      )}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};
