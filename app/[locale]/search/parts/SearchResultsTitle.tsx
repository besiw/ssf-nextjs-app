"use client";
import { Metadata } from "next";
import filter from "@/assets/svg/filter-outline-white.svg";
import filter2 from "@/assets/svg/filter-outline-PrimaryColor.svg";
import chevronleft from "@/assets/svg/chevronleft-outline-black.svg";
import smailChevronleft from "@/assets/svg/smallChevronleft-outline-black.svg";
import smailChevronright from "@/assets/svg/smallChevronright-outline-black.svg";
import xc from "@/assets/svg/xCircle-overstriking-outline-black.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { inter } from "@/options/font";
import { IconTextBotton } from "@/components/Button";
export const SearchResultsTitle: React.FC<{
  onFilterClick: () => void;
  showFilter: boolean;
}> = ({ onFilterClick, showFilter }) => {
  const stringTools = useTranslations("tools");
  const stringNavigation = useTranslations("Navigation");
  const handleClick = () => {
    onFilterClick();
  };
  return (
    <>
      <div className="flex px-5 justify-between items-center pt-2">
        <div className="flex justify-between md:hidden dark:text-white-darkText01">
          <Image src={chevronleft} alt="" className="" />
          <h2 className="pl-6">{stringTools("hiddentrasure")}</h2>
        </div>
        <div className=" hidden md:flex relative justify-center md:justify-start items-center md:py-8">
          <IconTextBotton
            onClick={handleClick}
            icon={filter}
            activeIcon={filter2}
            isActive={showFilter}
            text={stringTools("filter")}
          />
          <button
            className={`rounded-full p-2 absolute left-5 md:hidden ${showFilter ? "bg-PrimaryColor dark:bg-PrimaryColor-bgDark86" : "bg-PrimaryColor-12 dark:bg-PrimaryColor-bgDark10"}`}
            onClick={handleClick}>
            <Image
              width={"20"}
              height={"20"}
              src={showFilter ? filter : filter2}
              alt=""
            />
          </button>
          <div className="hidden md:block pl-6 h-5 border-l-2 "></div>
          <div
            className={`${inter.className} uppercase py-4 dark:text-white-darkText01`}>
            {stringNavigation("hidden-treasure")}
          </div>
        </div>
        <div className="flex">
          <div className="flex justify-between mr-6">
            <Image src={smailChevronleft} alt="" />
            <Image src={smailChevronright} alt="" className="ml-4" />
          </div>
          <Image src={xc} alt="" />
        </div>
      </div>
    </>
  );
};
