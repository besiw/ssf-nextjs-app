import Header from "@/components/Header";
import { useTranslations } from "next-intl";
import Image from "next/image";
import heroImage from "../../assets/img/intl_icon.png";
// import BooksNotes from "../../../components/book/BooksNotes";
import BooksTitle from "../../../components/book/BooksTitle";

import MainTemplate from "@/components/MainTemplate";
import BookList from "@/app/[locale]/books/widgets/BooksList";
import FilterSide from "@/app/[locale]/books/widgets/FilterSide";
import BooksTitle from "@/app/[locale]/books/widgets/SidebarBut";
export default function Home() {
  return (
    <div>
      <BooksTitle />
      {/* <BooksNotes /> */}
    </div>
  );
  return (
    <MainTemplate
      TopSection={<BooksTitle />}
      LeftColumn={<FilterSide />}
      MainSection={<BookList />}
    />
  );
}
