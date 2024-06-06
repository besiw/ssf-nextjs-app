"use client";

import Image from "next/image";
import { useState } from "react";

type ButtonTypeCircleProps = {
  svgCategory: string;
  svgCategory1: string;
};
const ButtonTypeCircle: React.FC<ButtonTypeCircleProps> = ({
  svgCategory,
  svgCategory1,
}) => {
  const [isActive, setIsActive] = useState(true);
  return (
    <button
      onClick={() => {
        setIsActive(!isActive);
      }}>
      <Image
        className="mr-3"
        src={isActive ? svgCategory : svgCategory1}
        alt="search"
      />
    </button>
  );
};
export default ButtonTypeCircle;
