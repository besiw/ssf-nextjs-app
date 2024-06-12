//https://next-intl-docs.vercel.app/docs/routing/navigation

import {
	createLocalizedPathnamesNavigation,
	Pathnames,
} from 'next-intl/navigation';

export type localesType = 'en' | 'no';

export const locales = ['en', 'no'] as const;
export const localePrefix = 'always'; // Default

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
	// If all locales use the same pathname, a
	// single external path can be provided.
	'/': '/',
	'/books': {
		en: '/books',
		no: '/bøker',
	},
	'/book/[bookSlug-bookId]': {
		en: '/book/[bookSlug-bookId]',
		no: '/bok/[bookSlug-bookId]',
	},
	'/search': {
		en: '/search',
		no: '/søk',
	},
	'/hidden-treasure': {
		en: '/hidden-treasure',
		no: '/skjulte-skatters ',
	},

	// If locales use different paths, you can
	// specify each external path per locale.
	'/about': {
		en: '/about',
		no: '/om-oss',
	},
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
	createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
