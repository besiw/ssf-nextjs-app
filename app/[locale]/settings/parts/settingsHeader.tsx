"use client";

import { useTranslations } from "next-intl";
import React, { useRef, useState } from "react";
import { TextBotton } from "../parts/textbutton";
import EditProfilePage from "./editProfilePage";
import Image from "next/image";
import logout from "@/assets/svg/log-out-outline-black.svg";
const SettingsHeader: React.FC<{}> = ({}) => {
  const stringTools = useTranslations("tools");
  const toolsRef = useRef(null);
  const [openEditProfile, setOpenEditProfile] = useState(true);
  const [openSettings, setOpenSettings] = useState(false);
  const [openActivities, setOpenActivities] = useState(false);
  const [openAddFriends, setOpenAddFriends] = useState(false);
  return (
    <div className="px-3 md:w-734 md:h-full">
      <div className="text-center pt-4 md:hidden">
        {stringTools("EditProfile")}
      </div>
      <div className=" hidden md:flex justify-between pt-12 border-b-2 pb-6 border-PrimaryColor">
        <div className="flex flex-col">
          <div className="flex">
            <div className="border-r-2 mr-4 pr-4 border-PrimaryColor">
              {stringTools("Burcu Akıntürk")}
            </div>
            <div> {stringTools("EditProfile")}</div>
          </div>
          <div className="text-black-diaphaneity60">
            {stringTools("Update your username and manage your account")}
          </div>
        </div>
        <button className="border-2 border-PrimaryColor rounded-full">
          <span className="py-3 px-5">{stringTools("Save Changes")}</span>
        </button>
      </div>
      <div
        ref={toolsRef}
        className="flex flex-nowrap justify-between flex-auto overflow-x-auto pt-8 pb-6">
        <TextBotton
          key={"0"}
          isActive={openEditProfile}
          activeIcon={""}
          icon={""}
          onClick={() => {
            setOpenEditProfile(!openEditProfile);
            setOpenSettings(false);
            setOpenActivities(false);
            setOpenAddFriends(false);
          }}
          text={stringTools("EditProfile")}
        />
        <TextBotton
          key={"1"}
          isActive={openSettings}
          activeIcon={""}
          icon={""}
          onClick={() => {
            setOpenEditProfile(false);
            setOpenSettings(!openSettings);
            setOpenActivities(false);
            setOpenAddFriends(false);
          }}
          text={stringTools("Settings")}
        />
        <TextBotton
          key={"2"}
          isActive={openActivities}
          activeIcon={""}
          icon={""}
          onClick={() => {
            setOpenEditProfile(false);
            setOpenSettings(false);
            setOpenActivities(!openActivities);
            setOpenAddFriends(false);
          }}
          text={stringTools("Activities")}
        />
        <TextBotton
          key={"3"}
          isActive={openAddFriends}
          activeIcon={""}
          icon={""}
          onClick={() => {
            setOpenEditProfile(false);
            setOpenSettings(false);
            setOpenActivities(false);
            setOpenAddFriends(!openAddFriends);
          }}
          text={stringTools("Add Friends")}
        />
      </div>

      <EditProfilePage />
      <div className="border-t-2 flex justify-between mt-8 pt-5 items-center pb-28 md:hidden">
        <div className="border-r-2 pr-5 text-red-100">
          {stringTools("Delete Account")}
        </div>
        <div>{stringTools("Logout")}</div>
        <button className="border-2 border-PrimaryColor p-3 rounded-full">
          {stringTools("Save Changes")}
        </button>
      </div>
      <div className="pt-20 justify-center items-end hidden md:flex">
        <div className="pr-5 border-r-2 text-red-100 border-PrimaryColor">
          {stringTools("Delete Account")}
        </div>
        <Image src={logout} alt="" className="ml-5" />
        <div className="pl-3">{stringTools("Log Outs")}</div>
      </div>
    </div>
  );
};

export default SettingsHeader;
