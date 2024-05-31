import Header from "@/components/Header";
import { useTranslations } from "next-intl";
import Image from "next/image";
import heroImage from "../../assets/img/intl_icon.png";

import MainTemplate from "@/components/MainTemplate";
import BookList from "@/app/[locale]/books/widgets/BooksList";
import FilterSide from "@/app/[locale]/books/widgets/FilterSide";
import BooksTitle from "@/components/book/BooksTitle";
export default function Home() {
  return (
    <MainTemplate
      TopSection={<BooksTitle />}
      LeftColumn={<FilterSide />}
      MainSection={<BookList />}
    />
  );
}
