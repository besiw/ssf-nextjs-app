import React from "react";
import home from "@/assets/img/home-outline-black.png";
import books from "@/assets/img/book-outline-black.png";
import magazine from "@/assets/img/open-book-outline-black.png";
import search from "@/assets/img/search-outline-black.png";
import more from "@/assets/img/more-outline-black.png";
import Image from "next/image";

function Bottoncolum() {
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
            <div key={index} className="m-auto">
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
