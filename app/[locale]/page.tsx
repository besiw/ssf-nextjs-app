import Header from '@/components/Header';
import { useTranslations } from 'next-intl';
// import BookFilter from "@/app/[locale]/books/widgets/Sidebar/Sidebar";
import BookFilter2 from '@/app/[locale]/books/widgets/FilterSide';
import Content from '@/app/[locale]/book/BookContent';
import Image from 'next/image';
import heroImage from '../../assets/img/intl_icon.png';
import Heart from './books/widgets/package/Heart';

export default function Home() {
	const t = useTranslations('Home');

	// Extract the navigation object keys from the translations
	const navigationKeys = Object.keys(t.raw('navigation'));

	return (
		<div className="w-full h-screen flex flex-col">
			<div className="w-full">
				<Heart />
			</div>
			<div className="flex flex-row flex-1">
				<div className="w-full md:w-64 md:min-w-64 lg:w-80 lg:min-w-80 bg-gray-75 dark:bg-black-400 mx-4 rounded-r-3xl">
					{/* <BookFilter2 /> */}
				</div>
				<div className="flex-1">
					<Content />
				</div>
				<div className="w-full md:w-64 md:min-w-64 lg:w-80 lg:min-w-80 bg-gray-75 dark:bg-black-400 mx-4 rounded-r-3xl">
					{/* <BookFilter2 /> */}
				</div>
			</div>
		</div>
	);
}
