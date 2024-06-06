"use client";

import Image from "next/image";
import arrowleft from "@/assets/svg/arrowleft-outline-PrimaryColor.svg";
import chartbar from "@/assets/svg/chartbar-outline-PrimaryColor2.svg";
import chartbar1 from "@/assets/svg/chartbar-outline-white.svg";
import arrowdom from "@/assets/svg/chevrondown-outline-PrimaryColor.svg";
import search from "@/assets/svg/search-light-bg-PrimaryColor.svg";
import search2 from "@/assets/svg/search-dark-bg-PrimaryColor.svg";
import bookmark from "@/assets/svg/bookmark-light-bg-round-PrimaryColor.svg";
import bookmark2 from "@/assets/svg/bookmark-dark-bg-round-PrimaryColor.svg";
import { useState } from "react";

type BooksTitleProps = {
  bookTitle: string;
  bookAuthor: string;
};

const BooksTitle: React.FC<BooksTitleProps> = ({ bookTitle, bookAuthor }) => {
  const [onsumbit, setOnSumbit] = useState(true);
  return (
    <>
      <div className="flex justify-between px-5 py-4">
        <div className="flex">
          <Image src={arrowleft} alt="" />
          <div className=" ml-2">Book Cover</div>
        </div>
        {bookTitle}
        {/* <div className="flex bg-PrimaryColor-diaphaneity12 px-3 rounded-xl">
					<Image src={chartbar} alt="" />
					<div className="mx-2">index</div>
					<Image src={arrowdom} alt="" />
				</div> */}
        <div className="flex items-center">
          <button
            onClick={() => {
              setOnSumbit(!onsumbit);
            }}>
            <div
              className={`mx-2 flex px-3 py-2 rounded-xl bg-PrimaryColor-200 ${onsumbit && "bg-PrimaryColor-diaphaneity12"}`}>
              <Image
                className="mr-3"
                src={onsumbit ? chartbar : chartbar1}
                alt=""
              />
              index
            </div>
          </button>
          <button>
            <Image className="mr-3" src={search} alt="search" />
          </button>
          <button>
            <Image src={bookmark} alt="bookmark" />
          </button>
        </div>
      </div>
      <div className="flex justify-center text-PrimaryColor-200 pb-4">
        {bookAuthor}
      </div>
    </>
  );
};
export default BooksTitle;
