"use client";

import BooksTitle from "./parts/BookTitle";
import BookContent from "./parts/BookContent";
import { useState, useRef } from "react";
import { useDimensions } from "@/helpers/useDimensions";

export default function Book() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width: fullWidth } = useDimensions(containerRef);

  return (
    <div ref={containerRef} className="w=full">
      <BooksTitle
        fullWidth={fullWidth}
        bookTitle="Stykker og referater i fornyet utgave fra Skjulte Skatter av JohanO.Smith"
        bookAuthor="Kare J. Smith"
      />
      <div className="mx-auto w-full flex justify-center lg:h-screen lg:max-h-screen lg:overflow-y-scroll px-4">
        <BookContent fullWidth={fullWidth} />
      </div>
    </div>
  );
}
