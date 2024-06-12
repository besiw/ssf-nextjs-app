import { Tooltip as ReactTooltip } from 'react-tooltip';
import React, { useState } from 'react';
import share from '@/assets/svg/share-outline-black.svg';
import notes from '@/assets/svg/notes-outline-black.svg';
import bookMark from '@/assets/svg/bookmark-outline-black.svg';
import copy from '@/assets/svg/copy-outline-black.svg';
import highlights from '@/assets/svg/highlights-outline-black.svg';
import xCircle from '@/assets/img/xCircle-outline-black.png';

// import leftArrow from '@/assets/img/left-outline-PrimaryColor.png';
// import eve from '@/assets/svg/eve-outline-PrimaryColor.svg';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

type BookToolBox = {
	color: string;
	setColor: (c: string) => void;
	setHLs: () => void;
	setNotes: (note: string) => void;
	closeToolBox: () => void;
	width?: number;
	noteWidth?: number;
};
export default function BookToolBox({
	color,
	setColor,
	setHLs,
	setNotes,
	closeToolBox,
	width,
}: BookToolBox) {
	const stringTools = useTranslations('tools');

	const [editMode, setEditMode] = useState('home');
	const [note, setNote] = useState('');
	const dummyFunction = () => {};
	const submitNote = () => {
		setNotes(note);
	};
	// const [pickColor, setPickColor] = useState('bg-PrimaryColor');
	const colorPickerBlock = (
		<div className="flex flex-1 items-center justify-evenly p-4 max-w-80">
			{[
				'bg-PrimaryColor',
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
			style={{
				boxShadow: 'rgba(0, 0, 0, 0.35) 6px 5px 30px',
			}}
			className="relative w-screen md:w-auto bg-white p-3 pt-8 rounded-t-4xl md:rounded-4xl flex flex-col md:flex-row items-center justify-between"
		>
			{
				<button className="p-2 absolute right-0 top-0" onClick={closeToolBox}>
					<Image src={xCircle} width={'24'} alt="close" />
				</button>
			}
			{editMode === 'home' && (
				<div className="flex relative mix-blend-normal w-full ">
					{[
						{
							path: notes,
							text: stringTools('notes'),
							onClick: () => {
								setEditMode('note');
							},
						},
						{
							path: highlights,
							text: stringTools('highlights'),
							onClick: () => {
								setEditMode('hl');
							},
						},
						{
							path: bookMark,
							text: stringTools('bookmark'),
							onClick: dummyFunction,
						},
						{ path: copy, text: stringTools('copy'), onClick: dummyFunction },
						{ path: share, text: stringTools('share'), onClick: dummyFunction },
					].map((i, index) => {
						return (
							<button
								key={index}
								className=" flex px-1 flex-col justify-center w-1/5"
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
				<div className="flex flex-col flex-1 items-center">
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
					<div className="border-b w-full"></div>
					<div className="hidden mx-2 h-12 border-l-2"></div>
					<div className="p-4 flex">
						{colorPickerBlock}
						<div className="flex pt-2">
							<button
								className="bg-PrimaryColor px-4 py-2 rounded-lg w-1/2 mr-2"
								onClick={submitNote}
							>
								{stringTools('save')}
							</button>
							<button
								onClick={() => {
									setEditMode('home');
								}}
								className="border border-PrimaryColor-200 px-4 py-2 rounded-lg w-1/2"
							>
								{stringTools('cancel')}
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
								className="bg-PrimaryColor px-4 py-2 rounded-lg w-1/2 mr-2"
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
				className="w-10 hidden"
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
