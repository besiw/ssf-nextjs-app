"use client";
import { useState } from "react";
import Header from "./parts/HiddenTreasureHeader";
import Filter from "./parts/Filter";
import BooksAnnotate from "./parts/BooksAnnotate/BooksAnnotate";
import booksAnnotateData, {
  booksAnnotateDate,
} from "@/app/mockData/allBooksAnnotate";
import { cormorant_Garamond } from "@/options/font";

export default function Home() {
  const [showFilter, setShowFilter] = useState(false);
  const handleFilterClick = () => {
    setShowFilter(!showFilter);
  };

  return (
    <>
      <Header onFilterClick={handleFilterClick} showFilter={showFilter} />
      <div className="w-full flex">
        {showFilter && (
          <div className="w-full md:w-64 xl:w-80">
            <Filter />
          </div>
        )}
        {!showFilter && (
          <div className=" md:hidden mx-auto flex-1 ">
            <div
              className={`pb-3 pl-5 text-2xl  font-semibold ${cormorant_Garamond.className}`}>
              <span>{booksAnnotateDate.booksName} </span>
              <span>{booksAnnotateDate.year}</span>
              <span className=" text-PrimaryColor"> / </span>
              <span>{booksAnnotateDate.moon}</span>
            </div>
            <BooksAnnotate annotate={booksAnnotateData} />
          </div>
        )}
        <div
          className={`hidden md:block mx-auto flex-1 md:max-w-3xl ${showFilter ? "" : "xl:max-w-5xl"}`}>
          <div
            className={`pb-7 text-2xl  font-semibold ${cormorant_Garamond.className}`}>
            <span>{booksAnnotateDate.booksName} </span>
            <span>{booksAnnotateDate.year}</span>
            <span className=" text-PrimaryColor"> / </span>
            <span>{booksAnnotateDate.moon}</span>
          </div>
          <BooksAnnotate
            annotate={booksAnnotateData}
            isFilterOpen={showFilter}
          />{" "}
        </div>
      </div>
    </>
  );
}
