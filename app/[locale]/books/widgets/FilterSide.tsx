"use client";

import { useForm } from "react-hook-form";
import barChart from "@/assets/svg/chartbar-outline-PrimaryColor.svg";
import chevrondowm from "@/assets/svg/chevronDoubleDown-white.svg";
import sreach from "@/assets/svg/search-outline-PrimaryColor.svg";
import chevronUp from "@/assets/svg/chevronUp-outline-PrimaryColor.svg";
import "../../../../components/Sidebar/Sidebar.css";

import Image from "next/image";
import SidebarTitle from "../../../../components/Sidebar/SidebarTitle";
import SidebarButton from "../../../../components/Sidebar/SidebarButton";
import { useState } from "react";
export default function Sidebar() {
  const {
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const { isOpen, SetisOpen } = useState(true);

  return (
    <form className="px-5 text-start test" onChange={() => {}}>
      <SidebarTitle title="Sorting" />
      <div className="flex bg-white h-11 items-center rounded-md px-3 py-2">
        <Image className="barChart" src={barChart} alt={"barChart"} />
        <select value={"1"} className="w-full ml-4 outline-none">
          <option>--Select--</option>
          <option value="2">One</option>
          <option value="3">Two</option>
        </select>
      </div>
      <SidebarTitle title="Filter" />
      <div className=" text-sm ">Book Title</div>
      <div className="flex h-11 items-center bg-white my-4 px-3 rounded-md">
        <Image className="sreach" src={sreach} alt={"sreach"} />
        <input
          className="outline-none w-full ml-2"
          type="text"
          value=""
          placeholder="Search by book title"
        />
      </div>
      <div className=" text-sm mb-4 flex justify-between">
        Year
        <Image className="chevronUp" src={chevronUp} alt={"chevronUp"} />
      </div>
      <div className="flex">
        <input
          className="w-1/2 mr-3"
          type="date"
          id="time"
          min="1995-01-01"
          max="2060-01-06"
        />
        <input
          className="w-1/2"
          type="date"
          id="time"
          min="1995-01-01"
          max="2060-01-06"
        />
      </div>
      <div className=" text-sm my-4 flex justify-between">
        Author
        <Image className="chevronUp" src={chevronUp} alt={"chevronUp"} />
      </div>
      <div className="flex h-11 items-center bg-white mb-5 rounded-md">
        <Image className="search" src={sreach} alt={"sreach"} />
        <input
          className="outline-none w-full ml-2"
          type="text"
          value=""
          placeholder="Search by author"
        />
      </div>
      <div className=" py-3 pl-2 pr-5 bg-white rounded-md">
        <div className="filter w-full overflow-y-scroll h-272 flex items-start flex-col ">
          <div className="flex items-center pb-3">
            <input type="checkbox" className="mr-5" />
            Auther
            <br />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-7">
        <SidebarButton buttonBody="Reset" />
      </div>
    </form>
  );
}
