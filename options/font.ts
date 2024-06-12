import { Cormorant, Cormorant_Garamond, Inter, Varta } from 'next/font/google';

export const cormorant = Cormorant({
	weight: ['300', '400', '500', '600', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
});
export const cormorant_Garamond = Cormorant_Garamond({
	weight: ['300', '400', '500', '600', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
});
export const inter = Inter({ subsets: ['latin'] });

export const varta = Varta({ weight: ['300', '400'], subsets: ['latin'] });
