import filter from '@/assets/svg/filter-outline-white.svg';
import filter2 from '@/assets/svg/filter-outline-PrimaryColor.svg';
import chevronleft from '@/assets/svg/chevronleft-outline-black.svg';
import search from '@/assets/svg/search-outline-PrimaryColor.svg';
import chartbar from '@/assets/svg/chartbar-outline-PrimaryColor2.svg';
import bookMark from '@/assets/svg/bookmark-outline-PrimaryColor.svg';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { inter } from '@/options/font';
import { IconTextBotton, CircleButton } from '@/components/Button';
const BooksFilter: React.FC<{
	onFilterClick: () => void;
	showFilter: boolean;
}> = ({ onFilterClick, showFilter }) => {
	const stringBooks = useTranslations('Navigation');
	const stringTools = useTranslations('tools');
	const handleClick = () => {
		onFilterClick();
	};

	return (
		<>
			<div className=" hidden md:flex relative justify-center md:justify-start items-center md:pl-5 md:py-8">
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
					{stringBooks('hidden-treasure')}
				</div>
			</div>
			{/* 简单样式 */}
			<div className="flex md:hidden justify-between px-5 pt-3 pb-10">
				<div className="flex">
					<Image src={chevronleft} alt="" />
					<div className="pl-6">{stringTools('library')}</div>
				</div>
				<div className="flex">
					{' '}
					<Image className="mr-3" src={search} alt="" />
					<Image className="mr-3" src={chartbar} alt="" />
					<Image className="mr-3" src={bookMark} alt="" />
					<Image src={filter2} alt="" />
				</div>
			</div>
		</>
	);
};

export default BooksFilter;
