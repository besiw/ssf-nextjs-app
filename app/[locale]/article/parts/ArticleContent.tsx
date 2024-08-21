import { cormorant_Garamond } from "@/options/font";
import { ArticleType } from "@/app/type";

interface BookContentProps extends ArticleType {
  filteredName: string;
}
const ArticleContent: React.FC<BookContentProps> = ({
  title,
  content,
  filteredName,
}) => {
  return (
    <main
      className={`${cormorant_Garamond.className} dark:text-white-darkText01`}>
      <div className=" hidden md:flex relative flex-col left-8 top-4">
        <div>Filtered: {filteredName}</div>
        <div className="flex border-b-2 w-16 1.5xl:w-52 border-PrimaryColor dark:border-PrimaryColor-bgDark86"></div>
      </div>
      <div className="md:hidden   pr-5">
        <div className=" flex justify-end w-full">
          <div className={`${cormorant_Garamond.className}`}>
            Filtered: {filteredName}
          </div>
        </div>
        <div className="flex justify-end w-full pt-5">
          <div className="border-t-2 border-PrimaryColor flex justify-end w-19"></div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" max-w-3xl px-6 w-full flex-col">
          <h1 className="flex text-2xl font-semibold pb-6 justify-center 1.5xl:justify-start">
            {title}
          </h1>
          {content?.map((s, i) => {
            if (s.type === "p") {
              return <p key={i}>{s.c}</p>;
            }
          })}
        </div>
      </div>
    </main>
  );
};
export default ArticleContent;
