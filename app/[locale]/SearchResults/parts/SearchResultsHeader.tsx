import chartbar from "@/assets/svg/chartbar-outline-PrimaryColor2.svg";
import chartbar1 from "@/assets/svg/chartbar-outline-white.svg";
import search from "@/assets/svg/search-outline-PrimaryColor.svg";
import search1 from "@/assets/svg/search-light-bg-PrimaryColor.svg";
import search2 from "@/assets/svg/search-dark-bg-PrimaryColor.svg";
import bookmark from "@/assets/svg/bookmark-light-bg-round-PrimaryColor.svg";
import bookmark2 from "@/assets/svg/bookmark-dark-bg-round-PrimaryColor.svg";
import xCircle from "@/assets/svg/xCircle-light-bg-square-PrimaryColor.svg";
import Image from "next/image";
import { CircleButton, IconTextBotton } from "@/components/Button";
import { useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
const SearchResultsHeader: React.FC<{
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
  const handleClick = () => {
    onFilterClick();
  };
  return (
    <>
      <div
        ref={toolsRef}
        className="flex justify-center pt-5 mb-5 xl:justify-end">
        <div className="hidden  md:flex">
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
        </div>
        <div className="flex justify-between border-2  border-PrimaryColor rounded-3xl md:mr-3">
          {" "}
          <Image className=" mx-3 my-2" src={search} alt="" />
          <input className=" outline-0" />
          <Image className=" mx-2" src={xCircle} alt="" />
        </div>
        <div className="hidden  md:flex">
          <CircleButton
            key={"1"}
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
    </>
  );
};
export default SearchResultsHeader;
