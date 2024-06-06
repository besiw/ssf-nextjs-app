'use client';
import { useState } from 'react';
import MainTemplate from '@/components/MainTemplate';
import BookList from '@/app/[locale]/books/widgets/BooksList';
import FilterSide from '@/app/[locale]/books/widgets/FilterSide';
import BooksFilter from '@/app/[locale]/books/widgets/BooksFilter';
export default function Home() {
	const [showFilter, setShowFilter] = useState(false);

	return (
		<MainTemplate
			scroll
			TopSection={
				showFilter && (
					<BooksFilter
						onFilterClick={() => {
							setShowFilter(!showFilter);
						}}
					/>
				)
			}
			LeftColumn={<FilterSide />}
			MainSection={<BookList isFilterOpen />}
		/>
	);
}
