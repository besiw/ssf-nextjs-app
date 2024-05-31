import { Tooltip as ReactTooltip } from 'react-tooltip';
import React from 'react';
import share from '@/assets/svg/share-outline-black.svg';
import notes from '@/assets/svg/notes-outline-black.svg';
import bookMark from '@/assets/svg/bookmark-outline-black.svg';
import copy from '@/assets/svg/copy-outline-black.svg';
import highlights from '@/assets/svg/highlights-outline-black.svg';
import eve from '@/assets/svg/eve-outline-PrimaryColor.svg';
import Image from 'next/image';

type WithToolTipProps = {
	sentence: string;
	handleAddNote: () => {};
	handleAddHighlight: () => {};
};

const WithToolTip: React.FC<WithToolTipProps> = ({
	sentence,
	handleAddHighlight,
	handleAddNote,
}) => {
	return (
		<>
			<span onClick={() => {}}>{sentence} </span>
			<ReactTooltip openOnClick>
				<BookToolTip />
			</ReactTooltip>
		</>
	);
};

export default WithToolTip;

function BookToolTip() {
	return (
		<div style={{ width: 400 }}>
			<div className="w-full flex  relative mix-blend-normal">
				{[
					{ path: share, text: 'share' },
					{ path: notes, text: 'notes' },
					{ path: bookMark, text: 'bookMark' },
					{ path: copy, text: 'copy' },
					{ path: highlights, text: 'highlights' },
				].map((i, index) => {
					return (
						<div key={index} className="px-1 flex-col justify-center w-1/5">
							<Image
								src={i.path}
								width={'24'}
								height={'24'}
								alt={i.text}
								className="mx-auto pt-3"
							/>
							<div className="text-center text-8">{i.text}</div>
						</div>
					);
				})}
			</div>
			<div className="w-full px-3 pt-2">
				<hr />
				<div className="flex pt-5">
					{[
						'bg-pink-200',
						'bg-cyan-200',
						'bg-green-200',
						'bg-PrimaryColor-200',
						'bg-yellow-100',
					].map((color, index) => {
						return (
							<div key={index} className="pr-3">
								<div className={`w-7 h-7 rounded-full ${color}`}></div>
							</div>
						);
					})}
					<div className=" h-7 border-l-2"></div>
					<div className="flex justify-around items-center pl-2 w-full">
						<Image src={eve} alt="" className="" />
						<div className="text-8 pl-2">Visible to community</div>
					</div>
				</div>
			</div>
		</div>
	);
}
