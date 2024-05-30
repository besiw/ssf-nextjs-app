"use client";

import React from "react";
import book1 from "@/assets/img/book1.png";
import Image from "next/image";
import Books from "./package/Books";
export default function Bookbody() {
  return (
    <>
      <div
        className="flex mx-auto max-w-950 0.5sm:w-354 1.5lg:w-734 1.6lg:w-950 flex-wrap overflow-y-scroll "
        style={{ height: "calc(100vh - 56px)" }}>
        {[
          {
            img: book1,
            text: "The hunt for Sigurd Jorsalfare",
            author: "Morten, Øystein",
            age: "1971",
          },
          {
            img: book1,
            text: "The hunt for Sigurd Jorsalfare",
            author: "Morten, Øystein",
            age: "1971",
          },
          {
            img: book1,
            text: "The hunt for Sigurd Jorsalfare",
            author: "Morten, Øystein",
            age: "1971",
          },
          {
            img: book1,
            text: "Stykker og referater i fornyet utgave fra Skjulte Skatter av Johan O. Smith",
            author: "Morten, Øystein",
            age: "1971",
          },
          {
            img: book1,
            text: "Apostelen ",
            author: "Morten, Øystein",
            age: "1971",
          },
          {
            img: book1,
            text: "The hunt for Sigurd Jorsalfare",
            author: "Morten, Øystein",
            age: "1971",
          },
          {
            img: book1,
            text: "The hunt for Sigurd Jorsalfare",
            author: "Morten, Øystein",
            age: "1971",
          },
          {
            img: book1,
            text: "The hunt for Sigurd Jorsalfare",
            author: "Morten, Øystein",
            age: "1971",
          },
          {
            img: book1,
            text: "The hunt for Sigurd Jorsalfare",
            author: "Morten, Øystein",
            age: "1971",
          },
          {
            img: book1,
            text: "The hunt for Sigurd Jorsalfare",
            author: "Morten, Øystein",
            age: "1971",
          },
          {
            img: book1,
            text: "The hunt for Sigurd Jorsalfare",
            author: "Morten, Øystein",
            age: "1971",
          },
          {
            img: book1,
            text: "The hunt for Sigurd Jorsalfare",
            author: "Morten, Øystein",
            age: "1971",
          },
          {
            img: book1,
            text: "The hunt for Sigurd Jorsalfare",
            author: "Morten, Øystein",
            age: "1971",
          },
          {
            img: book1,
            text: "The hunt for Sigurd Jorsalfare",
            author: "Morten, Øystein",
            age: "1971",
          },
          {
            img: book1,
            text: "The hunt for Sigurd Jorsalfare",
            author: "Morten, Øystein",
            age: "1971",
          },
          {
            img: book1,
            text: "The hunt for Sigurd Jorsalfare",
            author: "Morten, Øystein",
            age: "1971",
          },
          {
            img: book1,
            text: "The hunt for Sigurd Jorsalfare",
            author: "Morten, Øystein",
            age: "1971",
          },
          {
            img: book1,
            text: "The hunt for Sigurd Jorsalfare",
            author: "Morten, Øystein",
            age: "1971",
          },
          {
            img: book1,
            text: "The hunt for Sigurd Jorsalfare",
            author: "Morten, Øystein",
            age: "1971",
          },
          {
            img: book1,
            text: "The hunt for Sigurd Jorsalfare",
            author: "Morten, Øystein",
            age: "1971",
          },
        ].map((i, index) => {
          return (
            <Books key={index} path={i.img} text={i.text} author={i.author} />
          );
        })}
      </div>
    </>
  );
}
