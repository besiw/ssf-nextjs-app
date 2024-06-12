import React from 'react';
import Books from './BookThumbnail';
import { BookBasicType } from '@/app/type';
type BooksListProps = {
	isFilterOpen?: boolean;
	books: BookBasicType[];
};
const BooksList: React.FC<BooksListProps> = ({ isFilterOpen, books }) => {
	return (
		<div
			className={`pl-4  md:pl-0 flex mx-auto flex-wrap pb-20 z-0 ${isFilterOpen ? '' : ''}`}
		>
			{books.map((book, index) => {
				return (
					<Books
						key={index}
						{...book}
						width={isFilterOpen ? ' w-1/2 2xl:w-1/3' : ' xl:w-1/3 '}
					/>
				);
			})}
		</div>
	);
};

export default BooksList;
