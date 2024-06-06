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
type ButtonFilterProps = {
  index: string;
  svgCategory: string;
  svgCategory1: string;
};
const ButtonFilter: React.FC<ButtonFilterProps> = ({
  index,
  svgCategory,
  svgCategory1,
}) => {
  const [isActive, setIsActive] = useState(true);
  return (
    <button
      onClick={() => {
        setIsActive(!isActive);
      }}>
      <div
        className={`mx-2 flex px-3 py-2 rounded-xl bg-PrimaryColor-200 ${isActive && "bg-PrimaryColor-diaphaneity12"}`}>
        <Image
          className="mr-3"
          src={isActive ? svgCategory : svgCategory1}
          alt=""
        />
        <div className={`${isActive ? "text-black-200" : "text-white"}`}>
          {index}
        </div>
      </div>
    </button>
  );
};
export default ButtonFilter;
