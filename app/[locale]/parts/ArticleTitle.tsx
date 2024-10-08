"use client";

import filter from "@/assets/svg/filter-outline-white.svg";
import filter2 from "@/assets/svg/filter-outline-PrimaryColor.svg";
import search from "@/assets/svg/search-light-bg-PrimaryColor.svg";
import search1 from "@/assets/svg/search-outline-PrimaryColor.svg";
import chartbar from "@/assets/svg/chartbar-outline-PrimaryColor2.svg";
import chartbar1 from "@/assets/svg/chartbar-outline-white.svg";
import chevronleft from "@/assets/svg/chevronleft-outline-black.svg";
import search2 from "@/assets/svg/search-dark-bg-PrimaryColor.svg";
import bookmark from "@/assets/svg/bookmark-light-bg-round-PrimaryColor.svg";
import bookmark2 from "@/assets/svg/bookmark-dark-bg-round-PrimaryColor.svg";
import bookMark1 from "@/assets/svg/bookmark-outline-PrimaryColor.svg";
import Image from "next/image";
import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { inter } from "@/options/font";
import { TextBotton } from "./textbutton";
import { useSearchParams } from "next/navigation";
import { CircleButton, IconTextBotton } from "@/components/Button";
const BooksFilter: React.FC<{
  onFilterClick: () => void;
  showFilter: boolean;
}> = ({ onFilterClick, showFilter }) => {
  const searchParams = useSearchParams();

  const show = searchParams.get("show");
  const toolsRef = useRef(null);
  const stringBooks = useTranslations("Navigation");
  const stringTools = useTranslations("tools");
  const [openIndex, setOpenIndex] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openBookmark, setOpenBookmark] = useState(false);
  const [openActivities, setOpenActivities] = useState(false);
  const [openRecommended, setOpenRecommended] = useState(false);
  const handleClick = () => {
    onFilterClick();
  };

  return (
    <>
      <div className=" hidden md:flex relative justify-center md:justify-start items-center md:pl-5 md:py-8 dark:text-white-darkText01">
        <IconTextBotton
          onClick={handleClick}
          icon={filter}
          activeIcon={filter2}
          isActive={showFilter}
          text={stringTools("filter")}
        />
        <button
          className={`rounded-full p-2 absolute left-5 md:hidden ${showFilter ? "bg-PrimaryColor " : "bg-PrimaryColor-12"}`}
          onClick={handleClick}>
          <Image
            width={"20"}
            height={"20"}
            src={showFilter ? filter : filter2}
            alt=""
          />
        </button>
        <div className="hidden md:block pl-6 h-5 border-l-2"></div>
        <div className={`${inter.className} uppercase py-4 `}>
          {stringTools("article")}
        </div>
        <div ref={toolsRef} className=" flex absolute right-2 ">
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
      <div className="md:hidden block dark:text-white-darkText01">
        <div className="relative flex  justify-center md:justify-start items-center md:pl-5 md:py-8">
          <IconTextBotton
            onClick={handleClick}
            icon={filter}
            activeIcon={filter2}
            isActive={showFilter}
            text={stringTools("filter")}
          />
          <button
            className={`rounded-full p-2 absolute left-5 md:hidden ${showFilter ? "bg-PrimaryColor" : "bg-PrimaryColor-12"}`}
            onClick={handleClick}>
            <Image
              width={"20"}
              height={"20"}
              src={showFilter ? filter : filter2}
              alt=""
            />
          </button>
          <div className="hidden md:block pl-6 h-5 border-l-2"></div>
          <div className={`${inter.className} uppercase py-4`}>
            {stringTools("library")}
          </div>
        </div>
        <div ref={toolsRef} className="flex justify-center">
          <TextBotton
            key={"0"}
            isActive={openActivities}
            activeIcon={""}
            icon={""}
            onClick={() => {
              setOpenActivities(!openActivities);
              setOpenRecommended(false);
            }}
            text={stringTools("Activities")}
          />

          <TextBotton
            key={"1"}
            isActive={openRecommended}
            icon={""}
            activeIcon={""}
            onClick={() => {
              setOpenRecommended(!openRecommended);
              setOpenActivities(false);
            }}
            text={stringTools("Recommended")}
          />
        </div>
      </div>
    </>
  );
};

export default BooksFilter;
