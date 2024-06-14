"use client";
import { useState } from "react";
import Header from "./parts/HiddenTreasureHeader";
import Filter from "./parts/Filter";
import ArticleList from "./parts/ArticleList";
import ArticleListData, { ArticleListInfo } from "@/app/mockData/allArticles";

export default function Home() {
  const [showFilter, setShowFilter] = useState(false);
  const handleFilterClick = () => {
    setShowFilter(!showFilter);
  };

  return (
    <>
      <Header onFilterClick={handleFilterClick} showFilter={showFilter} />
      <main className="w-full flex">
        {showFilter && (
          <div className="w-full md:w-64 xl:w-80">
            <Filter />
          </div>
        )}
        {!showFilter && (
          <div className=" md:hidden mx-auto flex-1 ">
            <ArticleList info={ArticleListInfo} list={ArticleListData} />
          </div>
        )}
        <div
          className={`hidden md:block mx-auto flex-1 md:max-w-3xl ${showFilter ? "" : "xl:max-w-5xl"}`}>
          <ArticleList info={ArticleListInfo} list={ArticleListData} />
        </div>
      </main>
    </>
  );
}
