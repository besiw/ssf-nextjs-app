import '../globals.css';

import { NextIntlClientProvider } from 'next-intl';
import { getTranslations, getMessages } from 'next-intl/server';
import DesktopNav from '@/components/Navs/DesktopNav';
import MobileNav from '@/components/Navs/MobileNav';
import { inter } from '@/options/font';
import { localesType } from '@/options/navigation';

type Props = {
	params: { locale: localesType };
};

export async function generateMetadata({ params: { locale } }: Props) {
	const t = await getTranslations({ locale, namespace: 'Metadata' });
	return {
		title: t('title'),
	};
}

interface RootLayoutProps {
	children: React.ReactNode;
	locale: never;
}

export default async function RootLayout({
	children,
	locale,
}: RootLayoutProps) {
	const messages = await getMessages();
	return (
		<html lang={locale}>
			<body className={`${inter.className} flex`}>
				<NextIntlClientProvider messages={messages}>
					<DesktopNav />
					<MobileNav />
					<main
						className={`flex-1 h-screen max-h-screen w-screen max-w-screen md:w-auto overflow-y-scroll`}
					>
						{children}
					</main>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
