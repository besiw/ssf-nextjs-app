import { BooksAnnotateType } from "@/app/type";
import Annotate from "./Annotate";

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
      {annotate.map((annotate, index) => {
        return (
          <>
            <Annotate
              booksName={annotate.booksName}
              year={annotate.year}
              moon={annotate.moon}
              autor={annotate.autor}
              note={annotate.note}
            />
          </>
        );
      })}
    </>
  );
};
export default BooksAnnotate;
