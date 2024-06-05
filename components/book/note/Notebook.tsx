import BookMarks from "./BookMarks";
import list from "@/assets/svg/chartbar-outline-black.svg";
import bookmarks from "@/assets/svg/bookmark-light-bg-round-PrimaryColor.svg";
import Button from "@/components/button";
import Image from "next/image";

export default function Notebook() {
  return (
    <div className="px-4">
      <div className={`flex justify-between flex-wrap pt-8 `}>
        <Button buttonTitle="bookMarks" />
        <Button buttonTitle="note" />
        <Button buttonTitle="highlights" />
      </div>
      <div>
        <BookMarks
          title={"Chapter 1"}
          icon={bookmarks}
          // color="border-PrimaryColor-200"
          bookContent={`Aksel J. Smith, denne svært avholdte bror var fremragende som hyrde og profet`}
          time="2024.04.30"
          // note="Lorem ipsum dolor sit amet consectetur. Elit volutpat phasellus sem quis faucibus. Id faucibus eu amet arcu."
        />
      </div>
      <div className="text-center flex justify-center items-center flex-wrap h-10 mt-7 border-2 border-PrimaryColor-200 rounded-lg">
        Close
      </div>
    </div>
  );
}
