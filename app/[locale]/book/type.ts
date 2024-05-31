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

export type HighLightType = {
	blkId: number;
	stcId: number;
	color?: string;
};
export type NoteType = {
	bookId: number;
	chapId: number;
	blkId: number;
	stcId: number;
	author: {
		id: number;
		name: string;
	};
	c: string[];
};

export type hlMapType = {
	[key: number]: {
		[key: number]: string;
	};
};

export type ntMapType = {
	[key: number]: {
		[key: number]: NoteType;
	};
};
