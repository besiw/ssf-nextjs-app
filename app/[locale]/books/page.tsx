'use client';

import { useState } from 'react';
import useSWR from 'swr';
import Header from './parts/BooksHeader';
import BookList from './parts/BooksList';
import { Book } from '@/app/type';
import Filter, {
	defaultFilterData,
	FilterOptionsType,
} from '@/components/Filter';
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Books() {
	const [showFilter, setShowFilter] = useState(true);
	const [filterData, setfilterData] = useState(defaultFilterData);
	const { data: books, error } = useSWR<Book[]>(
		'https://api-2.dev.sssf.life/v1/en/books',
		fetcher
	);

	const handleFilterClick = () => {
		setShowFilter(!showFilter);
	};
	const filterBooks = (list: Book[] | undefined) => {
		if (list) {
			const filtered = list.filter((b) => {
				let matchSearchText =
					typeof filterData.searchText === 'string' ? false : true;

				if (typeof filterData.searchText === 'string') {
					if (filterData.searchText === '') {
						matchSearchText = true;
					} else {
						matchSearchText = b.name
							.toLowerCase()
							.includes(filterData.searchText.trim().toLowerCase());
					}
				}

				const year = Number(b.date_published.substring(0, 4));

				let matchFromYear =
					typeof filterData.fromYear !== 'undefined' ? false : true;
				if (filterData.fromYear) {
					matchFromYear = Number(filterData.fromYear) - 1 < year;
				}

				let matchToYear =
					typeof filterData.toYear !== 'undefined' ? false : true;

				if (filterData.toYear) {
					matchToYear = year < Number(filterData.toYear) + 1;
				}

				let matchAuthor = filterData.authors.length > 0 ? false : true;
				if (filterData.authors.length > 0) {
					filterData.authors.map((a) => {
						const found = `${b.author_ids}`.includes(a);
						if (found) {
							matchAuthor = true;
						}
					});
				}

				return matchSearchText && matchFromYear && matchToYear && matchAuthor;
			});
			return filtered;
		} else {
			return [];
		}
	};
	const authorMap = {};
	const yearMap = {};

	const getFilterOptions = (list: Book[]) => {
		list.map((b) => {
			b.author_ids.map((name) => (authorMap[name] = true));
			yearMap[b.date_published.substring(0, 4)] = true;
		});
		return {
			authors: Object.keys(authorMap),
			yearOptions: Object.keys(yearMap),
		};
	};

	let filterOptions: FilterOptionsType = {
		authors: [],
		yearOptions: [],
	};

	const filteredList = filterBooks(books);
	filterOptions = getFilterOptions(books || []);
	return (
		<>
			<Header onFilterClick={handleFilterClick} showFilter={showFilter} />
			<div className="w-full flex">
				{showFilter && (
					<div className="w-full md:w-64 xl:w-80">
						<Filter
							setFilterData={setfilterData}
							filterData={filterData}
							{...filterOptions}
						/>
					</div>
				)}

				{!showFilter && (
					<div className=" md:hidden mx-auto flex-1 pb-24">
						<BookList books={filteredList} isFilterOpen={showFilter} />{' '}
					</div>
				)}
				<div
					className={`hidden md:block mx-auto flex-1 pb-36 md:max-w-3xl ${showFilter ? '' : 'xl:max-w-5xl'}`}
				>
					<BookList books={filteredList} isFilterOpen={showFilter} />{' '}
				</div>
			</div>
		</>
	);
}
