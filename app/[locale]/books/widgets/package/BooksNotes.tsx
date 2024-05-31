import React from "react";
import share from "@/assets/svg/share-outline-black.svg";
import notes from "@/assets/svg/notes-outline-black.svg";
import bookMark from "@/assets/svg/bookmark-outline-black.svg";
import copy from "@/assets/svg/copy-outline-black.svg";
import highlights from "@/assets/svg/highlights-outline-black.svg";
import Image from "next/image";

export default function BooksNotes() {
  return (
    <div className="flex-col ">
      <div className="w-full flex pt-5 px-6 relative mix-blend-normal">
        {[
          { path: share, text: "share" },
          { path: notes, text: "notes" },
          { path: bookMark, text: "bookMark" },
          { path: copy, text: "copy" },
          { path: highlights, text: "highlights" },
        ].map((i, index) => {
          return (
            <div
              key={index}
              className="px-1 flex-col justify-center  bg-green-200">
              <Image
                src={i.path}
                width={"24"}
                height={"24"}
                alt={i.text}
                className="mx-auto pt-3"
              />
              <div className="p-3">{i.text}</div>
            </div>
          );
        })}
      </div>
      <hr className="flex w-full" />
    </div>
  );
}
