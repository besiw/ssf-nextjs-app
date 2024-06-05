import React, { createRef } from 'react';

import {
	noteData,
	highlightedData,
	contentData,
} from '@/app/mockData/bookContent';
import { HighLightType, NoteType, hlMapType } from '../type';
import Highlighter from 'react-highlight-words';
import { v4 as uuidv4 } from 'uuid';
import SideNotes from './SideNotes';
import BlockToolTip from './BlockToolTip';

type PagerProps = {
	title?: string;
	windowWidth: number;
	totalWidth: number;
	totalHeight: number;
	desiredWidth: number;
	desiredHeight: number;
	pageCount: number;
};

type StateType = {
	currentPage: number;
	notes: NoteType[];
	showNotes: boolean;
};
const sideColWidthMax = 320;
class BookPager extends React.Component<PagerProps> {
	state: Readonly<StateType> = {
		currentPage: 0,
		notes: noteData,
		showNotes: false,
	};
	noteRefs = noteData.map(() => createRef<HTMLDivElement>());

	setCurrentPage = (page: number) => {
		this.setState({ currentPage: page });
	};

	setShowNotes = () => {
		this.setState({ showNotes: !this.state.showNotes });
	};

	setNotes = (note: HighLightType) => {
		this.setState({ notes: [...this.state.notes, note] });
	};

	componentDidMount() {
		setTimeout(() => {
			this.setState({ showNotes: true });
		}, 100);
	}
	render() {
		const { desiredHeight, desiredWidth, totalHeight, totalWidth, pageCount } =
			this.props;
		const hlMap: hlMapType = {};
		const ntMap: hlMapType = {};
		highlightedData &&
			highlightedData.map((h, i) => {
				if (h.blkId && hlMap[h.blkId]) {
					hlMap[h.blkId][h.stcId] = `${i}`;
				} else {
					hlMap[h.blkId] = { [h.stcId]: `${i}` };
				}
			});

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
				{this.state.showNotes && (
					<SideNotes
						notes={this.state.notes}
						noteRefs={this.noteRefs}
						windowWidth={this.props.windowWidth}
						totalWidth={this.props.totalWidth}
					/>
				)}
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
									<p key={`${item.id}${uuidv4()}`} className="mt-4 ">
										{item.c.map((s, i) => {
											const uid = `${s.id}${uuidv4()}`;
											if (ntMap[item.id] && ntMap[item.id][s.id]) {
												const noteIndex = Number(ntMap[item.id][s.id]);
												return (
													<span key={uid} ref={this.noteRefs[noteIndex]}>
														<Highlighter
															searchWords={[s.c]}
															autoEscape={true}
															textToHighlight={s.c + ` `}
														/>
													</span>
												);
											} else if (hlMap[item.id] && hlMap[item.id][s.id]) {
												return (
													<Highlighter
														key={uid}
														searchWords={[s.c]}
														autoEscape={true}
														textToHighlight={s.c + ' '}
													/>
												);
											} else {
												return (
													<BlockToolTip key={uid} uid={uid} sentence={s.c} />
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
							this.setState({ showNotes: false });
							setTimeout(() => {
								// this.showButtonRef.current.getBoundingClientRect();
								// simulateMouseClick(this.showButtonRef.current);
								this.setState({ showNotes: true });
							}, 100);
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
								this.setState({ showNotes: false });
								setTimeout(() => {
									// this.showButtonRef.current.getBoundingClientRect();
									// simulateMouseClick(this.showButtonRef.current);
									this.setState({ showNotes: true });
								}, 100);
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
