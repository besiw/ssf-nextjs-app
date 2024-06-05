"use client";
import React, { useState } from "react";
import home from "@/assets/svg/home-outline-black.svg";
import home2 from "@/assets/svg/home-outline-PrimaryColor.svg";
import books from "@/assets/svg/book-outline-black.svg";
import magazine from "@/assets/svg/open-book-outline-black.svg";
import search from "@/assets/svg/search-outline-black.svg";
import more from "@/assets/svg/more-outline-black.svg";
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
          { imageSrc: home, text: "Home", path: "/book" },
          { imageSrc: books, text: "Library", path: "/books" },
          {
            imageSrc: magazine,
            text: "Magazine",
            path: "/hidden-treasure",
          },
          { imageSrc: search, text: "Search", path: "/search" },
          { imageSrc: more, text: "More", path: "/book" },
        ].map((i, index) => {
          const isActive = currentPath === i.path;
          return (
            <Link key={index} className="items-center m-auto" href={i.path}>
              <div
                className={`w-16 h-16 rounded-2xl flex flex-col items-center justify-center ${isActive && " bg-PrimaryColor-200"}`}>
                <Image
                  src={i.imageSrc}
                  width={"24"}
                  height={"24"}
                  alt={i.text}
                  className="mx-auto"
                />
                <div className="text-center text-10 text-black-100">
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
