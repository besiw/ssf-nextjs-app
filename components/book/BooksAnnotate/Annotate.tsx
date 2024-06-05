import arr from "@/assets/svg/arrowright-outline-white.svg";
import arrp from "@/assets/svg/arrowright-outline-PrimaryColor.svg";
import { cormorant, cormorant_Garamond } from "@/components/font";
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
    <div className=" w-621 border-2 rounded-xl border-PrimaryColor-diaphaneity20  hover:bg-PrimaryColor-diaphaneity05">
      <div className=" pt-7 px-6">
        <div className="flex justify-between items-center">
          <div
            className={`${cormorant_Garamond.className} text-15  font-semibold`}>
            Title
          </div>
          <div className="w-7 h-7 border-2 border-PrimaryColor-200 rounded-full flex justify-center items-center">
            <Image src={arrp} alt="" />
          </div>
        </div>
        <div className={`${cormorant_Garamond.className} text-12 font-medium`}>
          {autor}
        </div>
        <div
          className={`${cormorant_Garamond.className} text-12  font-medium pb-3`}>
          <span>{booksName}</span>
          <span>{year}</span>
          <span className=" text-PrimaryColor-200">/</span>
          <span>{moon}</span>
        </div>
        <div className="flex items-center pb-7">
          <div className=" border-l-4 border-PrimaryColor-200 h-16 pr-5"></div>
          <div
            className={`${cormorant.className} text-10 font-medium line-clamp-4 leading-tight`}>
            Lorem ipsum dolor sit amet consectetur. Sed volutpat tortor accumsan
            et ut. Enim nulla venenatis luctus id et aliquet aliquam ante. Lacus
            fringilla bibendum venenatis Odio sodales lacus fames diam gravida
            sit lacus in sit. Magna magna elementum id tellus in feugiat cursus
            orci. Eleifend ut tempor bibendum et scelerisque et mattis...
          </div>
        </div>
      </div>
    </div>
  );
};
export default Annotate;
