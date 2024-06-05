import React from 'react';
import { contentDataType } from '../type';
import { v4 as uuidv4 } from 'uuid';

type InvisibleBlockProps = {
	content: contentDataType;
};

const InvisibleBlock: React.FC<InvisibleBlockProps> = ({ content }) => {
	return (
		<>
			<h1> {content.chapter.title}</h1>
			{content.c.map((item) => {
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
export default InvisibleBlock;
