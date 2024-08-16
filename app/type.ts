import { StaticImageData } from 'next/image';

export type ViewRecommendedType = {
	type: 'article' | 'book';
	data: BookBasicType | ArticleType;
};

export type Book = {
	book_id: number;
	name: string;
	date_published: string;
	author_ids: number[];
	isbn: string | null;
	cover_id: string | null;
};

export type BookBasicType = {
	slug?: string;
	title?: string;
	img?: string | StaticImageData;
	author?: string;
	year: string;
};
export type ArticleListInfoType = {
	title: string;
	year: string;
	month: string;
	order?: number;
};
export interface ArticleType extends ArticleListInfoType {
	author?: string;
	excerpt?: string;
	content?: {
		type: string;
		c: string;
	}[];
}

export interface contentDataType {
	chapter: {
		id: number;
		title: string;
	};
	c: {
		id: number;
		type: string;
		c: {
			id: number;
			c: string;
		}[];
	}[];
}

export type highlightType = {
	[pId: string]: {
		[sId: string]: string | undefined;
	};
};

export type noteType = {
	id?: string;
	author: string;
	color: string;
	title?: string;
	content: string;
	location: {
		[cId: string]: highlightType;
	};
};

export type hlMapType = {
	[key: number]: {
		[key: number]: string;
	};
};

export type ntMapType = {
	[key: number]: {
		[key: number]: noteType;
	};
};
export type bookMarkTpye = {
	title: string;
	note: string;
	bookContent: string;
	color: string;
	img?: string | StaticImageData;
	time: string;
};
