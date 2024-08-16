import Image from "next/image";
import checkboxIcon from "@/assets/svg/checkbox-outline-PrimaryColor1.svg";
import checkboxActiveIcon from "@/assets/svg/checkbox-outline-PrimaryColor2.svg";

type CheckboxProps = {
  title: string;
  value: boolean;
  onChange: (e: any) => void;
};

export default function Checkbox({ title, value, onChange }: CheckboxProps) {
  return (
    <label>
      <input
        className="hidden"
        type="checkbox"
        onChange={onChange}
        checked={value}
      />

      {value ? (
        <Image
          alt="checked"
          src={checkboxActiveIcon}
          className="inline-block w-5 h-5 me-3"
        />
      ) : (
        <Image
          alt="unchecked"
          src={checkboxIcon}
          className="inline-block w-5 h-5 me-3"
        />
      )}

      <span className="label font-light dark:text-white-darkText01">
        {title}
      </span>
    </label>
  );
}
