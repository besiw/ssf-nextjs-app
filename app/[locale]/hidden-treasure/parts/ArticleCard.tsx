import arrow from "@/assets/svg/arrowright-outline-PrimaryColor.svg";
import { ArticleType } from "@/app/type";
import { cormorant, cormorant_Garamond } from "@/options/font";
import Image from "next/image";
import { Link } from "@/options/navigation";
const Annotate: React.FC<ArticleType> = ({
  title,
  year,
  month,
  author,
  excerpt,
}) => {
  const path = "/article";
  return (
    <>
      <Link
        href={path as "/"}
        className="block px-6 pt-5 md:pt-7  md:w-621 md:border-2 md:rounded-xl dark:text-white-darkText01  md:border-PrimaryColor-20 hover:bg-PrimaryColor-5 md:mb-4">
        <div className="flex justify-between items-center ">
          <div
            className={`${cormorant_Garamond.className} text-xl  font-semibold`}>
            {title}
          </div>
          <div className="w-7 h-7 border-2 border-PrimaryColor rounded-full flex justify-center items-center">
            <Image src={arrow} alt="" />
          </div>
        </div>
        <div className={`${cormorant_Garamond.className} text-12 font-medium`}>
          {author}
        </div>
        <div
          className={`${cormorant_Garamond.className} text-12  font-medium pb-3`}>
          <span>{title} </span>
          <span>{year}</span>
          <span className=" text-PrimaryColor"> / </span>
          <span>{month}</span>
        </div>
        <div className="flex items-center pb-7 border-b-2 md:border-0 border-PrimaryColor dark:border-PrimaryColor-12">
          <div className=" border-l-4 border-PrimaryColor-bgDark86 dark:borderp h-16 pr-5"></div>
          <div
            className={`${cormorant.className} text-10 md:text-base font-medium line-clamp-4 leading-tight`}>
            {excerpt}
          </div>
        </div>
      </Link>
    </>
  );
};
export default Annotate;
