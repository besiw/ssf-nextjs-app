import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import up from "@/assets/svg/chevronDown-outline-black.svg";
import user from "@/assets/img/user.png";
import help from "@/assets/svg/help-circle-outline-PrimaryColor.svg";

export default function EditProfilePage() {
  const stringTools = useTranslations("tools");
  return (
    <main className=" overflow-y-auto">
      <div>
        <div className="flex justify-between items-center">
          <div>{stringTools("Change Picture")}</div>
          <Image src={up} alt="" />
        </div>
        <div className="pt-6 flex items-center">
          <Image src={user} alt="" className="w-16 h-16" />
          <button className="mx-3 flex justify-center items-center px-3 rounded-xl h-9 border-2 text-16px  border-black">
            <span className="text-black">
              {stringTools("Upload new picture")}
            </span>
          </button>
          <button className=" flex justify-center items-center px-3 rounded-xl h-9 border-2 text-16px  border-red-100">
            <span className="text-red-100">{stringTools("Delete")}</span>
          </button>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center pt-11">
          <div>{stringTools("Change Credentials")}</div>
          <Image src={up} alt="" />
        </div>
        <div className="flex flex-col w-72 pt-4">
          <div className=" text-lg pb-2">{stringTools("Name")}*</div>
          <div className="border-2 border-gray-300 bg-white rounded-lg flex items-center">
            <input
              id="userName"
              name="userName"
              type="text"
              placeholder={stringTools("Name")}
              className=" ml-6 h-11 focus:outline-none w-full"
            />
            <div className="mr-4"></div>
          </div>
        </div>
        <div className="flex flex-col w-72 pt-3">
          <div className=" text-lg pb-2">{stringTools("email")}*</div>
          <div className="border-2 border-gray-300 bg-white rounded-lg flex items-center">
            <input
              id="email"
              name="email"
              type="text"
              placeholder={stringTools("email")}
              className=" ml-6 h-11 focus:outline-none w-full"
            />
            <div className="mr-4"></div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center pt-11">
          <div>{stringTools("Change Password")}</div>
          <Image src={up} alt="" />
        </div>
        <div className="flex flex-col w-72 pt-4">
          <div className=" text-lg pb-2">{stringTools("Old Password")}*</div>
          <div className="border-2 border-gray-300 bg-white rounded-lg flex items-center">
            <input
              id="OldPassword"
              name="OldPassword"
              type="text"
              placeholder={stringTools("password")}
              className=" ml-6 h-11 focus:outline-none w-full"
            />
            <div className="mr-4"></div>
          </div>
        </div>
        <div className="flex flex-col w-72 pt-3">
          <div className=" text-lg pb-2">{stringTools("New Password")}*</div>
          <div className="border-2 border-gray-300 bg-white rounded-lg flex items-center">
            <input
              id="NewPassword"
              name="NewPassword"
              type="text"
              placeholder={stringTools("password")}
              className=" ml-6 h-11 focus:outline-none w-full"
            />
            <div className="mr-4"></div>
          </div>
        </div>
        <div className="flex pt-5">
          <Image src={help} alt="" />
          <div className="pl-3">{stringTools("I forgot my password")}</div>
        </div>
      </div>
    </main>
  );
}
