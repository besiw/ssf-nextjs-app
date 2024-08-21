"use client";
import allBookMarks from "@/app/mockData/allBookMarks";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import BookMarks from "./BookMarkCard";

import Collectbooks from "./CollectbooksCard";
import { allViewRecommended } from "@/app/mockData/allRecommended";
import RecommendedArticle from "./recommendedArticleCard";

type TemplateProps = {
  title: string;
  className: string;
  content: JSX.Element;
};
function Template({ title, className, content }: TemplateProps) {
  return (
    <div className="flex-1 items-stretch  pr-5">
      <div className="flex pb-7">
        {title}
        <div className="flex w-full items-center pl-4 ">
          <hr className="w-full border-PrimaryColor " />
        </div>
      </div>
      <section className={`border rounded-xl px-7 w-full h-full ${className}`}>
        {content}
      </section>
    </div>
  );
}

export const ActivitiesDesktop = () => {
  const stringTools = useTranslations("tools");
  return (
    <Template
      className="border-PrimaryColor-12 bg-PrimaryColor-3"
      title={stringTools("Activities")}
      content={
        <>
          {allBookMarks.map((i, index) => {
            return <BookMarks {...i} key={index} />;
          })}
        </>
      }
    />
  );
};

export const RecommendedDesktop = () => {
  const stringTools = useTranslations("tools");
  return (
    <Template
      className="border bg-gray-75 dark:bg-PrimaryColor-3 dark:border-PrimaryColor-12"
      title={stringTools("Recommended")}
      content={
        <>
          {allViewRecommended.map((b, index) => {
            if (b.type === "book") {
              return <Collectbooks key={index} {...b.data} />;
            }
            if (b.type === "article") {
              return (
                <RecommendedArticle
                  key={index}
                  title={""}
                  month={""}
                  {...b.data}
                />
              );
            }
          })}
        </>
      }
    />
  );
};
