"use client";
import React, { useRef } from "react";
import { Link, usePathname } from "@/options/navigation";
import useNav from "./useNav";
import { inter } from "@/options/font";
import { useWindowDimensions } from "@/helpers/useWindowDimensions";
import { useDimensions } from "@/helpers/useDimensions";

function MobileNav() {
  const isDark = window
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
    : false;

  const currentPath = usePathname();
  const nav = useNav();
  const navRef = useRef<HTMLDivElement>(null);
  const { width: navWidth } = useDimensions(navRef);
  const { width: windowWidth } = useWindowDimensions();
  const hSpacing = (windowWidth - navWidth) / 2;
  return (
    <nav
      ref={navRef}
      style={{ left: hSpacing }}
      className="
					z-40 fixed bottom-3.5 md:bottom-5 xl:hidden
          flex
          bg-gray-75
					border
          md:mx-auto
          justify-between
          mix-blend-normal 
					rounded-3xl
					pt-2
          px-4 
					md:py-3
          md:w-auto dark:bg-black-blackground02 dark:border-black-background">
      {nav.map((i, index) => {
        const isActive = currentPath === i.path;
        const Icon = i.svg;
        return (
          <Link
            key={index}
            className={`m-auto ${inter.className}`}
            href={i.path as "/"}>
            <div
              className={`md:hidden w-16 h-16 rounded-2xl flex flex-col items-center justify-center ${isActive && "md:bg-PrimaryColor"}`}>
              <Icon color={isActive ? "primary" : isDark ? "white" : "black"} />
              <div
                className={`mt-1 h-10 leading-4 text-center text-xs line-clamp-2 ${isActive ? "text-PrimaryColor dark:text-PrimaryColor-bgDark86" : "text-black-100 dark:text-white-darkText01"}`}>
                {i.title}
              </div>
            </div>
            <div
              className={`hidden md:flex p-4 pb-2 w-24 rounded-2xl  flex-col items-center justify-center ${isActive && "md:bg-PrimaryColor-12 dark:md:bg-PrimaryColor-bgDark86"}`}>
              <Icon color={isDark ? "white" : "black"} />
              <div className={`mt-2.5 h-10 leading-4 text-center text-sm`}>
                {i.title}
              </div>
            </div>
          </Link>
        );
      })}
    </nav>
  );
}

export default MobileNav;
