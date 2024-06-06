"use client";
import { useState } from "react";
import MainTemplate from "@/components/MainTemplate";
import BookList from "@/app/[locale]/books/widgets/BooksList";
import FilterSide from "@/app/[locale]/books/widgets/FilterSide";

export default function Home() {
  const [showFilter, setShowFilter] = useState(false);

<<<<<<< HEAD
  return (
    <MainTemplate
      TopSection={<div></div>}
      LeftColumn={<FilterSide />}
      MainSection={<BookList />}
    />
  );
=======
	return (
		<MainTemplate
			scroll
			TopSection={<div></div>}
			LeftColumn={<FilterSide />}
			MainSection={<BookList isFilterOpen />}
		/>
	);
>>>>>>> a26fbbf52031521a99be0fde4c7f9d6c5e1d0620
}
