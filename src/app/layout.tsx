import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { inter, poppins } from "@/lib/fonts";
import { ReactQueryClientProvider } from "@/providers/ReactQueryClientProvider";

export const metadata: Metadata = {
  title: "Astronomic Store",
  description: " Explore the Universe with the Best Astronomy Equipment",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html
        className={cn(
          "h-auto overflow-y-scroll antialiased w-full",
          inter.className,
          poppins.className
        )}
        suppressHydrationWarning
      >
        <body className="flex min-h-dvh bg-background w-full">{children}</body>
      </html>
    </ReactQueryClientProvider>
  );
}
