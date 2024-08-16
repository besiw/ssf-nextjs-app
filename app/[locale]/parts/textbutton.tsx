import { inter } from '@/options/font';
import Image from 'next/image';
import { useState } from 'react';

type buttoncontentProps = {
	buttonTitle: string;
	width?: string;
};
const Button: React.FC<buttoncontentProps> = ({ buttonTitle, width }) => {
	return (
		<button
			className={`font-normal  ${(inter.className, width)} text-center border border-PrimaryColor-200 rounded-lg px-5`}
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
export const TextBotton: React.FC<IconTextSmBtnProps> = ({
	text,
	onClick,
	isActive,
}) => {
	return (
		<button className="block md:hidden" onClick={onClick}>
			<div
				className={`mx-3 flex px-3 py-2 border-2 border-PrimaryColor rounded-2xl ${isActive ? 'bg-PrimaryColor' : 'bg-white'}`}
			>
				<span className={`text-black-200`}>{text}</span>
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
