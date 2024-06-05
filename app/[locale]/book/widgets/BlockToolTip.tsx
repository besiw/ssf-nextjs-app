import { Tooltip as ReactTooltip } from 'react-tooltip';
import React, { useState } from 'react';
import share from '@/assets/svg/share-outline-black.svg';
import notes from '@/assets/svg/notes-outline-black.svg';
import bookMark from '@/assets/svg/bookmark-outline-black.svg';
import copy from '@/assets/svg/copy-outline-black.svg';
import highlights from '@/assets/svg/highlights-outline-black.svg';
import eve from '@/assets/svg/eve-outline-PrimaryColor.svg';
import Image from 'next/image';

type WithToolTipProps = {
	uid: string;
	sentence: string;
	handleAddNote?: () => {};
	handleAddHighlight?: () => {};
};

type BookToolBox = {
	color: string;
	setColor: (c: string) => void;
	setHLs: () => void;
	setNotes: () => void;
};
export function BookToolBox({
	color,
	setColor,
	setHLs,
	setNotes,
}: BookToolBox) {
	const dummyFunction = () => {};
	// const [pickColor, setPickColor] = useState('bg-PrimaryColor-200');
	return (
		<div className="w-full bg-white shadow-lg p-3 rounded-lg flex items-center">
			<div className="w-full flex flex-1 relative mix-blend-normal">
				{[
					{ path: notes, text: 'Notes', onClick: setNotes },
					{ path: highlights, text: 'Highlights', onClick: setHLs },
					{ path: bookMark, text: 'BookMark', onClick: dummyFunction },
					{ path: copy, text: 'Copy', onClick: dummyFunction },
					{ path: share, text: 'Share', onClick: dummyFunction },
				].map((i, index) => {
					return (
						<button
							key={index}
							className=" flex px-1 flex-col justify-center w-16"
							onClick={i.onClick}
						>
							<Image
								src={i.path}
								width={'24'}
								height={'24'}
								alt={i.text}
								className="mx-auto pt-3"
							/>
							<div className="text-center text-8 w-full mt-2">{i.text}</div>
						</button>
					);
				})}
			</div>
			<div className="mx-2 h-7 border-l-2"></div>
			<div className="flex flex-1 items-center justify-evenly">
				{[
					'bg-PrimaryColor-200',
					'bg-cyan-200',
					'bg-green-200',
					'bg-pink-200',
					'bg-yellow-100',
				].map((c, index) => {
					return (
						<button
							key={index}
							className="px-1"
							onClick={() => {
								setColor(c);
							}}
						>
							<div className={`w-7 h-7 rounded-full ${c} relative`}>
								{color === c && (
									<div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
										<div className={` w-2 h-2 rounded-full bg-white`} />
									</div>
								)}
							</div>
						</button>
					);
				})}
			</div>
			<div className="mx-2 h-7 border-l-2"></div>
			<div className="flex justify-around items-center pl-2">
				<Image src={eve} alt="" className="" />
				<div className="text-8 pl-2 w-20">Visible to community</div>
			</div>
		</div>
	);
}
