import BookMarks from "./BookMarks";
import list from "@/assets/svg/chartbar-outline-black.svg";
import Image from "next/image";

export default function Notebook() {
  return (
    <div className="px-4">
      <div className="flex justify-between flex-wrap pt-8 ">
        <div className="flex-1 text-center border-2 border-PrimaryColor-200 rounded-lg">
          bookmarks
        </div>
        <div className="flex-1 text-center border-2 border-PrimaryColor-200 mx-4 rounded-lg">
          note
        </div>
        <div className="flex-1 text-center border-2 border-PrimaryColor-200 rounded-lg">
          highlights
        </div>
      </div>
      <div>
        <BookMarks
          title={"Chapter 1"}
          icon={list}
          color="border-PrimaryColor-200"
          bookContent={`Aksel J. Smith, denne svært avholdte bror var fremragende som hyrde og profet`}
          time="2024.04.30"
          note="Lorem ipsum dolor sit amet consectetur. Elit volutpat phasellus sem quis faucibus. Id faucibus eu amet arcu."
        />
      </div>
      <div className="text-center flex justify-center items-center flex-wrap h-10 mt-7 border-2 border-PrimaryColor-200 rounded-lg">
        Close
      </div>
    </div>
  );
}
