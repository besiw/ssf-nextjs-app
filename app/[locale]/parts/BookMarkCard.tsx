import { bookMarkTpye } from '@/app/type';
import { cormorant, cormorant_Garamond } from '@/options/font';
import Image from 'next/image';
import bookmark from '@/assets/svg/bookmark-light-bg-square-PrimaryColor.svg';
const bookmarks: React.FC<bookMarkTpye> = ({
	title,
	note,
	time,
	color,
	img,
	bookContent,
}) => {
	return (
		<div className="w-full">
			<div
				className={`flex text-11 mb-4 pt-7 dark:text-white-warm font-semibold ${cormorant_Garamond.className}`}
			>
				{title}
			</div>
			<div className="flex bg-gray-75 md:bg-white md:border md:border-PrimaryColor-12 pl-5 pt-5 rounded-xl pb-3">
				<div className="flex flex-col w-8 h-9 pt-1">
					<Image src={bookmark} alt="" />
					{color && <div className={`h-4 border-b-4 ${color}`}></div>}
				</div>{' '}
				<div
					className={`flex pl-5 pr-8  flex-col w-full ${cormorant.className}`}
				>
					<div className="truncate text-10">{bookContent}</div>
					<div className={`text-10 text-black-diaphaneity60 normal`}>
						{time}
					</div>
					{note && (
						<div className={`italic overflow-hidden text-10 line-clamp-2 `}>
							{note}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
export default bookmarks;
