import { useState } from 'react';
import MainTemplate from '@/components/MainTemplate';
import BookList from '@/app/[locale]/books/widgets/BooksList';
import FilterSide from '@/app/[locale]/books/widgets/FilterSide';

export default function Home() {
	const [showFilter, setShowFilter] = useState(false);

	return (
		<MainTemplate
			scroll
			TopSection={<div></div>}
			LeftColumn={<FilterSide />}
			MainSection={<BookList isFilterOpen />}
		/>
	);
}
