'use client';

import React from 'react';
import book1 from '@/assets/img/book1.png';
import Books from '../../../../components/book/Books';

type BooksListProps = {
	isFilterOpen?: boolean;
};
const BooksList: React.FC<BooksListProps> = ({ isFilterOpen }) => {
	console.log(isFilterOpen);
	return (
		<div className="w-full">
			<div
				className={`flex mx-auto flex-wrap pb-20`}
				style={{
					maxWidth: isFilterOpen ? 700 : 1100,
				}}
			>
				{[
					{
						img: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						year: '1971',
					},
					{
						img: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						year: '1971',
					},
					{
						img: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						year: '1971',
					},
					{
						img: book1,
						text: 'Stykker og referater i fornyet utgave fra Skjulte Skatter av Johan O. Smith',
						author: 'Morten, Øystein',
						year: '1971',
					},
					{
						img: book1,
						text: 'Apostelen ',
						author: 'Morten, Øystein',
						year: '1971',
					},
					{
						img: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						year: '1971',
					},
					{
						img: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						year: '1971',
					},
					{
						img: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						year: '1971',
					},
					{
						img: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						year: '1971',
					},
					{
						img: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						year: '1971',
					},
					{
						img: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						year: '1971',
					},
					{
						img: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						year: '1971',
					},
					{
						img: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						year: '1971',
					},
					{
						img: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						year: '1971',
					},
					{
						img: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						year: '1971',
					},
					{
						img: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						year: '1971',
					},
					{
						img: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						year: '1971',
					},
					{
						img: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						year: '1971',
					},
					{
						img: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						year: '1971',
					},
					{
						img: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						year: '1971',
					},
				].map((book, index) => {
					return (
						<Books
							key={index}
							path={book.img}
							{...book}
							width={isFilterOpen ? ' lg:w-1/2 ' : ' lg:w-1/3 '}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default BooksList;
