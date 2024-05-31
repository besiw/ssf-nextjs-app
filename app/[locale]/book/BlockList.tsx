import { RefObject, MutableRefObject, useRef, createRef } from 'react';

import Highlighter from 'react-highlight-words';
import { v4 as uuidv4 } from 'uuid';
import {
	HighLightType,
	NoteType,
	noteData,
	contentData,
} from '@/app/mockData/bookContent';
type BlocklistProps = {
	title?: string;
	noteRefs?: MutableRefObject<RefObject<HTMLDivElement>[]>;
	updateHighlighted: (data: HighLightType) => void;
	highlighted: HighLightType[];
	noted: NoteType[];
};

type hlMapType = {
	[key: number]: {
		[key: number]: string | boolean;
	};
};
type ntMapType = {
	[key: number]: {
		[key: number]: NoteType;
	};
};

const BlockList: React.FC<BlocklistProps> = ({
	updateHighlighted,
	highlighted,
	noted,
}) => {
	const hlMap: hlMapType = {};
	const ntMap: ntMapType = {};
	highlighted &&
		highlighted.map((h) => {
			if (h.blkId && hlMap[h.blkId]) {
				hlMap[h.blkId][h.stcId] = true;
			} else {
				hlMap[h.blkId] = { [h.stcId]: true };
			}
		});

	noted &&
		noted.map((n) => {
			if (n.blkId && ntMap[n.blkId]) {
				ntMap[n.blkId][n.stcId] = n;
			} else {
				ntMap[n.blkId] = { [n.stcId]: n };
			}
		});
	return (
		<>
			<h1> {contentData.chapter.title}</h1>
			{contentData.c.map((item) => {
				if (item.type === 'p') {
					return (
						<p key={`${item.id}${uuidv4()}`} className="mt-4">
							{item.c.map((s, i) => {
								if (ntMap[item.id] && ntMap[item.id][s.id]) {
									return <Note {...s} key={`${s.id}${uuidv4()}`} />;
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
											onClick={(e) => {
												console.log(e.target.getBoundingClientRect());
												updateHighlighted({ blkId: item.id, stcId: s.id });
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
		</>
	);
};
export default BlockList;

const Note = (s: { id: number; c: string }) => {
	const noteRef = useRef();
	console.log(noteRef);
	return (
		<span key={`${s.id}${uuidv4()}`} ref={noteRef} className="relative">
			<Highlighter
				searchWords={[s.c]}
				autoEscape={true}
				textToHighlight={s.c + ' '}
			/>
			<p className="absolute">asdfasdfads</p>
		</span>
	);
};
