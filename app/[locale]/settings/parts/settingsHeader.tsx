"use client";

import { useTranslations } from "next-intl";
import React, { useRef, useState } from "react";
import { TextBotton } from "../parts/textbutton";
import EditProfilePage from "./editProfilePage";

const SettingsHeader: React.FC<{}> = ({}) => {
  const stringTools = useTranslations("tools");
  const toolsRef = useRef(null);
  const [openEditProfile, setOpenEditProfile] = useState(true);
  const [openSettings, setOpenSettings] = useState(false);
  const [openActivities, setOpenActivities] = useState(false);
  const [openAddFriends, setOpenAddFriends] = useState(false);
  return (
    <>
      <div className="text-center pt-4">{stringTools("EditProfile")}</div>
      <div
        ref={toolsRef}
        className="flex flex-nowrap flex-auto overflow-x-auto pt-8 pb-6">
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
    </>
  );
};

export default SettingsHeader;
