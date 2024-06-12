import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix, pathnames } from './options/navigation';
const middleware = createMiddleware({
	// Add locales you want in the app
	locales,
	localePrefix,
	// Default locale if no match
	defaultLocale: 'en',
	pathnames,
});

export default middleware;

export const config = {
	// Match only internationalized pathnames
	matcher: ['/', '/(no|en)/:page*'],
};
