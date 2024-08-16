"use client";

import { useTranslations } from "next-intl";
import Dropdown from "@/components/Dropdown";
import barChart from "@/assets/svg/chartbar-outline-PrimaryColor.svg";
import chevrondowm from "@/assets/svg/chevronDoubleDown-white.svg";
import search from "@/assets/svg/search-outline-PrimaryColor.svg";

import SelectCheckbox from "../SelectCheckbox";
import "./Sidebar.css";
import TextInput from "../Input";

import { varta, inter } from "@/options/font";

export type FilterDataType = {
  sorting: string;
  searchText?: string;
  fromYear?: string;
  fromMonth?: string;
  toYear?: string;
  toMonth?: string;
  authors: string[];
};

export const defaultFilterData: FilterDataType = {
  sorting: "relevance",
  searchText: "",
  fromYear: undefined,
  fromMonth: undefined,
  toYear: undefined,
  toMonth: undefined,
  authors: [],
};

export type FilterOptionsType = {
  authors: string[];
  yearOptions: string[];
};
export interface FilterProps extends FilterOptionsType {
  setFilterData: (data: FilterDataType) => void;
  filterData: FilterDataType;
}

const Sidebar: React.FC<FilterProps> = ({
  yearOptions,
  authors,
  setFilterData,
  filterData,
}) => {
  const stringTools = useTranslations("tools");

  const sortingOptions = [
    { name: stringTools("relevance"), id: "relevance", imageUrl: barChart },
    { name: stringTools("latest"), id: "latest", imageUrl: chevrondowm },
  ];

  const yearOptionsUpdated = yearOptions.map((a) => ({ name: a, id: a }));
  const fromYearIndex = yearOptions.findIndex((y) => y === filterData.fromYear);
  const toYearOptions =
    fromYearIndex > -1
      ? yearOptionsUpdated.slice(fromYearIndex)
      : yearOptionsUpdated;
  const authorOptions = authors.map((a) => ({
    id: a,
    name: a,
    checked: false,
  }));

  const handleSortingSelect = (id: string) => {
    setFilterData({ ...filterData, sorting: id });
  };

  const handleSelectFromYear = (year: string) => {
    setFilterData({
      ...filterData,
      fromYear: year,
      toYear: yearOptions[yearOptions.length - 1],
    });
  };

  const handleSelectToYear = (year: string) => {
    setFilterData({ ...filterData, toYear: year });
  };

  const handleSelectAuthor = ({
    id,
    checked,
  }: {
    id: string;
    checked: boolean;
  }) => {
    let authorUpdate = [...filterData.authors];
    const index = authorUpdate.findIndex((a) => a === id);

    if (checked && index === -1) {
      authorUpdate = [...authorUpdate, id];
    } else {
      authorUpdate = authorUpdate.filter((a) => a !== id);
    }
    setFilterData({ ...filterData, authors: authorUpdate });
  };

  const handleSearch = (text: string) => {
    setFilterData({ ...filterData, searchText: text });
  };

  return (
    <div className={`relative pr-4 z-20 xl:pl-4 ${varta.className}`}>
      <form className="px-5 text-start bg-gray-75 dark:bg-black-background rounded-r-3xl overflow-hidden">
        <SidebarTitle title={stringTools("sorting")} />
        <Dropdown
          id="sorting"
          data={sortingOptions}
          hasImage
          style="w-full"
          selectedId={filterData.sorting}
          onSelect={handleSortingSelect}
        />
        <SidebarTitle title={stringTools("search")} />
        <TextInput
          img={{ imgUrl: search, imgAlt: "search" }}
          onChange={handleSearch}
          value={filterData.searchText}
          id="search"
          placeholder={stringTools("search")}
        />

        <SidebarTitle title={stringTools("year")} />
        <div className={`mb-4 grid grid-cols-2 gap-2 ${varta.className}`}>
          <Dropdown
            id="fromYear"
            title={stringTools("from")}
            data={yearOptionsUpdated}
            style="w-full "
            selectedId={filterData.fromYear}
            onSelect={handleSelectFromYear}
          />
          <Dropdown
            id="toYear"
            title={stringTools("to")}
            data={toYearOptions}
            style="w-full"
            selectedId={filterData.toYear}
            onSelect={handleSelectToYear}
          />
        </div>
        <SidebarTitle title={stringTools("author")} />
        <SelectCheckbox
          id="byAuthor"
          placeholder={stringTools("byAuthor")}
          handleSelect={handleSelectAuthor}
          selected={filterData.authors}
          options={authorOptions}
        />
        <div
          className={`flex justify-center items-center mt-7`}
          onClick={() => {
            setFilterData(defaultFilterData);
          }}>
          <SidebarButton buttonBody={stringTools("reset")} />
        </div>
      </form>
    </div>
  );
};

export default Sidebar;

type SidebarTitleProps = {
  title?: string;
};
const SidebarTitle: React.FC<SidebarTitleProps> = ({ title }) => {
  return (
    <>
      <div
        className={`flex mt-8 mb-4 dark:text-PrimaryColor-bgDark86 ${inter.className}`}>
        {title}
        <div className="flex w-full items-center pl-4 dark:bg-black-background">
          <hr className="w-full dark:border-PrimaryColor-bgDark12" />
        </div>
      </div>
    </>
  );
};

type SidebarButtonProps = {
  buttonBody?: string;
};
const SidebarButton: React.FC<SidebarButtonProps> = ({ buttonBody }) => {
  return (
    <button className=" w-full h-11 border flex items-center justify-center bg-white dark:bg-black-background text-PrimaryColor border-PrimaryColor rounded-full mb-7 pt-1">
      {buttonBody}
    </button>
  );
};
