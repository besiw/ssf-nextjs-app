"use client";

import arrowleft from "@/assets/svg/arrowleft-outline-PrimaryColor.svg";
import arrowright from "@/assets/svg/arrowright-outline-PrimaryColor.svg";
import { cormorant_Garamond } from "@/options/font";
import { ArticleType } from "@/app/type";
import Image from "next/image";
type ArticleBottomProps = {
  next?: ArticleType;
  previous?: ArticleType;
};
const ArticleBottoms: React.FC<ArticleBottomProps> = ({ next, previous }) => {
  return (
    <div
      className={`relative flex justify-center md:pb-32 ${cormorant_Garamond.className}`}>
      <div className=" max-w-3xl w-full border-t-2 border-PrimaryColor-12 dark:text-white-darkText01 mt-16 flex justify-between">
        <div className="flex py-10 ">
          <Image src={arrowleft} alt="" />
          <div className="px-3">{previous?.title}</div>
          <div className="border-l-2 border-PrimaryColor dark:border-PrimaryColor-bgDark86 hidden md:block"></div>
          <div className="px-3  hidden md:block">{previous?.author}</div>
        </div>
        <div className="flex py-10">
          <div className="px-3  hidden md:block">{next?.author}</div>
          <div className="border-l-2 border-PrimaryColor dark:border-PrimaryColor-bgDark86  hidden md:block"></div>
          <div className="px-3">{next?.title}</div>
          <Image src={arrowright} alt="" />
        </div>
      </div>
    </div>
  );
};
export default ArticleBottoms;
