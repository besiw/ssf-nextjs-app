import { inter } from '../options/font';
import Image from 'next/image';
import { useState } from 'react';

type buttoncontentProps = {
	buttonTitle: string;
	width?: string;
};
const Button: React.FC<buttoncontentProps> = ({ buttonTitle, width }) => {
	return (
		<button
			className={`font-normal  ${(inter.className, width)} text-center border-2 border-PrimaryColor-200 rounded-lg px-5`}
		>
			{buttonTitle}
		</button>
	);
};
export default Button;

type IconTextSmBtnProps = {
	text: string;
	icon: string;
	activeIcon: string;
	onClick: () => void;
	isActive: boolean;
};
export const IconTextBotton: React.FC<IconTextSmBtnProps> = ({
	text,
	icon,
	activeIcon,
	onClick,
	isActive,
}) => {
	return (
		<button className="hidden md:block" onClick={onClick}>
			<div
				className={`mx-3 flex px-3 py-2 rounded-2xl ${isActive ? 'bg-PrimaryColor' : 'bg-PrimaryColor-12'}`}
			>
				<Image className="mr-3" src={isActive ? icon : activeIcon} alt="" />
				<span className={`${isActive ? 'text-white' : 'text-black-200'}`}>
					{text}
				</span>
			</div>
		</button>
	);
};

export const CircleButton: React.FC<IconTextSmBtnProps> = ({
	icon,
	activeIcon,
	text,
	onClick,
	isActive,
}) => {
	return (
		<button onClick={onClick}>
			<Image className="mr-3" src={isActive ? activeIcon : icon} alt={text} />
		</button>
	);
};
