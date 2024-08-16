import { ArticleType } from '@/app/type';
import { cormorant_Garamond, cormorant } from '@/options/font';
import Image from 'next/image';
import bookmark from '@/assets/svg/bookmark-light-bg-square-PrimaryColor.svg';
import { useTranslations } from 'next-intl';
const recommendedArticle: React.FC<ArticleType> = ({
	title,
	year,
	month,
	order,
	author,
	excerpt,
}) => {
	const stringTools = useTranslations('tools');
	return (
		<div className="w-full">
			<div
				className={`flex text-11 mb-4 pt-7 dark:text-white-warm font-semibold ${cormorant_Garamond.className}`}
			>
				{stringTools('Article')}
			</div>
			<div className="flex bg-gray-75 md:bg-white md:border p-5 rounded-xl">
				<div className="flex flex-col w-8 h-9 pt-1">
					<Image src={bookmark} alt="" />
				</div>{' '}
				<div
					className={`flex pl-5 pr-8  flex-col w-full ${cormorant.className}`}
				>
					<div className="truncate text-10">{title}</div>
					<div className={`text-10 text-black-diaphaneity60 normal`}>
						{year}.{month}
					</div>
					{excerpt && (
						<div className={`italic overflow-hidden text-10 line-clamp-2 `}>
							{excerpt}
						</div>
					)}{' '}
					<a className="flex justify-end text-PrimaryColor font-normal">
						{stringTools('Readmore')}
					</a>
				</div>
			</div>
		</div>
	);
};
export default recommendedArticle;
