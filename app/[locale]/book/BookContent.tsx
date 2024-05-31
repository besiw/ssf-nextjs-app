'use client';

import { useRef, useState, createRef, useEffect } from 'react';
import './content.css';
import { useDimensions } from '@/components/useDimensions';
import { useWindowDimensions } from '@/components/useWindowDimensions';
import BlockList from './BlockList';
import InvisibleBlock from './InvisibleBlock';
import BookPager from './BookPager';
import {
	highlightedData,
	noteData,
	HighLightType,
	NoteType,
} from '@/app/mockData/bookContent';

export default function Content() {
	const [currentPage, setCurrentPage] = useState(0);
	const [highlighted, updateHighlighted] =
		useState<HighLightType[]>(highlightedData);

	const ref = useRef(null);
	const { width, height: totalHeight } = useDimensions(ref);
	const { height: windowHeight } = useWindowDimensions();
	let desiredWidth = width / 2 - 10;
	const desiredHeight = windowHeight - 100 - 50;
	const pageCount = Math.floor(totalHeight / desiredHeight) + 1;

	const handleUpdateHL = (data: HighLightType) => {
		updateHighlighted([...highlighted, data]);
	};

	// const noteRefs = useRef(noteData.map((d) => createRef<HTMLDivElement>()));

	return (
		<div className="w-full relative">
			<div ref={ref} className="absolute invisible">
				<InvisibleBlock />
			</div>
			<BookPager
				totalHeight={totalHeight}
				totalWidth={width}
				desiredWidth={desiredWidth}
				desiredHeight={desiredHeight}
				pageCount={pageCount}
			/>
		</div>
	);
}
