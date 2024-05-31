import Image from "next/image";
import arrowleft from "@/assets/svg/arrowleft-outline-PrimaryColor.svg";
import chartbar from "@/assets/svg/chartbar-outline-PrimaryColor2.svg";
import arrowdom from "@/assets/svg/chevrondown-outline-PrimaryColor.svg";

export default function BooksTitle() {
  return (
    <>
      <div className="flex justify-between px-5 pt-8">
        <div className="flex">
          <Image src={arrowleft} alt="" />
          <div className=" ml-2">Book Cover</div>
        </div>
        Stykker og referater i fornyet utgave fra Skjulte Skatter av Johan
        O.Smith
        <div className="flex bg-PrimaryColor-diaphaneity12 px-3 py-2 rounded-3xl">
          <Image src={chartbar} alt="" />
          <div className="mx-2">Index</div>
          <Image src={arrowdom} alt="" />
        </div>
      </div>
      <div className="flex justify-center text-PrimaryColor-200 pt-4">
        Forord av Kåre J. Smith
      </div>
    </>
  );
}
/*"use client";

import Image from "next/image";
import arrowleft from "@/assets/svg/arrowleft-outline-PrimaryColor.svg";
import chartbar from "@/assets/svg/chartbar-outline-PrimaryColor2.svg";
import arrowdom from "@/assets/svg/chevrondown-outline-PrimaryColor.svg";

type BooksTitleProps = {
  bookTitle: string;
  bookAuthor: string;
};

const BooksTitle: React.FC<BooksTitleProps> = ({ bookTitle, bookAuthor }) => {
  return (
    <>
      <div className="flex justify-between px-5 pt-8">
        <div className="flex">
          <Image src={arrowleft} alt="" />
          <div className=" ml-2">Book Cover</div>
        </div>
        {bookTitle}
        <div className="flex bg-PrimaryColor-diaphaneity12 px-3 rounded-xl">
          <Image src={chartbar} alt="" />
          <div className="mx-2">index</div>
          <Image src={arrowdom} alt="" />
        </div>
      </div>
      <div className="flex justify-center text-PrimaryColor-200 pt-4">
        {bookAuthor}
      </div>
    </>
  );
};
export default BooksTitle;
*/