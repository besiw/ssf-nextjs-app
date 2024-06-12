import arr from "@/assets/svg/arrowright-outline-white.svg";
import arrp from "@/assets/svg/arrowright-outline-PrimaryColor.svg";
import { cormorant, cormorant_Garamond } from "@/options/font";
import Image from "next/image";
type AnnotateProps = {
  booksName: string;
  year: string;
  moon: string;
  autor?: string;
  note?: string;
};
const Annotate: React.FC<AnnotateProps> = ({
  booksName,
  year,
  moon,
  autor,
  note,
}) => {
  return (
    <>
      <div className=" hidden md:block w-621 border-2 rounded-xl border-PrimaryColor-20  hover:bg-PrimaryColor-5 mb-4">
        <div className=" pt-7 px-6">
          <div className="flex justify-between items-center">
            <div
              className={`${cormorant_Garamond.className} text-xl  font-semibold`}>
              Title
            </div>
            <div className="w-7 h-7 border-2 border-PrimaryColor rounded-full flex justify-center items-center">
              <Image src={arrp} alt="" />
            </div>
          </div>
          <div
            className={`${cormorant_Garamond.className}  text-lg font-medium`}>
            {autor}
          </div>
          <div
            className={`${cormorant_Garamond.className} text-lg  font-medium pb-3`}>
            <span>{booksName} </span>
            <span>{year}</span>
            <span className=" text-PrimaryColor"> / </span>
            <span>{moon}</span>
          </div>
          <div className="flex items-center pb-7">
            <div className=" border-l-4 border-PrimaryColor h-16 pr-5"></div>
            <div
              className={`${cormorant.className} text-base font-medium line-clamp-4 leading-tight`}>
              {note}
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className=" pt-5 px-6">
          <div className="flex justify-between items-center">
            <div
              className={`${cormorant_Garamond.className} text-xl  font-semibold`}>
              Title
            </div>
            <div className="w-7 h-7 border-2 border-PrimaryColor rounded-full flex justify-center items-center">
              <Image src={arrp} alt="" />
            </div>
          </div>
          <div
            className={`${cormorant_Garamond.className} text-12 font-medium`}>
            {autor}
          </div>
          <div
            className={`${cormorant_Garamond.className} text-12  font-medium pb-3`}>
            <span>{booksName} </span>
            <span>{year}</span>
            <span className=" text-PrimaryColor"> / </span>
            <span>{moon}</span>
          </div>
          <div className="flex items-center pb-7 border-b-2 border-PrimaryColor">
            <div className=" border-l-4 border-PrimaryColor h-16 pr-5"></div>
            <div
              className={`${cormorant.className} text-10 font-medium line-clamp-4 leading-tight`}>
              {note}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Annotate;
