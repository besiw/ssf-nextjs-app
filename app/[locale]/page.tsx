import MainTemplate from "@/components/MainTemplate";
import BookList from "@/app/[locale]/books/widgets/BooksList";
import FilterSide from "@/app/[locale]/books/widgets/FilterSide";
import BooksTitle from "@/app/[locale]/books/widgets/SidebarBut";
export default function Home() {
  return (
    <MainTemplate
      TopSection={<BooksTitle />}
      LeftColumn={<FilterSide />}
      MainSection={<BookList />}
    />
  );
}
