'use client';
import './content.css';
import { useRef } from 'react';
import { useDimensions } from '@/components/useDimensions';
import { useWindowDimensions } from '@/components/useWindowDimensions';
import InvisibleBlock from './BookPagerInvisibleBlock';
import BookPager from './BookPager';
import { contentData } from '@/app/mockData/bookContent';
import { useSearchParams } from 'next/navigation';
import { useRouter, usePathname } from '@/middleware';
export default function Content() {
	const ref = useRef(null);
	const router = useRouter();
	const searchParams = useSearchParams();
	const chapter = searchParams.get('chapter');
	const page = searchParams.get('page');
	const pathname = usePathname();
	const { width, height: totalHeight } = useDimensions(ref);
	const { height: windowHeight, width: windowWidth } = useWindowDimensions();
	let desiredWidth = width / 2 - 10;
	const desiredHeight = windowHeight - 100 - 90;
	const pageCount = Math.floor(totalHeight / desiredHeight) + 1;

	const updateRoute = (nr: number) => {
		router.push(`/${pathname}?page=${nr}`);
	};
	return (
		<div className="w-full relative">
			<div ref={ref} className="absolute invisible">
				<InvisibleBlock content={contentData} />
			</div>
			<BookPager
				windowWidth={windowWidth}
				totalHeight={totalHeight}
				totalWidth={width}
				desiredWidth={desiredWidth}
				desiredHeight={desiredHeight}
				pageCount={pageCount}
				page={page ? Number(page) : 0}
				updateRoute={updateRoute}
			/>
		</div>
	);
}
