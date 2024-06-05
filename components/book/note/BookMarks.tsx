import { cormorant, cormorant_Garamond } from "@/components/font";
import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
type bookmarksProps = {
  title: string;
  note?: string;
  bookContent: string;
  color?: string;
  icon?: string;
  time?: string;
};

const bookmarks: React.FC<bookmarksProps> = ({
  title,
  note,
  time,
  color,
  icon,
  bookContent,
}) => {
  return (
    <>
      <div
        className={`flex text-11 mb-4 pt-7 dark:text-white-warm font-semibold ${cormorant_Garamond.className}`}>
        {title}
        <div className="flex flex-1 items-center px-8">
          <hr className="w-full" />
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col w-8 h-9 pt-1">
          <Image src={icon} alt="" />
          {color && <div className={` border-t-4 ${color}`}></div>}
        </div>
        <div className={`flex pl-5 pr-8  flex-col w-80 ${cormorant.className}`}>
          <div className="truncate text-10">{bookContent}</div>
          <div className={`text-10 text-black-diaphaneity60 normal`}>
            {time}
          </div>
          {note && (
            <div className={`italic overflow-hidden text-10 line-clamp-2 `}>
              {note}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default bookmarks;
