import { cn } from "@/lib/utils";
import Link from "next/link";

export function NavLink({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) {
  return (
    <Link
      className={cn(
        "transition hover:text-white dark:hover:text-white/50",
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
