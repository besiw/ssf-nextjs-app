import book1 from '@/assets/img/book1.png';

import { BookBasicType, ArticleType } from '@/app/type';

type ViewActivityType = {
	type: 'article' | 'book';
	data: BookBasicType | ArticleType;
};
export const allViewActivity: ViewActivityType[] = [
	{
		type: 'book',
		data: {
			img: book1,
			slug: 'book-name1',
			title: 'The hunt for Sigurd Jorsalfare',
			author: 'Morten, Øystein',
			year: '1971',
		},
	},
	{
		type: 'article',
		data: {
			title: 'Stammen og grenene',
			year: '1999',
			month: '09',
			order: 1,
			author: 'Aksel J. Smith',
			excerpt:
				'Lorem ipsum dolor sit amet consectetur. Sed volutpat tortor accumsanet ut. Enim nulla venenatis luctus id et aliquet aliquam ante. Lacusfringilla bibendum venenatis Odio sodales lacus fames diam gravida sit lacus in sit. Magna magna elementum id tellus in feugiat cursus orci. Eleifend ut tempor bibendum et scelerisque et mattis...',
		},
	},
	{
		type: 'book',
		data: {
			img: book1,
			slug: 'book-name1',
			title: 'The hunt for Sigurd Jorsalfare',
			author: 'Morten, Øystein',
			year: '1971',
		},
	},
];
const books: BookBasicType[] = [
	{
		img: book1,
		slug: 'book-name1',
		title: 'The hunt for Sigurd Jorsalfare',
		author: 'Morten, Øystein',
		year: '1971',
	},
	{
		img: book1,
		slug: 'book-name2',
		title: 'The hunt for Sigurd Jorsalfare',
		author: 'Morten, Øystein',
		year: '1971',
	},
	{
		img: book1,
		slug: 'book-name3',
		title: 'The hunt for Sigurd Jorsalfare',
		author: 'Morten, Øystein',
		year: '1971',
	},
	{
		img: book1,
		slug: 'book-name4',
		title:
			'Stykker og referater i fornyet utgave fra Skjulte Skatter av Johan O. Smith',
		author: 'Morten, Øystein',
		year: '1971',
	},
	{
		img: book1,
		slug: 'book-name5',
		title: 'Apostelen ',
		author: 'Morten, Øystein',
		year: '1971',
	},
	{
		img: book1,
		slug: 'book-name6',
		title: 'The hunt for Sigurd Jorsalfare',
		author: 'Morten, Øystein',
		year: '1971',
	},
	{
		img: book1,
		slug: 'book-name7',
		title: 'The hunt for Sigurd Jorsalfare',
		author: 'Morten, Øystein',
		year: '1971',
	},
	{
		img: book1,
		slug: 'book-name8',
		title: 'The hunt for Sigurd Jorsalfare',
		author: 'Morten, Øystein',
		year: '1971',
	},
	{
		img: book1,
		slug: 'book-name9',
		title: 'The hunt for Sigurd Jorsalfare',
		author: 'Morten, Øystein',
		year: '1971',
	},
	{
		img: book1,
		slug: 'book-name10',
		title: 'The hunt for Sigurd Jorsalfare',
		author: 'Morten, Øystein',
		year: '1971',
	},
	{
		img: book1,
		slug: 'book-name11',
		title: 'The hunt for Sigurd Jorsalfare',
		author: 'Morten, Øystein',
		year: '1971',
	},
	{
		img: book1,
		slug: 'book-name12',
		title: 'The hunt for Sigurd Jorsalfare',
		author: 'Morten, Øystein',
		year: '1971',
	},
	{
		img: book1,
		slug: 'book-name13',
		title: 'The hunt for Sigurd Jorsalfare',
		author: 'Morten, Øystein',
		year: '1971',
	},
	{
		img: book1,
		slug: 'book-name14',
		title: 'The hunt for Sigurd Jorsalfare',
		author: 'Morten, Øystein',
		year: '1971',
	},
	{
		img: book1,
		slug: 'book-name15',
		title: 'The hunt for Sigurd Jorsalfare',
		author: 'Morten, Øystein',
		year: '1971',
	},
	{
		img: book1,
		slug: 'book-name16',
		title: 'The hunt for Sigurd Jorsalfare',
		author: 'Morten, Øystein',
		year: '1971',
	},
	{
		img: book1,
		slug: 'book-name17',
		title: 'The hunt for Sigurd Jorsalfare',
		author: 'Morten, Øystein',
		year: '1971',
	},
	{
		img: book1,
		slug: 'book-name28',
		title: 'The hunt for Sigurd Jorsalfare',
		author: 'Morten, Øystein',
		year: '1971',
	},
	{
		img: book1,
		slug: 'book-name19',
		title: 'The hunt for Sigurd Jorsalfare',
		author: 'Morten, Øystein',
		year: '1971',
	},
	{
		img: book1,
		slug: 'book-name20',
		title: 'The hunt for Sigurd Jorsalfare',
		author: 'Morten, Øystein',
		year: '1971',
	},
];

export default books;
