import { Home, Book, Magazine, Search, More } from '@/assets/svg';

import { useTranslations } from 'next-intl';

export type navItemType = {
	title: string;
	svg: React.FC<{
		color?: string;
	}>;
	path: string;
};

const useNav = () => {
	const t = useTranslations('Navigation');
	const nav: navItemType[] = [
		{
			title: t('home'),
			svg: Home,
			path: '/',
		},
		{
			title: t('books'),
			svg: Book,
			path: '/books',
		},
		{
			title: t('hidden-treasure'),
			svg: Magazine,
			path: '/hidden-treasure',
		},
		{
			title: t('search'),
			svg: Search,
			path: '/search',
		},
		{ title: t('more'), svg: More, path: '/' },
	];
	return nav;
};

export default useNav;
