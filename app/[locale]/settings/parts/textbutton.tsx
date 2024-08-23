import { inter } from "@/options/font";
import Image from "next/image";
import { useState } from "react";

type IconTextSmBtnProps = {
  text: string;
  icon: string;
  activeIcon: string;
  onClick: () => void;
  isActive: boolean;
};
export const TextBotton: React.FC<IconTextSmBtnProps> = ({
  text,
  onClick,
  isActive,
}) => {
  return (
    <button className="block md:hidden" onClick={onClick}>
      <div
        className={`  mx-3 flex px-3 py-2 border-2 text-16px  border-PrimaryColor dark:border-PrimaryColor-bgDark10 rounded-2xl ${isActive ? "bg-PrimaryColor dark:bg-PrimaryColor-bgDark86" : "bg-white dark:bg-PrimaryColor-bgDark10"}`}>
        <span
          className={`whitespace-nowrap ${
            isActive
              ? "text-black-200 dark:text-black-background"
              : "dark:text-white-darkText01"
          }`}>
          {text}
        </span>
      </div>
    </button>
  );
};
