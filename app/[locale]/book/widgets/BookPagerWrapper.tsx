'use client';

import { useRef } from 'react';
import { useDimensions } from '@/components/useDimensions';
import { useWindowDimensions } from '@/components/useWindowDimensions';
import InvisibleBlock from './BookPagerInvisibleBlock';
import BookPager from './BookPager';
import { contentData } from '@/app/mockData/bookContent';

export default function Content() {
	const ref = useRef(null);
	const { width, height: totalHeight } = useDimensions(ref);
	const { height: windowHeight, width: windowWidth } = useWindowDimensions();
	let desiredWidth = width / 2 - 10;
	const desiredHeight = windowHeight - 100 - 50;
	const pageCount = Math.floor(totalHeight / desiredHeight) + 1;

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
			/>
		</div>
	);
}
