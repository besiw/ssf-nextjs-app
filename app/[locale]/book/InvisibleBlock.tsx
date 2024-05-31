import React, { forwardRef } from 'react';
import { contentData } from '@/app/mockData/bookContent';
import { v4 as uuidv4 } from 'uuid';
type BlocklistProps = {};

const BlockList: React.FC<BlocklistProps> = () => {
	return (
		<>
			<h1> {contentData.chapter.title}</h1>
			{contentData.c.map((item) => {
				if (item.type === 'p') {
					return (
						<p key={`${item.id}${uuidv4()}`} className="mt-4">
							{item.c.map((s, i) => {
								return <span key={`${s.id}${uuidv4()}`}>{s.c} </span>;
							})}
						</p>
					);
				}
			})}
		</>
	);
};
export default BlockList;
