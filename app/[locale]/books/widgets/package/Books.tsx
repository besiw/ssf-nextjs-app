"use client";

import Image, { StaticImageData } from "next/image";
import Heart from "../../../../../components/book/Heart";
type BooksProps = {
  path?: StaticImageData | undefined;
  text?: string | undefined;
  author?: string;
  age?: string;
};
const Books: React.FC<BooksProps> = ({ path, text, age, author }) => {
  return (
    <div className="flex flex-col mb-6 md:flex-row w-1/2 xl:w-1/3 ">
      <Image src={path} alt={text} className="'flex pl-5 w-5/12 0.5sm:w-40' " />
      <div className="pl-5 0.5sm:pt-3">
        <Heart />
        <div>
          <div className=" text-11.5">{text}</div>
          <div className=" text-10">{author}</div>
          <div className="text-10">{age}</div>
        </div>
      </div>
    </div>
  );
};
export default Books;
