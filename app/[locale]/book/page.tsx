import MainTemplate from "@/components/MainTemplate";
import BookContent from "./BookContent";
import BooksTitle from "./BooksTitle";
import NoteColBlk from "./widgets/NoteColBlk";
import Notebook from "@/components/book/note/Notebook";
export default function Home() {
  return (
    <>
      {/* <MainTemplate
        TopSection={
          <BooksTitle
            bookTitle="Stykker og referater i fornyet utgave fra Skjulte Skatter av Johan
			O.Smith"
            bookAuthor="Kare J. Smith"
          />
        }
        LeftColumn={<div />}
        RightColumn={<div />}
        MainSection={<BookContent />}
      /> */}
      {/* <NoteColBlk
        title="‘Lorem ipsum dolor sit amet...’"
        content="Lorem ipsum dolor sit amet consectetur. Tortor vulputate cursus lobortis consequat congue."
        color="bg-pink-200"
        userName="Burcu A."
      /> */}
      <Notebook />
    </>
  );
}
