import arr from "@/assets/svg/arrowright-outline-white.svg";
import Image from "next/image";
type AnnotateProps = {
  title: string;
  autor?: string;
  note?: string;
};
const Annotate: React.FC<AnnotateProps> = ({ title, autor, note }) => {
  return (
    <div>
      <div>{title}</div>
      <div className="w-7 h-7 bg-PrimaryColor-200 rounded-full flex justify-center items-center">
        <Image src={arr} alt="" />
      </div>
    </div>
  );
};
export default Annotate;
