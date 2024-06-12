import filter from '@/assets/svg/filter-outline-white.svg';
import filter2 from '@/assets/svg/filter-outline-PrimaryColor.svg';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { inter } from '@/options/font';
import { IconTextBotton, CircleButton } from '@/components/Button';
const BooksFilter: React.FC<{
	onFilterClick: () => void;
	showFilter: boolean;
}> = ({ onFilterClick, showFilter }) => {
	const stringBooks = useTranslations('books');
	const stringTools = useTranslations('tools');
	const handleClick = () => {
		onFilterClick();
	};

	return (
		<div className="relative flex justify-center md:justify-start items-center md:pl-5 md:py-8">
			<IconTextBotton
				onClick={handleClick}
				icon={filter}
				activeIcon={filter2}
				isActive={showFilter}
				text={stringTools('filter')}
			/>
			<button
				className={`rounded-full p-2 absolute left-5 md:hidden ${showFilter ? 'bg-PrimaryColor' : 'bg-PrimaryColor-12'}`}
				onClick={handleClick}
			>
				<Image
					width={'20'}
					height={'20'}
					src={showFilter ? filter : filter2}
					alt=""
				/>
			</button>
			<div className="hidden md:block pl-6 h-5 border-l-2"></div>
			<div className={`${inter.className} uppercase py-4`}>
				{stringBooks('title')}
			</div>
		</div>
	);
};

export default BooksFilter;
