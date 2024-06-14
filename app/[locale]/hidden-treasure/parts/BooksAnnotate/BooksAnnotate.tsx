import { BooksAnnotateType } from "@/app/type";
import Annotate from "./Annotate";
import { cormorant_Garamond } from "@/options/font";
import booksAnnotateData, {
  booksAnnotateDate,
} from "@/app/mockData/allBooksAnnotate";

type BooksAnnotateProps = {
  isFilterOpen?: boolean;
  annotate: BooksAnnotateType[];
};

const BooksAnnotate: React.FC<BooksAnnotateProps> = ({
  isFilterOpen,
  annotate,
}) => {
  return (
    <>
      <div
        className={`pb-3 pl-5 text-2xl md:pb-7 font-semibold ${cormorant_Garamond.className}`}>
        <span>{booksAnnotateDate.booksName} </span>
        <span>{booksAnnotateDate.year}</span>
        <span className=" text-PrimaryColor"> / </span>
        <span>{booksAnnotateDate.moon}</span>
      </div>
      {annotate.map((annotate, index) => {
        return (
          <>
            <Annotate key={index} {...annotate} />
          </>
        );
      })}
    </>
  );
};
export default BooksAnnotate;
