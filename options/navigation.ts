//https://next-intl-docs.vercel.app/docs/routing/navigation

import { createLocalizedPathnamesNavigation} from 'next-intl/navigation';
import {Pathnames, LocalePrefix} from 'next-intl/routing';

export const defaultLocale = 'en' as const;
export const locales = ['en', 'no'] as const;

export type localesType = 'en' | 'no';

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames: Pathnames<typeof locales> = {
	// If all locales use the same pathname, a
	// single external path can be provided.
	'/': '/',
	'/books': {
		en: '/books',
		no: '/bøker'
	},
	'/book': {
		en: '/book',
		no: '/bøk'
	},
	'/book/[bookSlug-bookId]': {
		en: '/book/[bookSlug-bookId]',
		no: '/bok/[bookSlug-bookId]'
	},
	'/search': {
		en: '/search',
		no: '/søk'
	},
	'/hidden-treasure': {
		en: '/hidden-treasure',
		no: '/skjulte-skatters'
	},
	'/article': {
		en: '/article',
		no: '/artikkel'
	},
	// If locales use different paths, you can
	// specify each external path per locale.
	'/about': {
		en: '/about',
		no: '/om-oss'
	}
};

export const localePrefix: LocalePrefix<typeof locales> = 'always';

export const {Link, getPathname, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
    localePrefix
  });
