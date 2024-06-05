import { inter } from "./font/font";

type buttoncontentProps = {
  buttonTitle: string;
};
const Button: React.FC<buttoncontentProps> = ({ buttonTitle }) => {
  return (
    <button
      className={`font-normal  ${inter.className} w-28 text-center border-2 border-PrimaryColor-200 rounded-lg px-5`}>
      {buttonTitle}
    </button>
  );
};
export default Button;
