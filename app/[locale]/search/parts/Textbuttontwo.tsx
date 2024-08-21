import { inter } from "@/options/font";

type TextBottonProps = {
  text: string;
  onClick: () => void;
  isActive: boolean;
};
export const Textbuttontwo: React.FC<TextBottonProps> = ({
  text,
  onClick,
  isActive,
}) => {
  return (
    <button onClick={onClick}>
      <div
        className={`mx-3 flex px-3 py-2 border-2 border-PrimaryColor rounded-full ${isActive ? "bg-PrimaryColor dark:bg-PrimaryColor-bgDark86" : "bg-white dark:bg-black-background"}`}>
        <span
          className={`${inter.className} font-normal text-PrimaryColor dark:text-PrimaryColor-bgDark86 px-5`}>
          {text}
        </span>
      </div>
    </button>
  );
};
