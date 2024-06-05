import Annotate from "./Annotate";

type BooksAnnotateProps = {
  title: string;
  autor?: string;
  note?: string;
};

const BooksAnnotate: React.FC<BooksAnnotateProps> = ({
  title,
  autor,
  note,
}) => {
  return (
    <>
      <div>{title}</div>
      <Annotate title={title} />
    </>
  );
};
export default BooksAnnotate;
