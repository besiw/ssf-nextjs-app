'use client';

import Image, { StaticImageData } from 'next/image';

import { Link } from '@/middleware';
import Heart from '@/components/book/Heart';
import { cormorant_Garamond } from '@/components/font';
type BooksProps = {
	path?: StaticImageData | undefined;
	text?: string | undefined;
	author?: string;
	year: string;
	width?: string;
};
const Books: React.FC<BooksProps> = ({
	path: src,
	text,
	year,
	author,
	width,
}) => {
	const path = `/book`;
	return (
		<div
			className={`flex flex-col mb-4 md:flex-row w-1/2 ${width} ${cormorant_Garamond.className}`}
		>
			<Link
				href={path}
				className="overflow-hidden rounded rounded-lg"
				style={{
					width: 144,
					height: 182,
				}}
			>
				<Image src={src} alt={text} width={'144'} />
			</Link>
			<div className="px-6 0.5sm:pt-3 flex-1">
				<Heart />
				<Link href={path}>
					<div className="max-h-15">{text?.substring(0, 40)}</div>
					<div className=" text-10">{author}</div>
					<div className="text-10">{year}</div>
				</Link>
			</div>
		</div>
	);
};
export default Books;
