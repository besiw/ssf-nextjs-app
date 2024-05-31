import MainTemplate from '@/components/MainTemplate';
import BookContent from './BookContent';
import BooksTitle from './BooksTitle';
export default function Home() {
	return (
		<MainTemplate
			TopSection={<BooksTitle />}
			LeftColumn={<div />}
			rightColumn={<div />}
			MainSection={<BookContent />}
		/>
	);
}
