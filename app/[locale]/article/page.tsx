"use client";

import { useState } from "react";
import Header from "./parts/ArticleTitle";
import ArticleContent from "./parts/ArticleContent";
import ArticleBottoms from "./parts/ArticleBottom";
export default function Home() {
  const [showFilter, setShowFilter] = useState(false);
  const handleFilterClick = () => {
    setShowFilter(!showFilter);
  };

  return (
    <>
      <Header onFilterClick={handleFilterClick} showFilter={showFilter} />
      <ArticleContent FilteredName={""} year={""} moon={""} title={""} />
      <ArticleBottoms
        nextBook={""}
        nextBookAuthor={""}
        PreviousBook={""}
        PreviousAuthor={""}
      />
    </>
  );
}
