"use client";

import { Fragment } from "react";

import PersuasionBgLight from "@/components/illustrations/PersuasionBgLight";
import PersuasionBgLightMobile from "@/components/illustrations/PersuasionBgLightMobile";
import Logo from "@/assets/images/logo.svg";
import Image from "next/image";
import { NavLink } from "../commons/NavLink";

const SOLUTION_LINK = [
  "For Astronomist",
  "For Professor",
  "For Student",
  "For Civil",
];

const INVESMENT_LINK = [
  "Building Center",
  "Allocation Fund",
  "Open Donation",
  "Training Library",
];

const ABOUT_LINK = ["About Us", "Product News", "Press", "Career"];

const FOOTER_LINK = [
  "Privacy Policy",
  "Terms of Service",
  "Manage Cookies Preferences",
];

function Footer() {
  return (
    <footer className="relative mt-10 md:mt-0">
      <PersuasionBgLight className="absolute w-full bottom-0 z-[-1] hidden lg:block" />
      <PersuasionBgLightMobile className="absolute w-full bottom-[50%] translate-y-[10%] z-[-1] block lg:hidden" />
      <div
        className="bg-[#0E0E0E]/40"
        style={{
          border: "1px solid",
          borderImageSource:
            "radial-gradient(27.92% 100% at 50% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 68.7%)",
          borderImageSlice: 1,
          // backdropFilter: 'blur(20px)',
        }}
      >
        <div className="py-10 max-w-[calc(1440px-134px*2)] size-full mx-auto flex flex-col lg:gap-20 gap-12">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-0 px-[35px] lg:px-0">
            <div className="h-[22px] lg:h-8 self-start">
              <Image src={Logo} alt="logo" className="h-full w-auto" />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-[107.5px] gap-y-10 lg:gap-y-0">
              <div className="flex flex-col gap-6">
                <h3 className="text-[16px]/[24px] tracking-[-0.04em] font-medium text-white">
                  Solution
                </h3>

                <div className="flex flex-col gap-4">
                  {SOLUTION_LINK.map((link) => (
                    <Fragment key={link}>
                      <NavLink
                        href="/"
                        className="text-white/35 tracking-[-0.04em] text-sm/[21px]"
                      >
                        {link}
                      </NavLink>
                    </Fragment>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <h3 className="text-[16px]/[24px] tracking-[-0.04em] font-medium text-white">
                  Invesment
                </h3>

                <div className="flex flex-col gap-4">
                  {INVESMENT_LINK.map((link) => (
                    <Fragment key={link}>
                      <NavLink
                        href="/"
                        className="text-white/35 tracking-[-0.04em] text-sm/[21px]"
                      >
                        {link}
                      </NavLink>
                    </Fragment>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <h3 className="text-[16px]/[24px] tracking-[-0.04em] font-medium text-white">
                  About
                </h3>

                <div className="flex flex-col gap-4">
                  {ABOUT_LINK.map((link) => (
                    <Fragment key={link}>
                      <NavLink
                        href="/"
                        className="text-white/35 tracking-[-0.04em] text-sm/[21px]"
                      >
                        {link}
                      </NavLink>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="items-center justify-between flex flex-col lg:flex-row gap-4 lg:gap-0">
            <div className="flex items-center gap-4">
              {FOOTER_LINK.map((link) => (
                <Fragment key={link}>
                  <NavLink
                    className="text-white/35 tracking-[-0.04em] underline underline-offset-4 text-[12px]/[16.8px]"
                    href="/"
                  >
                    {link}
                  </NavLink>
                </Fragment>
              ))}
            </div>

            <div className="flex flex-col gap-4 lg:items-end lg:gap-2  px-[35px] lg:px-0">
              <p className="inline-block text-[12px]/[16.8px] tracking-[-0.04em] text-white/35 text-center lg:text-left">
                Copyright &copy; Ramadhan Shalahudin Al Ayyubi
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
