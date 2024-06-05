import Annotate from "./Annotate";

type BooksAnnotateProps = {
  booksName: string;
  year: string;
  moon: string;
  autor?: string;
  note?: string;
};

const BooksAnnotate: React.FC<BooksAnnotateProps> = ({
  booksName,
  year,
  moon,
  autor,
  note,
}) => {
  return (
    <>
      <div className="pb-7">
        <span>{booksName}</span>
        <span>{year}</span>
        <span className=" text-PrimaryColor-200">/</span>
        <span>{moon}</span>
      </div>
      <Annotate booksName={booksName} year={year} moon={moon} autor={autor} />
    </>
  );
};
export default BooksAnnotate;
