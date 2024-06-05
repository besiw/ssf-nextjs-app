"use client";
import Image from "next/image";
import user02 from "@/assets/img/user02.png";
import dowm from "@/assets/svg/chevronDoubleDown-white.svg";
import up from "@/assets/svg/chevronDoubleUp-white.svg";
import { noteType } from "../type";
import { useState } from "react";
interface NoteColProps extends noteType {
  left: boolean | undefined;
}

const NoteCol: React.FC<NoteColProps> = ({
  left,
  author,
  title,
  color,
  content,
}) => {
  const [isOpen, SetisOpen] = useState(true);
  return (
    <div
      className={`flex flex-col h-44 shadow-lg border border-gray-200 px-4 pt-4 pb-2 ${left ? "rounded-r-3xl" : "rounded-l-3xl"}`}
      style={{ width: 312 }}>
      <span>
        {title}
        {"..."}
      </span>
      <div
        className={`my-2 h-0.5 rounded-full ${color ? color : "bg-PrimaryColor-200"}`}></div>
      <p className="flex-1 h-60 overflow-y-scroll">{content}</p>
      <div className="w-full flex justify-between items-center my-2">
        <div className="flex items-center">
          <Image src={user02} alt="" className="w-7 h-7 mr-2" />
          {author.substring(0, 20)}
        </div>
        <button
          onClick={() => {
            SetisOpen(!isOpen);
          }}>
          <Image
            src={isOpen ? dowm : up}
            alt=""
            className={` rounded-full ${color ? color : "bg-PrimaryColor-200"}`}
          />
        </button>
      </div>
    </div>
  );
};

export default NoteCol;
