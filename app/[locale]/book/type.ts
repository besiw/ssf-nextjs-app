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
	id: number;
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
