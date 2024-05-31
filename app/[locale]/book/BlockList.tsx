import { contentData } from '@/app/mockData/bookContent';
import { RefObject } from 'react';

import Highlighter from 'react-highlight-words';
import { v4 as uuidv4 } from 'uuid';
import { HighLightType, NoteType } from '@/app/mockData/bookContent';
type BlocklistProps = {
	title?: string;
	noteRefs?: RefObject<HTMLDivElement>[];
	updateHighlighted: (data: HighLightType) => void;
	highlighted: HighLightType[];
	noted: NoteType[];
};

type hlMapType = {
	[key: number]: {
		[key: number]: string | boolean;
	};
};

const BlockList: React.FC<BlocklistProps> = ({
	updateHighlighted,
	highlighted,
	noted,
	noteRefs,
}) => {
	const hlMap: hlMapType = {};
	const ntMap: hlMapType = {};
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
			if (n.blkId && hlMap[n.blkId]) {
				ntMap[n.blkId][n.stcId] = true;
			} else {
				ntMap[n.blkId] = { [n.stcId]: true };
			}
		});
	return (
		<>
			<h1> {contentData.chapter.title}</h1>
			{contentData.c.map((item) => {
				if (item.type === 'p') {
					return (
						<p key={`${item.id}${uuidv4()}`} className="mt-4">
							{item.c.map((s, index) => {
								if (ntMap[item.id] && ntMap[item.id][s.id] && noteRefs) {
									return (
										<span ref={noteRefs[index]} key={`${s.id}${uuidv4()}`}>
											<Highlighter
												searchWords={[s.c]}
												autoEscape={true}
												textToHighlight={s.c + ' '}
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
