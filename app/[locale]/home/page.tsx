"use client";
import { Metadata } from "next";
import Header from "./parts/ArticleTitle";
import { useState } from "react";
import BookMarks from "./parts/BookMarks";
import bookmark from "@/assets/svg/bookmark-light-bg-square-PrimaryColor.svg";
import chartbar from "@/assets/svg/chartbar-outline-black.svg";
import allBookMarks from "@/app/mockData/allBookMarks";
export default function Home() {
  const [showFilter, setShowFilter] = useState(false);
  const handleFilterClick = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div>
      <Header onFilterClick={handleFilterClick} showFilter={showFilter} />
      <div className="px-5">
        <h2 className="pb-8">Activities</h2>
        <div className="w-full bg-PrimaryColor-12 pb-11 rounded-xl ">
          {allBookMarks.map((i, index) => {
            return (
              <>
                <BookMarks
                  title={i.title}
                  note={i.note}
                  bookContent={i.bookContent}
                  color={i.color}
                  icon={i.icon}
                  time={i.time}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
