import { StaticImageData } from "next/image";
export type BookBasicType = {
  slug?: string;
  title?: string;
  img?: string | StaticImageData;
  author?: string;
  year: string;
};
export type BooksAnnotateDateType = {
  booksName: string;
  year: string;
  moon: string;
};
export interface BooksAnnotateType extends BooksAnnotateDateType {
  autor?: string;
  note?: string;
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
