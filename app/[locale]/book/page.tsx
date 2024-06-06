"use client";

import MainTemplate from "@/components/MainTemplate";
import BookContent from "./widgets/BookContent";
import BooksTitle from "./widgets/BooksTitle";

export default function Home() {
  return (
    <>
      {/* <MainTemplate
        scroll
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
      <BooksTitle
        bookTitle={"Apostelen Paulus' formaninger "}
        bookAuthor={"Forord av Kåre J. Smith"}
      />
    </>
  );
}
