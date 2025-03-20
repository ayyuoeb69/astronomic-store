import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import { usePathname } from "next/navigation";

const MENUS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Product",
    href: "/product",
  },
  {
    label: "Solution",
    href: "/solutions",
  },
  {
    label: "Investment",
    href: "/investment",
  },
  {
    label: "About",
    href: "/about",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header>
      <nav className="fixed z-50 flex w-full flex-none flex-col top-5 lg:top-6 px-4 lg:px-0">
        <motion.div
          className={cn(
            "xl:max-w-[1171px] w-full mx-auto shadow-navbar bg-primary/[5%] text-white rounded-2xl !border-white/20 max-w-full  lg:backdrop-blur-3xl overflow-hidden",
            isOpen ? "backdrop-blur-[30px]" : "backdrop-blur-[10px]"
          )}
          animate={{
            height: isOpen ? "95dvh" : "auto",
          }}
          style={{
            border: "0.5px solid",
            boxShadow: "0px 3.91px 31.25px 0px #0000004D",
          }}
        >
          <div className="flex w-full items-center justify-between px-4 py-3 lg:pl-10 lg:pr-3">
            <div className="h-[22px] lg:h-8 self-start">
              <Image src={Logo} alt="logo" className="h-full w-auto" />
            </div>

            <div className=" gap-4 items-center hidden lg:flex">
              {MENUS.map((menu) => (
                <Link
                  key={menu.label}
                  href={menu.href}
                  className={cn(
                    "px-[10px] py-2 text-sm/[21px] tracking-[-0.04em]",
                    pathname === menu.href ? "border-b" : ""
                  )}
                >
                  {menu.label}
                </Link>
              ))}
            </div>

            <div className="flex lg:hidden">
              <button type="button" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <X className="size-6" />
                ) : (
                  <Menu className="size-6" />
                )}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isOpen ? (
              <motion.div
                className="lg:hidden justify-between flex flex-col h-full overflow-hidden"
                transition={{
                  duration: 0.3,
                  type: "tween",
                  ease: "linear",
                }}
                animate={{
                  height: "95dvh",
                  opacity: 1,
                }}
                initial={{
                  height: "auto",
                  opacity: 0,
                }}
                exit={{
                  height: "auto",
                  opacity: 0,
                }}
              >
                <motion.div className="gap-8 lg:gap-4 items-center flex flex-col pt-8">
                  {MENUS.map((menu) => (
                    <Link
                      key={menu.label}
                      href={menu.href}
                      className={cn(
                        "px-[10px] text-[20px]/[28px] tracking-[-0.04em]",
                        pathname === menu.href ? "border-b" : ""
                      )}
                    >
                      {menu.label}
                    </Link>
                  ))}
                </motion.div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </nav>
    </header>
  );
};

export default Navbar;
