import Image from "next/image";
import user02 from "@/assets/img/user02.png";
import dowm from "@/assets/svg/chevronDoubleDown-white.svg";
type NoteColProps = {
  title: string;
  content?: string;
  userName: string;
  left?: boolean;
  color?: string;
};

const NoteCol: React.FC<NoteColProps> = ({
  title,
  left,
  content,
  color,
  userName,
}) => {
  return (
    <div
      className={` h-44 shadow-lg p-4 ${left ? "rounded-r-3xl" : "rounded-l-3xl"}`}
      style={{ width: 312 }}>
      {title}
      <div className={`my-2 h-0.5 rounded-full ${color}`}></div>
      {content}
      <div className="w-full flex justify-between items-center my-2">
        <div className="flex items-center">
          <Image src={user02} alt="" className="w-7 h-7 mr-2" />
          {userName}
        </div>
        <Image src={dowm} alt="" className={` rounded-full ${color}`} />
      </div>
    </div>
  );
};

export default NoteCol;
