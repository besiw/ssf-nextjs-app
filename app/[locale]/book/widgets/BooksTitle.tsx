"use client";

import Image from "next/image";
import arrowleft from "@/assets/svg/arrowleft-outline-PrimaryColor.svg";
import chartbar from "@/assets/svg/chartbar-outline-PrimaryColor2.svg";
import chartbar1 from "@/assets/svg/chartbar-outline-white.svg";
import search from "@/assets/svg/search-light-bg-PrimaryColor.svg";
import search2 from "@/assets/svg/search-dark-bg-PrimaryColor.svg";
import bookmark from "@/assets/svg/bookmark-light-bg-round-PrimaryColor.svg";
import bookmark2 from "@/assets/svg/bookmark-dark-bg-round-PrimaryColor.svg";
import bookmark3 from "@/assets/svg/bookmark-outline-PrimaryColor.svg";
import search3 from "@/assets/svg/search-outline-PrimaryColor.svg";
import chevronleft from "@/assets/svg/chevronleft-outline-black.svg";
import { useState } from "react";
import ButtonFilter from "@/components/button/ButtonFilter";
import ButtonTypeCircle from "@/components/button/ButtonTypeCircle";
import { cormorant_Garamond } from "@/components/font";

type BooksTitleProps = {
  bookTitle: string;
  bookAuthor: string;
};

const BooksTitle: React.FC<BooksTitleProps> = ({ bookTitle, bookAuthor }) => {
  const [isActive, setIsActive] = useState(true);
  return (
    <>
      <div className="justify-between items-center px-5 pb-4 hidden md:flex">
        <div className="flex">
          <Image src={arrowleft} alt="" />
          <div className=" ml-2">Book Cover</div>
        </div>
        <div className="flex flex-col pt-5">
          <div className={`text-14 ${cormorant_Garamond.className}`}>
            {bookTitle}
          </div>
          <div
            className={`flex items-center justify-center text-PrimaryColor-200 text-13 ${cormorant_Garamond.className}`}>
            {bookAuthor}
          </div>
        </div>
        <div className="flex">
          <ButtonFilter
            index="index"
            svgCategory={chartbar}
            svgCategory1={chartbar1}
          />
          <ButtonTypeCircle svgCategory={search} svgCategory1={search2} />
          <ButtonTypeCircle svgCategory={bookmark} svgCategory1={bookmark2} />
        </div>
      </div>
      <div className="px-5 md:hidden">
        <div className="flex justify-between">
          <div className="flex items-center ">
            <Image src={chevronleft} alt="" />
            <Image src={search3} className="ml-4 mr-2" alt="" />
            <div className=" text-15px">Search</div>
          </div>
          <div className="flex ">
            <Image src={chartbar} className="mr-4" alt="" />
            <Image src={bookmark3} alt="" />
          </div>
        </div>
        <div className="pt-7">
          <div
            className={`flex justify-end text-10 text-end ${cormorant_Garamond.className}`}>
            {bookTitle}
          </div>
          <div
            className={`flex justify-end text-PrimaryColor-200 text-10 text-end ${cormorant_Garamond.className}`}>
            {bookAuthor}
          </div>
        </div>
        <div className="flex justify-end w-full pt-5 pb-4">
          <div className="border-t-2 border-PrimaryColor-200 flex justify-end w-19"></div>
        </div>
      </div>
    </>
  );
};
export default BooksTitle;
