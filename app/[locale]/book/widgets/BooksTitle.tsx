"use client";

import Image from "next/image";
import arrowleft from "@/assets/svg/arrowleft-outline-PrimaryColor.svg";
import chartbar from "@/assets/svg/chartbar-outline-PrimaryColor2.svg";
import chartbar1 from "@/assets/svg/chartbar-outline-white.svg";
import search from "@/assets/svg/search-light-bg-PrimaryColor.svg";
import search2 from "@/assets/svg/search-dark-bg-PrimaryColor.svg";
import bookmark from "@/assets/svg/bookmark-light-bg-round-PrimaryColor.svg";
import bookmark2 from "@/assets/svg/bookmark-dark-bg-round-PrimaryColor.svg";
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
      <div className="flex justify-between items-center px-5 pb-4">
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
    </>
  );
};
export default BooksTitle;
