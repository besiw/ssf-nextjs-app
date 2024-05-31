import React, { createRef } from 'react';
import {
	HighLightType,
	NoteType,
	noteData,
	highlightedData,
	contentData,
} from '@/app/mockData/bookContent';
import Highlighter from 'react-highlight-words';
import { v4 as uuidv4 } from 'uuid';

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
class BookPager extends React.Component<PagerProps> {
	state: Readonly<StateType> = { currentPage: 0, notes: highlightedData };
	noteRefs = noteData.map(() => createRef());

	setCurrentPage = (page: number) => {
		this.setState({ currentPage: page });
	};

	setNotes = (note: HighLightType) => {
		this.setState({ notes: [...this.state.notes, note] });
	};
	getH = (index: number) => {
		const el = this.noteRefs[index].current;
		if (el && el.getBoundingClientRect) {
			const domProps = el.getBoundingClientRect();
			console.log(el.offsetTop);
			console.log(domProps);
			return domProps.top;
		}
	};
	render() {
		const { desiredHeight, desiredWidth, totalHeight, totalWidth, pageCount } =
			this.props;
		const hlMap: hlMapType = {};
		const ntMap: hlMapType = {};
		// highlightedData &&
		// 	highlightedData.map((h, i) => {
		// 		if (h.blkId && hlMap[h.blkId]) {
		// 			hlMap[h.blkId][h.stcId] = `${i}`;
		// 		} else {
		// 			hlMap[h.blkId] = { [h.stcId]: `${i}` };
		// 		}
		// 	});

		this.state.notes &&
			this.state.notes.map((n, i) => {
				if (n.blkId && ntMap[n.blkId]) {
					ntMap[n.blkId][n.stcId] = `${i}`;
				} else {
					ntMap[n.blkId] = { [n.stcId]: `${i}` };
				}
			});

		return (
			<div className="relative">
				<div
					className="overflow-hidden"
					style={{
						width: totalWidth - 20,
						height: desiredHeight,
						transform: 'translate(0, 0)',
					}}
				>
					<div
						className="absolute"
						style={{
							left:
								this.state.currentPage === 0
									? 0
									: -totalWidth * this.state.currentPage + 10,
							width: pageCount * desiredWidth,
							height: desiredHeight,
							WebkitColumnCount: pageCount,
						}}
					>
						<h1> {contentData.chapter.title}</h1>
						{contentData.c.map((item) => {
							if (item.type === 'p') {
								return (
									<p key={`${item.id}${uuidv4()}`} className="mt-4">
										{item.c.map((s, i) => {
											if (ntMap[item.id] && ntMap[item.id][s.id]) {
												const noteIndex = Number(ntMap[item.id][s.id]);
												return (
													<span
														key={`${s.id}${uuidv4()}`}
														ref={this.noteRefs[noteIndex]}
													>
														<Highlighter
															searchWords={[s.c]}
															autoEscape={true}
															textToHighlight={s.c + ` note!!${noteIndex} `}
														/>
													</span>
												);
											} else if (hlMap[item.id] && hlMap[item.id][s.id]) {
												return (
													<Highlighter
														key={`${s.id}${uuidv4()}`}
														searchWords={[s.c]}
														autoEscape={true}
														textToHighlight={s.c + ' '}
													/>
												);
											} else {
												return (
													<span
														onClick={() => {
															this.setNotes({
																blkId: item.id,
																stcId: s.id,
															});
														}}
														key={`${s.id}${uuidv4()}`}
													>
														{s.c}{' '}
													</span>
												);
											}
										})}
									</p>
								);
							}
						})}
					</div>
				</div>
				<div className="flex w-full justify-between">
					<button
						onClick={() => {
							if (this.state.currentPage > 0) {
								this.setCurrentPage(this.state.currentPage - 1);
							}
						}}
					>
						Previous
					</button>
					<button
						onClick={() => {
							if (this.state.currentPage < pageCount - 1) {
								this.setCurrentPage(this.state.currentPage + 1);
							}
						}}
					>
						Next
					</button>
				</div>
			</div>
		);
	}
}

export default BookPager;
