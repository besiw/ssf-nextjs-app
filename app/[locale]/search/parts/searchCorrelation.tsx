import { SearchResultsType } from "@/app/type";
import Image from "next/image";
import chevronUp from "@/assets/svg/chevronUp-outline-black.svg";
import chevronDown from "@/assets/svg/chevronDown-outline-black.svg";
import X from "@/assets/svg/XTwitter-outline-white.svg";
import { useTranslations } from "next-intl";
import { cormorant, cormorant_Garamond, inter } from "@/options/font";
import { Textbuttontwo } from "./Textbuttontwo";
import { useRef, useState } from "react";
const searchCorrelation: React.FC<SearchResultsType> = ({
  paragraphtitle,
  bookName,
  SearchResults,
  paragraph,
  RelatedParagraph,
  SearchQuantity,
  RelatedTitle,
  RelatedBookName,
  creationDate,
}) => {
  const stringTools = useTranslations("tools");
  const toolsRef = useRef(null);
  const [openRelated, setOpenRelated] = useState(false);
  const [openBookmark, setOpenBookmark] = useState(false);
  return (
    <div className="md:max-w-734 xl:max-w-548">
      {/* 搜索结果 */}
      <div className="flex justify-between bg-PrimaryColor px-5 py-3 mt-4">
        <div className=" text-base text-white md:flex items-center">
          <div>
            <Image src={X} alt="" className="mr-6 hidden md:block" />
          </div>
          <div>
            <span className=" font-bold">‘{SearchResults}’ </span>
            <span>{stringTools("Found")}</span>
            <span> {SearchQuantity} </span>
            <span>{stringTools("Placeses")}</span>
          </div>
        </div>
        <div className="flex">
          <Image src={chevronUp} alt="" className="mr-5" />
          <Image src={chevronDown} alt="" />
        </div>
      </div>
      <main className="px-5">
        {/* 关键词内容 */}
        <div className={`pt-4  flex flex-col ${cormorant_Garamond.className}`}>
          <h2 className=" text-xl font-semibold md:text-2xl ">{bookName}</h2>
          <h4 className="text-lg font-medium flex  flex-col md:text-2xl xl:text-xl md:font-semibold ">
            <span className="py-2">{paragraphtitle}</span>
            <span className="text-16px font-medium leading-5">{paragraph}</span>
          </h4>
        </div>
        {/* 分享与收藏 */}
        <div className="flex justify-start pt-4 md:pt-8">
          <Textbuttontwo
            key={"0"}
            onClick={() => {
              setOpenRelated(!openRelated);
              setOpenBookmark(false);
            }}
            isActive={false}
            text={stringTools("related")}
          />
          <Textbuttontwo
            key={"1"}
            onClick={() => {
              setOpenBookmark(!openBookmark);
              setOpenRelated(false);
            }}
            isActive={false}
            text={stringTools("bookmark")}
          />
        </div>

        {/* 有关联 */}
        <div
          className={` mt-5 md:mt-8 border-t-2 md:border-y-2 border-PrimaryColor-12 ${cormorant_Garamond.className}`}>
          <h2 className=" text-PrimaryColor text-lg md:text-xl md:font-semibold pt-4">
            {stringTools("related")}
          </h2>
          <h4 className=" text-lg font-medium md:text-xl md:font-semibold">
            {RelatedTitle}
          </h4>
          <div className=" text-16px leading-5 ">{RelatedParagraph}</div>
          <div
            className={`md:pt-12 xl:pt-7 text-lg xl:text-base ${cormorant.className}`}>
            {RelatedBookName}
          </div>
          <div className=" text-lg md:pb-4">{creationDate}</div>
        </div>
      </main>
    </div>
  );
};
export default searchCorrelation;
