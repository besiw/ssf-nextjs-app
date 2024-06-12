'use client';
import { useState } from 'react';
import Header from './parts/BooksHeader';
import Filter from './parts/Filter';
import BookList from './parts/BooksList';
import bookData from '@/app/mockData/allbooks';

export default function Books() {
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
					<div className=" md:hidden mx-auto flex-1">
						<BookList books={bookData} isFilterOpen={showFilter} />{' '}
					</div>
				)}
				<div
					className={`hidden md:block mx-auto flex-1 md:max-w-3xl ${showFilter ? '' : 'xl:max-w-5xl'}`}
				>
					<BookList books={bookData} isFilterOpen={showFilter} />{' '}
				</div>
			</div>
		</>
	);
}
