import BooksAnnotate from "@/components/book/BooksAnnotate/BooksAnnotate";
import BooksTitle from "../book/widgets/BooksTitle";

export default function Home() {
  return (
    <>
      <BooksAnnotate booksName={""} year={""} moon={""} />
      <BooksTitle
        bookTitle={"Apostelen Paulus' formaninger "}
        bookAuthor={"Forord av Kåre J. Smith"}
      />
    </>
  );
}
