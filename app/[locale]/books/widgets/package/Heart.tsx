"use client";
import heart from "@/assets/svg/heart-outline-PrimaryColor.svg";
import heart2 from "@/assets/svg/heart-fillUp-PrimaryColor.svg";
import Image from "next/image";
import { useState } from "react";

export default function Heart() {
  const [liked, setLiked] = useState(true);

  return (
    <button
      className=" z-50"
      onClick={() => {
        console.log("111");
        setLiked(!liked);
      }}>
      <Image className="barChart" src={liked ? heart : heart2} alt={"heart"} />
    </button>
  );
}
