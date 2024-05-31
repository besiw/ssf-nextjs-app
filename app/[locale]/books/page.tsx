import MainTemplate from '@/components/MainTemplate';
import BookList from '@/app/[locale]/books/widgets/BooksList';
import FilterSide from '@/app/[locale]/books/widgets/FilterSide';

export default function Home() {
	return (
		<MainTemplate
			TopSection={<div></div>}
			LeftColumn={<FilterSide />}
			MainSection={<BookList />}
		/>
	);
}
