"use client";

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

import Modal from "@/components/Modals";

import Image from "next/image";
import { Link } from "@/options/navigation";
import { useState, useRef } from "react";
import { cormorant_Garamond, inter } from "@/options/font";
import { IconTextBotton, CircleButton } from "@/components/Button";
import { useTranslations } from "next-intl";
import { useDimensions } from "@/helpers/useDimensions";
import { useSearchParams } from "next/navigation";

type BooksTitleProps = {
  bookTitle: string;
  bookAuthor: string;
  fullWidth: number;
};

const BooksTitle: React.FC<BooksTitleProps> = ({
  bookTitle,
  bookAuthor,
  fullWidth,
}) => {
  const searchParams = useSearchParams();

  const show = searchParams.get("show");
  const toolsRef = useRef(null);
  const stringBooks = useTranslations("books");
  const stringTools = useTranslations("tools");
  const [openIndex, setOpenIndex] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openBookmark, setOpenBookmark] = useState(false);

  const { width: toolWidth } = useDimensions(toolsRef);

  const titleWidth = fullWidth - toolWidth * 2;

  return (
    <>
      {show && <Modal />}
      <div className="relative px-5 py-4 hidden md:flex w-full justify-center dark:text-white-darkText01">
        <Link href="/books" className="flex absolute left-4 pt-1">
          <Image src={arrowleft} alt="" />
          <div className=" ml-2  dark:text-white-darkText01">
            {stringBooks("title")}
          </div>
        </Link>
        <div className="flex flex-col dark:text-white-darkText01">
          <div
            className={`text-2xl clamp-2 ${cormorant_Garamond.className} text-center px-2`}
            style={{ width: titleWidth }}>
            {bookTitle}
          </div>
          <div
            className={`flex items-center justify-center text-PrimaryColor font-semibold text-xl ${cormorant_Garamond.className}`}>
            {bookAuthor}
          </div>
        </div>
        <div ref={toolsRef} className="flex absolute right-2 ">
          <IconTextBotton
            key={"0"}
            isActive={openIndex}
            activeIcon={chartbar}
            icon={chartbar1}
            onClick={() => {
              setOpenIndex(!openIndex);
              setOpenBookmark(false);
              setOpenSearch(false);
            }}
            text={stringTools("index")}
          />

          <CircleButton
            key={"1"}
            isActive={openSearch}
            icon={search}
            activeIcon={search2}
            onClick={() => {
              setOpenSearch(!openSearch);
              setOpenIndex(false);
              setOpenBookmark(false);
            }}
            text={stringTools("search")}
          />
          <CircleButton
            key={"2"}
            icon={bookmark}
            activeIcon={bookmark2}
            onClick={() => {
              setOpenBookmark(!openBookmark);
              setOpenSearch(false);
              setOpenIndex(false);
            }}
            isActive={openBookmark}
            text={stringTools("bookmark")}
          />
        </div>
      </div>
      <div className="px-5 md:hidden">
        <div className={`flex justify-between py-4 ${inter.className}`}>
          <div className="flex items-center ">
            <Link href="/books">
              <Image src={chevronleft} alt="" />
            </Link>
            <button className="flex items-center ">
              <Image src={search3} className="ml-4 mr-2" alt="" />
              <div className="dark:text-white-darkText01">
                {stringTools("search")}
              </div>
            </button>
          </div>
          <div className="flex ">
            <button>
              <Image src={chartbar} className="mr-4" alt="" />
            </button>
            <button>
              <Image src={bookmark3} alt="" />
            </button>
          </div>
        </div>
        <div className="pt-3 dark:text-white-darkText01">
          <div
            className={`flex justify-end text-end text-xl ${cormorant_Garamond.className}`}>
            {bookTitle}
          </div>
          <div
            className={`flex justify-end text-PrimaryColor text-xl text-end ${cormorant_Garamond.className}`}>
            {bookAuthor}
          </div>
        </div>
        <div className="flex justify-end w-full pt-5 pb-4">
          <div className="border-t-2 border-PrimaryColor dark:border-PrimaryColor-bgDark86 flex justify-end w-19"></div>
        </div>
      </div>
    </>
  );
};
export default BooksTitle;
