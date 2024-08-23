import React from 'react';
import Books from './BookThumbnail';
import { Book } from '@/app/type';

type BooksListProps = {
	isFilterOpen?: boolean;
	books: Book[];
};
const BooksList: React.FC<BooksListProps> = ({ isFilterOpen, books }) => {
	return (
		<ol
			className={`pl-4  md:pl-0 flex mx-auto flex-wrap z-0 ${isFilterOpen ? '' : ''}`}
		>
			{books.map((book, index) => {
				return (
					<Books
						key={index}
						{...book}
						width={isFilterOpen ? ' w-1/2' : ' xl:w-1/3 '}
					/>
				);
			})}
		</ol>
	);
};

export default BooksList;
