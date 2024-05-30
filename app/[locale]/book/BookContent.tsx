'use client';

import { useRef, useState, createRef } from 'react';
import './content.css';
import { useDimensions } from '@/components/useDimensions';
import { useWindowDimensions } from '@/components/useWindowDimensions';
import BlockList from './BlockList';
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
	const desiredHeight = windowHeight - 100;
	const pageCount = Math.floor(totalHeight / desiredHeight) + 1;

	const handleUpdateHL = (data: HighLightType) => {
		updateHighlighted([...highlighted, data]);
	};

	const noteRefs = noteData.map((d) => createRef<HTMLDivElement>());
	console.log(noteRefs);
	return (
		<div className="w-full relative">
			<div ref={ref} className="absolute invisible">
				<BlockList
					noted={[]}
					updateHighlighted={handleUpdateHL}
					highlighted={[]}
				/>
			</div>
			<div
				className="overflow-hidden relative"
				style={{
					width: width - 20,
					height: desiredHeight,
				}}
			>
				<div
					className="absolute"
					style={{
						left: currentPage === 0 ? 0 : -width * currentPage + 10,
						width: pageCount * desiredWidth,
						height: desiredHeight,
						WebkitColumnCount: pageCount,
					}}
				>
					<BlockList
						noted={noteData}
						noteRefs={noteRefs}
						updateHighlighted={handleUpdateHL}
						highlighted={highlighted}
					/>
				</div>
			</div>
			<div className="flex w-full justify-between">
				<button
					onClick={() => {
						if (currentPage > 0) {
							setCurrentPage(currentPage - 1);
						}
					}}
				>
					Previous
				</button>
				<button
					onClick={() => {
						if (currentPage < pageCount - 1) {
							setCurrentPage(currentPage + 1);
						}
					}}
				>
					Next
				</button>
			</div>
		</div>
	);
}
