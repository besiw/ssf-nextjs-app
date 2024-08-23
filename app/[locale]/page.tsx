'use client';
import { Metadata } from 'next';
import Header from './parts/ArticleTitle';
import { useState } from 'react';
import BookMarks from './parts/BookMarkCard';
import allBookMarks from '@/app/mockData/allBookMarks';
import Collectbooks from './parts/CollectbooksCard';
import { allViewRecommended } from '@/app/mockData/allRecommended';
import { ActivitiesDesktop, RecommendedDesktop } from './parts/DesktopLayout';
import RecommendedArticle from './parts/recommendedArticleCard';
export default function Home() {
	const [showFilter, setShowFilter] = useState(false);
	const handleFilterClick = () => {
		setShowFilter(!showFilter);
	};

	return (
		<div className="pb-32 dark:bg-black-background">
			<Header onFilterClick={handleFilterClick} showFilter={showFilter} />
			<div className="px-5 pt-2">
				<div className="w-full pb-11 rounded-xl lg:hidden">
					{allBookMarks.map((i, index) => {
						return <BookMarks key={index} {...i} />;
					})}
					{allViewRecommended.map((b, index) => {
						if (b.type === 'book') {
							return <Collectbooks key={index} {...b.data} />;
						}
						if (b.type === 'article') {
							return (
								<RecommendedArticle
									key={index}
									title={''}
									month={''}
									{...b.data}
								/>
							);
						}
					})}
				</div>
				<div className="hidden flex-1 lg:grid grid-cols-2 xl:mx-16">
					<ActivitiesDesktop key={'activities'} />
					<RecommendedDesktop key={'recommended'} />
				</div>
			</div>
		</div>
	);
}
