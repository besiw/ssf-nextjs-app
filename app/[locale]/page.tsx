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
