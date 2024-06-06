"use client";
import React, { useState } from "react";
import home from "@/assets/svg/home-outline-black.svg";
import home2 from "@/assets/svg/home-outline-PrimaryColor.svg";
import books from "@/assets/svg/book-outline-black.svg";
import books2 from "@/assets/svg/book-outline-PrimaryColor.svg";
import magazine from "@/assets/svg/open-book-outline-black.svg";
import magazine2 from "@/assets/svg/open-book-outline-PrimaryColor.svg";
import search from "@/assets/svg/search-outline-black.svg";
import search2 from "@/assets/svg/search-outline-PrimaryColor.svg";
import more from "@/assets/svg/more-outline-black.svg";
import more2 from "@/assets/svg/more-outline-PrimaryColor.svg";
import Image from "next/image";
import { Link, usePathname } from "@/middleware";
function Bottoncolum() {
  const ePathname = usePathname();
  const currentPath = ePathname;
  return (
    <div className="absolute bottom-0 w-full flex 1.5xl:hidden">
      <div
        className="
                    flex
                    bg-gray-75
                    z-10 
                    mx-auto
                    justify-between
                    relative 
                    mix-blend-normal 
                    w-full 
                    h-20 
                    rounded-t-4xl 
                    md:rounded-4xl
                    md:bottom-5
                    px-4 
                    md:w-621">
        {[
          { imageSrc: home, imageSrc2: home2, text: "Home", path: "/" },
          {
            imageSrc: books,
            imageSrc2: books2,
            text: "Library",
            path: "/books",
          },
          {
            imageSrc: magazine,
            imageSrc2: magazine2,
            text: "Magazine",
            path: "/hidden-treasure",
          },
          {
            imageSrc: search,
            imageSrc2: search2,
            text: "Search",
            path: "/search",
          },
          { imageSrc: more, imageSrc2: more2, text: "More", path: "/book" },
        ].map((i, index) => {
          const isActive = currentPath === i.path;
          console.log(isActive);
          return (
            <Link key={index} className="items-center m-auto" href={i.path}>
              <div
                className={`w-16 h-16 rounded-2xl flex flex-col items-center justify-center ${isActive && "md:bg-PrimaryColor-200"}`}>
                <Image
                  src={isActive ? i.imageSrc2 : i.imageSrc}
                  width={"24"}
                  height={"24"}
                  alt={i.text}
                  className="mx-auto"
                />
                <div
                  className={`text-center text-10  ${isActive ? "text-PrimaryColor-200" : "text-black-100"}`}>
                  {i.text}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Bottoncolum;
