import { ArticleType, ArticleListInfoType } from "@/app/type";
import ArticleCard from "./ArticleCard";
import { cormorant_Garamond } from "@/options/font";

type ArticleList = {
  isFilterOpen?: boolean;
  list: ArticleType[];
  info: ArticleListInfoType;
};

const ArticleList: React.FC<ArticleList> = ({ isFilterOpen, list, info }) => {
  return (
    <>
      <div
        className={`px-6 md:px-0 pb-7 text-2xl dark:text-white-darkText01  font-semibold ${cormorant_Garamond.className}`}>
        <span>{info.title} </span>
        <span>{info.year}</span>
        <span className=" text-PrimaryColor"> / </span>
        <span>{info.month}</span>
      </div>
      {list.map((a, index) => {
        return (
          <>
            <ArticleCard {...a} key={index} />
          </>
        );
      })}
    </>
  );
};
export default ArticleList;
