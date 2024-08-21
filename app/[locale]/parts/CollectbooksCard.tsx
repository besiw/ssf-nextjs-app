import { BookBasicType } from "@/app/type";
import Heart from "@/components/Icons/Heart";
import { cormorant, cormorant_Garamond } from "@/options/font";
import Image from "next/image";
const collectbooks: React.FC<BookBasicType> = ({
  title,
  slug,
  year,
  img,
  author,
}) => {
  return (
    <div className="w-full ">
      <div
        className={`flex text-11 mb-4 pt-7 dark:text-white-warm font-semibold ${cormorant_Garamond.className}`}>
        {slug}
      </div>
      <div className="flex bg-gray-75 dark:bg-black-blackdiv  lg:bg-white py-5 rounded-xl border dark:border-black-blackground02">
        <div className="flex flex-col pt-1 ml-4 lg:mx-10">
          <Image src={img} alt="" />
        </div>
        <div
          className={`flex pl-5 pr-8  flex-col w-full ${cormorant.className}`}>
          <div className=" w-8 h-8 mr-4 hidden lg:block">
            <Heart />
          </div>
          {title && (
            <div
              className={`italic overflow-hidden line-clamp-2 dark:text-white-darkText01 `}>
              {title}
            </div>
          )}
          <div className="truncate dark:text-white-darkText01">{author}</div>
          <div
            className={` text-black-diaphaneity60 normal dark:text-white-darkText02`}>
            {year}
          </div>
        </div>
        <div className=" left-2 bottom-2 w-8 h-8 mr-4 lg:hidden">
          <Heart />
        </div>
      </div>
    </div>
  );
};
export default collectbooks;
