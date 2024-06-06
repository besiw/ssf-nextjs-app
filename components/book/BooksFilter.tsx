import filter from "@/assets/svg/filter-outline-white.svg";
import filter2 from "@/assets/svg/filter-outline-PrimaryColor.svg";
import Image from "next/image";
import { useState } from "react";
export default function BooksFilter() {
  const [onsubmit, setOnSubmit] = useState(true);

  return (
    <div className="flex items-center pl-5 pt-8">
      <button
        onClick={() => {
          setOnSubmit(!onsubmit);
        }}>
        <div
          className={`flex py-2 px-3 mr-6 rounded-2xl justify-center items-center  bg-PrimaryColor-200 ${onsubmit && "bg-PrimaryColor-diaphaneity12"} `}>
          <Image src={onsubmit ? filter2 : filter} alt="" className={`mr-3`} />
          <div className={`text-12 text-white ${onsubmit && "text-black-200"}`}>
            Filter
          </div>
        </div>
      </button>
      <div className=" pl-6 h-5 border-l-2"></div>
      <div className=" text-12">Library</div>
    </div>
  );
}
