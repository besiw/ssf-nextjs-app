import createMiddleware from 'next-intl/middleware';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
export const locales = ['en', 'de', 'es', 'sv', 'nl'] as const;
export const localePrefix = 'always'; // Default
const middleware = createMiddleware({
	// Add locales you want in the app
	locales,
	localePrefix,
	// Default locale if no match
	defaultLocale: 'en',
});

export default middleware;

export const config = {
	// Match only internationalized pathnames
	matcher: ['/', '/(de|es|en|sv|nl)/:page*'],
};

export const { Link, redirect, usePathname, useRouter } =
	createSharedPathnamesNavigation({ locales, localePrefix });
