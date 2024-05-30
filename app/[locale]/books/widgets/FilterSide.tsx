"use client";

import { useForm } from "react-hook-form";
import barChart from "@/assets/svg/chartbar-outline-PrimaryColor.svg";
import sreach from "@/assets/svg/search-outline-PrimaryColor.svg";
import chevronUp from "@/assets/svg/chevronUp-outline-PrimaryColor.svg";
import "./package/Sidebar.css";

import Image from "next/image";
import SidebarTitle from "./package/SidebarTitle";
import SidebarButton from "./package/SidebarButton";
export default function Sidebar() {
  const {
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form className="px-5 text-start test">
      <SidebarTitle title="Sorting" />
      <div className="flex bg-white h-11 items-center rounded-md px-3 py-2">
        <Image className="barChart" src={barChart} alt={"barChart"} />
        <select className="w-full ml-4 outline-none">
          <option selected>--Select--</option>
          <option value="">One</option>
          <option value="">Two</option>
          <option value="">Three</option>
          <option value="">Four</option>
          <option value="">Five</option>
          <option value="">Six</option>
          <option value="">Seven</option>
          <option value="">Eight</option>
          <option value="">Nine</option>
          <option value="">Ten</option>
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
          <div className="flex items-center pb-3">
            <input type="checkbox" className="mr-5" />
            Auther
            <br />
          </div>
          <div className="flex items-center pb-3">
            <input type="checkbox" className="mr-5" />
            Auther
            <br />
          </div>
          <div className="flex items-center pb-3">
            <input type="checkbox" className="mr-5" />
            Auther
            <br />
          </div>
          <div className="flex items-center pb-3">
            <input type="checkbox" className="mr-5" />
            Auther
            <br />
          </div>
          <div className="flex items-center pb-3">
            <input type="checkbox" className="mr-5" />
            Auther
            <br />
          </div>
          <div className="flex items-center pb-3">
            <input type="checkbox" className="mr-5" />
            Auther
            <br />
          </div>
          <div className="flex items-center pb-3">
            <input type="checkbox" className="mr-5" />
            Auther
            <br />
          </div>
          <div className="flex items-center pb-3">
            <input type="checkbox" className="mr-5" />
            Auther
            <br />
          </div>
          <div className="flex items-center pb-3">
            <input type="checkbox" className="mr-5" />
            Auther
            <br />
          </div>
          <div className="flex items-center pb-3">
            <input type="checkbox" className="mr-5" />
            Auther
            <br />
          </div>
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
