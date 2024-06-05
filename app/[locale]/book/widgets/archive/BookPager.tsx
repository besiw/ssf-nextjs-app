import React, { createRef } from 'react';

import { noteData, contentData } from '@/app/mockData/bookContent';
import { BookToolBox } from './BlockToolTip';
import { noteType, highlightType } from '../type';
import { v4 as uuidv4 } from 'uuid';
import SideNotes from './SideNotes';

import './content.css';

type PagerProps = {
	title?: string;
	windowWidth: number;
	totalWidth: number;
	totalHeight: number;
	desiredWidth: number;
	desiredHeight: number;
	pageCount: number;
	page: number;
	updateRoute: (nr: number) => void;
};

type StateType = {
	currentPage: number;
	notes: noteType[];
	showNotes: boolean;
	showToolBox: boolean;
	selected: highlightType;
	highlighted: highlightType;
	toolTipPosition: {
		top: number;
		right?: number;
		left?: number;
	};
	hlColor: string;
	chapter?: string;
	page?: string;
};
const sideColWidthMax = 320;

// sessionStorage.removeItem('ssf-app-notes');
const notesSessionData = sessionStorage.getItem('ssf-app-notes');

class BookPager extends React.Component<PagerProps> {
	/*load data*/

	state: Readonly<StateType> = {
		currentPage: this.props.page ? Number(this.props.page) : 0,
		notes: notesSessionData ? JSON.parse(notesSessionData) : noteData,
		showNotes: false,
		selected: {},
		showToolBox: false,
		toolTipPosition: { top: 0 },
		highlighted: {},
		hlColor: 'bg-PrimaryColor-200',
	};

	contentRef = createRef<HTMLDivElement>();
	toolTipRef = createRef<HTMLDivElement>();
	noteRefs = this.state.notes.map(() => createRef<HTMLDivElement>());

	componentDidMount() {
		setTimeout(() => {
			this.setState({ showNotes: true });
		}, 100);
	}

	setCurrentPage = (page: number) => {
		this.setState({ currentPage: page });
	};

	setShowNotes = () => {
		this.setState({ showNotes: !this.state.showNotes });
	};

	setHLs = () => {
		const update = this.handleSelectedActions(this.state.highlighted);
		this.setState({ highlighted: update, selected: {}, showToolBox: false });
	};

	handleSelectedActions = (data: highlightType) => {
		const update = {
			...data,
		};
		Object.keys(this.state.selected).map((pKey) => {
			if (!update[pKey]) {
				update[pKey] = {};
			}
			Object.keys(this.state.selected[pKey]).map((sKey) => {
				update[pKey][sKey] = this.state.hlColor;
			});
		});
		return update;
	};
	setNotes = (data: string) => {
		const update = this.handleSelectedActions({});
		const pId = Object.keys(this.state.selected)[0];
		const sId = Object.keys(this.state.selected[pId])[0];
		if (sId) {
			const note: noteType = {
				id: uuidv4(),
				color: this.state.hlColor,
				author: `Author ${uuidv4()}`,
				title: this.state.selected[pId][sId]?.substring(0, 30),
				content: data,
				location: {
					1: {
						...update,
					},
				},
			};
			const updateState = {
				notes: [...this.state.notes, note],
				selected: {},
				showToolBox: false,
				showNotes: false,
			};
			sessionStorage.setItem(
				'ssf-app-notes',
				JSON.stringify(updateState.notes)
			);
			this.setState(updateState);
			this.props.updateRoute(this.state.currentPage);

			setTimeout(() => {
				sessionStorage.setItem(
					'ssf-app-notes',
					JSON.stringify(updateState.notes)
				);

				window.location.reload();
			}, 200);
		}
	};

	handleSelect = (data: {
		pId: number;
		sId: number;
		reference: string;
		e: { target: HTMLDivElement };
	}) => {
		const update: highlightType = { ...this.state.selected };
		const { pId, sId, reference } = data;
		let showToolBox = true;
		let isCancel = false;
		if (update[pId]) {
			if (update[pId][sId] && typeof update[pId][sId] === 'string') {
				update[pId][sId] = undefined;
				isCancel = true;
			} else {
				update[pId][sId] = reference;
			}
		} else {
			update[pId] = {
				[sId]: reference,
			};
		}

		if (isCancel) {
			let hasObject = false;
			Object.keys(update).map((p) => {
				Object.keys(update[p]).map((s) => {
					if (update[p][s]) {
						hasObject = typeof update[p][s] !== 'undefined';
					}
				});
			});
			if (!hasObject) {
				showToolBox = false;
			}
		}

		this.setState({
			selected: update,
			showToolBox,
			// toolTipPosition: toSetPostion,
			// showToolBox: addListener,
		});
	};

	setPickColor = (color: string) => {
		this.setState({ hlColor: color });
	};

	closeToolbox = () => {
		this.setState({
			selected: {},
			showToolBox: false,
		});
	};
	render() {
		console.log(this.props);
		const { desiredHeight, desiredWidth, totalWidth, pageCount, windowWidth } =
			this.props;

		const ntHLMap: highlightType = {};
		const ntRefMap: { [sId: string]: { [pId: string]: number } } = {};

		this.state.notes.map((n, nIndex) => {
			if (n.location[1]) {
				Object.keys(n.location[1]).map((pId, pIndex) => {
					if (!ntHLMap[pId]) {
						ntHLMap[pId] = {};
					}
					Object.keys(n.location[1][pId]).map((sId, sIndex) => {
						ntHLMap[pId][sId] = n.location[1][pId][sId];
						if (pIndex === 0 && sIndex === 0) {
							if (!ntRefMap[pId]) {
								ntRefMap[pId] = {};
							}
							ntRefMap[pId][sId] = nIndex;
						}
					});
				});
			}
		});
		return (
			<div className="relative">
				<SideNotes
					noteRefs={this.noteRefs}
					notes={this.state.notes}
					totalWidth={totalWidth}
					windowWidth={windowWidth}
				/>
				<div
					className="overflow-hidden"
					ref={this.contentRef}
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
									: -totalWidth * this.state.currentPage +
										10 * this.state.currentPage,
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
											const isSelect =
												this.state.selected[item.id] &&
												this.state.selected[item.id][s.id] !== undefined;

											const isHighlighted =
												this.state.highlighted[item.id] &&
												this.state.highlighted[item.id][s.id];

											const hlNote = ntHLMap[item.id] && ntHLMap[item.id][s.id];
											const isNoteRef =
												ntRefMap[item.id] && ntRefMap[item.id][s.id];

											// const isNote = ntHLMap[item.id] && ntHLMap[item.id][s.id];

											const uid = `${s.id}${uuidv4()}`;

											return (
												<span
													ref={
														typeof isNoteRef === 'number'
															? this.noteRefs[isNoteRef]
															: null
													}
													onClick={(e: { target: any }) => {
														this.handleSelect({
															pId: item.id,
															sId: s.id,
															e,
															reference: s.c,
														});
													}}
													className={`${isSelect ? 'app-underline' : ''} ${isHighlighted ? isHighlighted : ''} ${hlNote ? hlNote : ''}`}
													key={uid}
												>
													{s.c}{' '}
												</span>
											);
										})}
									</p>
								);
							}
						})}
					</div>
				</div>
				<div className="flex w-full justify-between h-20">
					<button
						onClick={() => {
							this.setState({ showNotes: false });
							setTimeout(() => {
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
									this.setState({ showNotes: true });
								}, 100);
								this.setCurrentPage(this.state.currentPage + 1);
							}
						}}
					>
						Next
					</button>
				</div>
				{this.state.showToolBox && (
					<div
						className="bg-white w-full"
						ref={this.toolTipRef}
						style={{
							position: 'absolute',
							left: 0,
							right: 0,
							bottom: 0,
						}}
					>
						<BookToolBox
							closeToolBox={this.closeToolbox}
							setHLs={this.setHLs}
							color={this.state.hlColor}
							setColor={this.setPickColor}
							setNotes={this.setNotes}
						/>
					</div>
				)}
			</div>
		);
	}
}

export default BookPager;
