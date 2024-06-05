"use client";
import React, { useState } from "react";
import home from "@/assets/svg/home-outline-black.svg";
import home2 from "@/assets/svg/home-outline-PrimaryColor.svg";
import books from "@/assets/svg/book-outline-black.svg";
import magazine from "@/assets/svg/open-book-outline-black.svg";
import search from "@/assets/svg/search-outline-black.svg";
import more from "@/assets/svg/more-outline-black.svg";
import Image from "next/image";

function Bottoncolum() {
  const [sumbut, SetSumbut] = useState(true);
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
          { path: home, text: "Home" },
          { path: books, text: "Library" },
          { path: magazine, text: "Treasures" },
          { path: search, text: "Search" },
          { path: more, text: "More" },
        ].map((i, index) => {
          return (
            <div key={index} className="m-auto ">
              <Image
                src={i.path}
                width={"24"}
                height={"24"}
                alt={i.text}
                className="mx-auto"
              />
              <div className=" text-10 text-black-100 hover:text-PrimaryColor-200">
                {i.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Bottoncolum;
