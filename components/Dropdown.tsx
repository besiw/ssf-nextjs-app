//https://kaderbiral26.medium.com/building-a-custom-dropdown-component-in-react-step-by-step-e12f4330fb58
import chevrondown from "@/assets/svg/chevronUp-outline-PrimaryColor.svg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import useOutsideClick from "@/helpers/useOutsideClick";
export interface SelectItem {
  id: string;
  name: string;
  imageUrl?: string;
}
interface DropdownProps {
  id: string;
  title?: string;
  data: SelectItem[];
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  hasImage?: boolean;
  style?: string;
  selectedId?: string;
  onSelect?: (id: string) => void;
}

const Dropdown = ({
  id,
  title = "Select", //Default value
  data,
  position = "bottom-left", //Default value
  hasImage,
  style,
  selectedId,
  onSelect,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<SelectItem | undefined>(
    selectedId ? data?.find((item) => item.id === selectedId) : undefined
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClick({
    ref: dropdownRef,
    handler: () => setIsOpen(false),
  });

  const handleChange = (item: SelectItem) => {
    setSelectedItem(item);
    onSelect && onSelect(item.id);
    setIsOpen(false);
  };

  useEffect(() => {
    if (selectedId && data) {
      const newSelectedItem = data.find((item) => item.id === selectedId);
      newSelectedItem && setSelectedItem(newSelectedItem);
    } else {
      setSelectedItem(undefined);
    }
  }, [selectedId, data]);
  const dropdownClass = classNames(
    "absolute px-2 py-3 mt-3 bg-white rounded-md border max-h-52 overflow-y-auto shadow z-10 right-0 left-0",
    {
      "top-full right-0 mt-2": position === "bottom-right",
      "top-full left-0 mt-2": position === "bottom-left",
      "bottom-full right-0 mb-2": position === "top-right",
      "bottom-full left-0 mb-2": position === "top-left",
    }
  );
  return (
    <div ref={dropdownRef} className="relative">
      <button
        id={id}
        aria-label="Toggle dropdown"
        aria-haspopup="true"
        aria-expanded={isOpen}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={classNames(
          "flex justify-between items-center gap-5 bg-white h-11 rounded-md px-3 py-2 border dark:border-black-background dark:bg-black-blackdiv",
          style
        )}>
        <li className="flex items-center ">
          {hasImage && selectedItem?.imageUrl && (
            <Image
              src={selectedItem?.imageUrl}
              alt="image"
              loading="lazy"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full object-cover me-3"
            />
          )}
          <span className="whitespace-nowrap pt-1 font-light dark:text-white-darkText01">
            {selectedItem?.name || title}
          </span>
        </li>
        <Image
          src={chevrondown}
          className={classNames("transform duration-500 ease-in-out", {
            "rotate-180": isOpen,
          })}
          alt="expand"
          width={20}
          height={20}
        />
      </button>
      {isOpen && (
        <div aria-label="Dropdown menu" className={dropdownClass}>
          <ul
            role="menu"
            aria-labelledby={id}
            aria-orientation="vertical"
            className="leading-10">
            {data?.map((item) => (
              <li
                key={item.id}
                onClick={() => handleChange(item)}
                className={classNames(
                  "flex items-center cursor-pointer hover:bg-PrimaryColor-5 px-3 rounded-md",
                  { "bg-PrimaryColor-20": selectedItem?.id === item.id }
                )}>
                {hasImage && item.imageUrl && (
                  <Image
                    src={item.imageUrl}
                    alt="image"
                    loading="lazy"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full object-cover me-3"
                  />
                )}
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Dropdown;
