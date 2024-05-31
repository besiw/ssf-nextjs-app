import React, { createRef, useState } from 'react';
import {
	HighLightType,
	NoteType,
	noteData,
	highlightedData,
	contentData,
} from '@/app/mockData/bookContent';
import Highlighter from 'react-highlight-words';
import { v4 as uuidv4 } from 'uuid';
import BlockList from './BlockList';

type hlMapType = {
	[key: number]: {
		[key: number]: string;
	};
};

type PagerProps = {
	title?: string;
	totalWidth: number;
	totalHeight: number;
	desiredWidth: number;
	desiredHeight: number;
	pageCount: number;
};

type StateType = {
	currentPage: number;
	notes: HighLightType[];
};

const Pager: React.FC<PagerProps> = ({
	desiredHeight,
	desiredWidth,
	totalHeight,
	totalWidth,
	pageCount,
}) => {
	const [currentPage, setCurrentPage] = useState(0);
	const [highlighted, updateHighlighted] =
		useState<HighLightType[]>(highlightedData);
	const handleUpdateHL = (data: HighLightType) => {
		updateHighlighted([...highlighted, data]);
	};
	return (
		<>
			<div
				className="relative"
				style={{
					width: totalWidth - 20,
					height: desiredHeight,
					transform: 'translate(0, 0)',
				}}
			>
				<div
					className="absolute"
					style={{
						left: currentPage === 0 ? 0 : -totalWidth * currentPage + 10,
						width: pageCount * desiredWidth,
						height: desiredHeight,
						WebkitColumnCount: pageCount,
					}}
				>
					<BlockList
						noted={noteData}
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
		</>
	);
};

export default Pager;
