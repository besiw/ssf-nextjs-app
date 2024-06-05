import { inter } from "./font/font";

type buttoncontentProps = {
  buttonTitle: string;
  width?: string;
};
const Button: React.FC<buttoncontentProps> = ({ buttonTitle, width }) => {
  return (
    <button
      className={`font-normal  ${(inter.className, width)} text-center border-2 border-PrimaryColor-200 rounded-lg px-5`}>
      {buttonTitle}
    </button>
  );
};
export default Button;
