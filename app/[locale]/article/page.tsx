'use client';

import { useState } from 'react';
import Header from './parts/ArticleTitle';
import ArticleContent from './parts/ArticleContent';
import ArticleBottoms from './parts/ArticleBottom';
import ArticleListData from '@/app/mockData/allArticles';

export default function Home() {
	const [showFilter, setShowFilter] = useState(false);
	const handleFilterClick = () => {
		setShowFilter(!showFilter);
	};

	const article = ArticleListData[0];
	return (
		<>
			<Header onFilterClick={handleFilterClick} showFilter={showFilter} />
			<ArticleContent filteredName={'1999 / 09'} {...article} />
			<ArticleBottoms previous={ArticleListData[1]} next={ArticleListData[2]} />
		</>
	);
}
