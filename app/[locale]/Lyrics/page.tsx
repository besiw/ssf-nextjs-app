"use client";

import { useState } from "react";
import SearchResultsHeader from "./parts/SearchResultsHeader";
import LyricsContent from "./parts/LyricsContent";
import allLyics, { allMusicianType } from "@/app/mockData/allLyics";

export default function Home() {
  const [showFilter, setShowFilter] = useState(false);
  const handleFilterClick = () => {
    setShowFilter(!showFilter);
  };
  return (
    <div>
      <SearchResultsHeader
        onFilterClick={handleFilterClick}
        showFilter={showFilter}
      />
      <LyricsContent list={allLyics} info={allMusicianType} />
    </div>
  );
}
