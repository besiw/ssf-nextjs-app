import home from '@/assets/svg/home-outline-black.svg';
import home2 from '@/assets/svg/home-outline-PrimaryColor.svg';
import books from '@/assets/svg/book-outline-black.svg';
import books2 from '@/assets/svg/book-outline-PrimaryColor.svg';
import magazine from '@/assets/svg/open-book-outline-black.svg';
import magazine2 from '@/assets/svg/open-book-outline-PrimaryColor.svg';
import search from '@/assets/svg/search-outline-black.svg';
import search2 from '@/assets/svg/search-outline-PrimaryColor.svg';
import more from '@/assets/svg/more-outline-black.svg';
import more2 from '@/assets/svg/more-outline-PrimaryColor.svg';
import { useTranslations } from 'next-intl';
export type navItemType = {
	title: string;
	icon: string;
	activeIcon: string;
	path: string;
};
const useNav = () => {
	const t = useTranslations('Navigation');
	const nav: navItemType[] = [
		{
			title: t('home'),
			icon: home,
			activeIcon: home2,
			path: '/',
		},
		{
			title: t('books'),
			icon: books,
			activeIcon: books2,
			path: '/books',
		},
		{
			title: t('hidden-treasure'),
			icon: magazine,
			activeIcon: magazine2,
			path: '/hidden-treasure',
		},
		{
			title: t('search'),
			icon: search,
			activeIcon: search2,
			path: '/search',
		},
		{ title: t('more'), icon: more, activeIcon: more2, path: '/' },
	];
	return nav;
};

export default useNav;
