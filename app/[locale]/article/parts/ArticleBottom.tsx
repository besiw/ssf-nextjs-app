"use client";

import arrowleft from "@/assets/svg/arrowleft-outline-PrimaryColor.svg";
import arrowright from "@/assets/svg/arrowright-outline-PrimaryColor.svg";
import Image from "next/image";
type ArticleBottomProps = {
  nextBook: string;
  nextBookAuthor: string;
  PreviousBook: string;
  PreviousAuthor: string;
};
const ArticleBottoms: React.FC<ArticleBottomProps> = ({
  nextBook,
  nextBookAuthor,
  PreviousBook,
  PreviousAuthor,
}) => {
  return (
    <div className=" relative flex justify-center">
      <div className=" max-w-3xl w-full border-t-2 border-PrimaryColor-12 mt-16 flex justify-between">
        <div className="flex py-10">
          <Image src={arrowleft} alt="" />
          <div className="px-3">Helliggjørelse</div>
          <div className="border-l-2 border-PrimaryColor hidden md:block"></div>
          <div className="px-3  hidden md:block">Pinehas Nilsen</div>
        </div>
        <div className="flex py-10">
          <div className="px-3  hidden md:block">Helliggjørelse</div>
          <div className="border-l-2 border-PrimaryColor  hidden md:block"></div>
          <div className="px-3">Et vann en kan lite på!</div>
          <Image src={arrowright} alt="" />
        </div>
      </div>
    </div>
  );
};
export default ArticleBottoms;
