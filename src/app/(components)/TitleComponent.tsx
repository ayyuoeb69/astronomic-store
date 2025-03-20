"use client";

import { cn } from "@/lib/utils";

interface TitleComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  description?: string;
}

const TitleComponent = ({
  title,
  subtitle,
  description,
  className,
}: TitleComponentProps) => {
  return (
    <div className={cn("mx-auto w-full text-center flex flex-col", className)}>
      {subtitle && (
        <h3 className="uppercase text-secondary text-[12px]/[18px] lg:text-sm/[21px]">
          {subtitle}
        </h3>
      )}
      <h2 className="font-poppins text-white tracking-[-0.02em] font-medium text-[24px]/[26px] lg:text-[40px]/[44px]">
        {title}
      </h2>
      {description && (
        <p className="text-white/35 tracking-[-0.04em] text-sm/[21px] lg:text-base/[24px]">
          {description}
        </p>
      )}
    </div>
  );
};

export default TitleComponent;
