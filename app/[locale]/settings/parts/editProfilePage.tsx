import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import up from "@/assets/svg/chevronDown-outline-black.svg";
import user from "@/assets/img/user.png";
import Button from "@/components/Button";
export default function EditProfilePage() {
  const stringTools = useTranslations("tools");
  return (
    <main className="px-3">
      <div className="flex justify-between items-center">
        <div>{stringTools("Change Picture")}</div>
        <Image src={up} alt="" />
      </div>
      <div className="pt-6 flex items-center">
        <Image src={user} alt="" className="w-16 h-16" />
        <button className="mx-3 flex justify-center items-center px-3 rounded-xl h-9 border-2 text-16px  border-black">
          <span> Upload new picture</span>
        </button>
        <button className="mx-3 flex justify-center items-center px-3 rounded-xl h-9 border-2 text-16px  border-black">
          <span>Delete</span>
        </button>
      </div>
    </main>
  );
}
