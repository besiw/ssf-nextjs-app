import MainTemplate from '@/components/MainTemplate';
import BookContent from './BookContent';
import BooksTitle from './BooksTitle';
export default function Home() {
	return (
		<MainTemplate
			TopSection={
				<BooksTitle
					bookTitle="Stykker og referater i fornyet utgave fra Skjulte Skatter av Johan
			O.Smith"
					bookAuthor="Kare J. Smith"
				/>
			}
			LeftColumn={<div />}
			RightColumn={<div />}
			MainSection={<BookContent />}
		/>
	);
}
