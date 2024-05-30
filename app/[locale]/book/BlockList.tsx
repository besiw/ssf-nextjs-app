import { contentData } from '@/app/mockData/bookContent';
import { HighLightType } from '@/app/[locale]/book/BookContent';
import Highlighter from 'react-highlight-words';
import { v4 as uuidv4 } from 'uuid';
type BlocklistProps = {
	title?: string;
	updateHighlighted: (data: HighLightType) => void;
	highlighted: HighLightType[];
};

type hlMapType = {
	[key: number]: {
		[key: number]: string | boolean;
	};
};

const BlockList: React.FC<BlocklistProps> = ({
	updateHighlighted,
	highlighted,
}) => {
	const hlMap: hlMapType = {};

	highlighted &&
		highlighted.map((h) => {
			if (h.blkId && hlMap[h.blkId]) {
				hlMap[h.blkId][h.stcId] = true;
			} else {
				hlMap[h.blkId] = { [h.stcId]: true };
			}
		});

	return (
		<>
			<h1> {contentData.chapter.title}</h1>
			{contentData.c.map((item) => {
				if (item.type === 'p') {
					return (
						<p key={`${item.id}${uuidv4()}`} className="mt-4">
							{item.c.map((s) => {
								if (hlMap[item.id] && hlMap[item.id][s.id]) {
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
