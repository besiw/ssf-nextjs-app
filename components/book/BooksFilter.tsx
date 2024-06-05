import filter from "@/assets/svg/filter-outline-white.svg";
import filter2 from "@/assets/svg/filter-outline-PrimaryColor.svg";
import Image from "next/image";
export default function BooksFilter() {
  return (
    <div className="flex items-center">
      <div className="flex py-2 px-3 mr-6 rounded-2xl justify-center items-center  bg-PrimaryColor-200 hover:bg-PrimaryColor-diaphaneity12 ">
        <Image src={filter} alt="" className={`mr-3 hover:hidden`} />
        <Image
          src={filter2}
          alt=""
          className="mr-3 hidden hover:inline-block"
        />
        <div className="text-12 text-white active:text-black-200 ">Filter</div>
      </div>
      <div className=" pl-6 h-5 border-l-2"></div>
      <div className=" text-12">Library</div>
    </div>
  );
}
