'use client';
import { useState, useRef } from 'react';
import './content.css';

import ToolBox from './ContentToolBox';
import { noteType, highlightType } from '../type';
import { v4 as uuidv4 } from 'uuid';
import NoteBlock from './ContentNoteDestkop';
import { cormorant } from '@/options/font';
import { useWindowDimensions } from '@/helpers/useWindowDimensions';
import { useDimensions } from '@/helpers/useDimensions';
import { contentData, noteData } from '@/app/mockData/bookContent';

const Content: React.FC<{ fullWidth: number }> = ({ fullWidth }) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [selected, setSelected] = useState<highlightType>({});
	const [highlighted, setHighlighted] = useState<highlightType>({});

	const [notes, setNotes] = useState<noteType[]>(noteData);
	const [showToolBox, setShowToolBox] = useState<boolean>(false);
	const [hlColor, setHLColor] = useState<string>('bg-PrimaryColor');

	const reset = () => {
		setShowToolBox(false);
		setSelected({});
	};

	const handleSelectedAction = (data: highlightType) => {
		const update = {
			...data,
		};
		Object.keys(selected).map((pKey) => {
			if (!update[pKey]) {
				update[pKey] = {};
			}
			Object.keys(selected[pKey]).map((sKey) => {
				update[pKey][sKey] = hlColor;
			});
		});
		return update;
	};

	const handleHL = () => {
		const toUpdate = handleSelectedAction(highlighted);
		setHighlighted(toUpdate);
		reset();
	};

	const handleAddNote = (content: string) => {
		const update = handleSelectedAction({});
		const cId = 1;
		const pId = Object.keys(selected)[0];
		const sId = selected[pId] && Object.keys(selected[pId])[0];
		if (sId) {
			const newNote: noteType = {
				id: uuidv4(),
				color: hlColor,
				author: `Author ${uuidv4().substring(0, 25)}`,
				title: selected[pId][sId]?.substring(0, 30),
				content,
				location: {
					[cId]: {
						...update,
					},
				},
			};
			setNotes([...notes, newNote]);
			reset();
		}
	};

	const handleSelect = (data: {
		pId: number;
		sId: number;
		reference: string;
		e: { target: HTMLDivElement };
	}) => {
		const update: highlightType = { ...selected };
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

		setShowToolBox(showToolBox);
		setSelected(update);
	};

	const handlePickColor = (color: string) => {
		setHLColor(color);
	};
	const ntHLMap: highlightType = {};
	const ntRefMap: { [sId: string]: { [pId: string]: number } } = {};
	notes.map((n, nIndex) => {
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

	const { width: windowWidth } = useWindowDimensions();
	const isMobile = windowWidth <= 640;
	const { width } = useDimensions(containerRef);
	const noteWidth = (fullWidth - width) / 2;
	return (
		<div
			className={`w-full ${cormorant.className} lg:max-w-xl xl:max-w-2xl`}
			ref={containerRef}
		>
			<h1> {contentData.chapter.title}</h1>
			{contentData.c.map((item) => {
				if (item.type === 'p') {
					return (
						<p key={`${item.id}${uuidv4()}`} className="mt-4 ">
							{item.c.map((s, i) => {
								const isSelect =
									selected[item.id] && selected[item.id][s.id] !== undefined;

								const isHighlighted =
									highlighted[item.id] && highlighted[item.id][s.id];

								const hlNote = ntHLMap[item.id] && ntHLMap[item.id][s.id];
								const isNoteRef = ntRefMap[item.id] && ntRefMap[item.id][s.id];

								const uid = `${s.id}${uuidv4()}`;

								const spanBlock = (
									<span
										// ref={
										// 	typeof isNoteRef === 'number'
										// 		? this.noteRefs[isNoteRef]
										// 		: null
										// }
										onClick={(e: { target: any }) => {
											handleSelect({
												pId: item.id,
												sId: s.id,
												e,
												reference: s.c,
											});
										}}
										className={`${isSelect ? 'app-underline' : ''} px-1 rounded ${isHighlighted ? isHighlighted : ''} ${hlNote ? hlNote : ''}`}
										key={uid}
									>
										{s.c}{' '}
									</span>
								);
								const isLeft = isNoteRef % 2 === 0;
								return typeof isNoteRef === 'number' ? (
									<>
										<div className="relative hidden lg:block " key={uid}>
											<div
												className="absolute bg-primaryColor px-4"
												style={{
													left: isLeft ? -noteWidth : undefined,
													right: isLeft ? undefined : -noteWidth + 5,
													width: noteWidth,
													top: 0,
												}}
											>
												<NoteBlock left={isLeft} {...notes[isNoteRef]} />
											</div>
										</div>
										{spanBlock}
										<div className=" lg:hidden">
											<NoteBlock left={isLeft} {...notes[isNoteRef]} />
										</div>
									</>
								) : (
									spanBlock
								);
							})}
						</p>
					);
				}
			})}
			{showToolBox && (
				<>
					<div
						className="absolute bottom-0 sm:bottom-4 z-20"
						style={{
							right: isMobile ? 0 : noteWidth,
							left: isMobile ? 0 : undefined,
							width: isMobile ? 'auto' : width,
						}}
					>
						<ToolBox
							noteWidth={noteWidth}
							width={width}
							closeToolBox={reset}
							setHLs={handleHL}
							color={hlColor}
							setColor={handlePickColor}
							setNotes={handleAddNote}
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default Content;
