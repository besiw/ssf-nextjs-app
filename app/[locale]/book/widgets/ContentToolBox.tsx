import { Tooltip as ReactTooltip } from 'react-tooltip';
import React, { useState } from 'react';
import share from '@/assets/svg/share-outline-black.svg';
import notes from '@/assets/svg/notes-outline-black.svg';
import bookMark from '@/assets/svg/bookmark-outline-black.svg';
import copy from '@/assets/svg/copy-outline-black.svg';
import highlights from '@/assets/svg/highlights-outline-black.svg';
import xCircle from '@/assets/img/xCircle-outline-black.png';
import leftArrow from '@/assets/img/left-outline-PrimaryColor.png';
import eve from '@/assets/svg/eve-outline-PrimaryColor.svg';
import Image from 'next/image';

type BookToolBox = {
	color: string;
	setColor: (c: string) => void;
	setHLs: () => void;
	setNotes: (note: string) => void;
	closeToolBox: () => void;
	width?: number;
};
export default function BookToolBox({
	color,
	setColor,
	setHLs,
	setNotes,
	closeToolBox,
	width,
}: BookToolBox) {
	const [editMode, setEditMode] = useState('home');
	const [note, setNote] = useState('');
	const dummyFunction = () => {};
	const submitNote = () => {
		setNotes(note);
	};
	// const [pickColor, setPickColor] = useState('bg-PrimaryColor-200');
	const colorPickerBlock = (
		<div className="flex flex-1 items-center justify-evenly p-4 max-w-80">
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
	);
	return (
		<div
			style={{ width }}
			className="bg-white shadow-lg p-3 rounded-lg flex items-center justify-between shadow"
		>
			{editMode === 'home' && (
				<div className="flex relative mix-blend-normal">
					{[
						{
							path: notes,
							text: 'Notes',
							onClick: () => {
								setEditMode('note');
							},
						},
						{
							path: highlights,
							text: 'Highlights',
							onClick: () => {
								setEditMode('hl');
							},
						},
						{ path: bookMark, text: 'BookMark', onClick: dummyFunction },
						{ path: copy, text: 'Copy', onClick: dummyFunction },
						{ path: share, text: 'Share', onClick: dummyFunction },
					].map((i, index) => {
						return (
							<button
								key={index}
								className=" flex px-1 flex-col justify-center w-20"
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
			)}
			{editMode === 'note' && (
				<div className="flex flex-1 items-center">
					{/* <Image src={leftArrow} width={'36'} height={'36'} alt={'back'} /> */}
					<textarea
						placeholder="Type notes..."
						className="w-full p-4 focus-visible:outline-none"
						rows={3}
						value={note}
						onChange={(e) => {
							setNote(e.target.value);
						}}
					/>
					<div className="mx-2 h-12 border-l-2"></div>
					<div className="px-4">
						{colorPickerBlock}
						<div className="flex pt-2">
							<button
								className="bg-PrimaryColor-200 px-4 py-2 rounded-lg w-1/2 mr-2"
								onClick={submitNote}
							>
								Save
							</button>
							<button
								onClick={() => {
									setEditMode('home');
								}}
								className="border border-PrimaryColor-200 px-4 py-2 rounded-lg w-1/2"
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			)}
			{editMode === 'hl' && (
				<div className="flex flex-1 items-center">
					{colorPickerBlock}
					<div className="mx-2 h-12 border-l-2"></div>
					<div className="px-4">
						<div className="flex pt-2">
							<button
								className="bg-PrimaryColor-200 px-4 py-2 rounded-lg w-1/2 mr-2"
								onClick={setHLs}
							>
								Save
							</button>
							<button
								onClick={() => {
									setEditMode('home');
								}}
								className="border border-PrimaryColor-200 px-4 py-2 rounded-lg w-1/2"
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			)}
			<button
				className="w-10"
				onClick={() => {
					closeToolBox();
				}}
			>
				<Image
					src={xCircle}
					width={'38'}
					height={'38'}
					alt={'Close'}
					className="mx-auto"
				/>
			</button>
		</div>
	);
}
