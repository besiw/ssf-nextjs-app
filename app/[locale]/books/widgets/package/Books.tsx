'use client';

import Image, { StaticImageData } from 'next/image';

import { Link } from '@/middleware';
import Heart from './Heart';
type BooksProps = {
	path?: StaticImageData | undefined;
	text?: string | undefined;
	author?: string;
	age?: string;
};
const Books: React.FC<BooksProps> = ({ path: src, text, age, author }) => {
	const path = `/book`;
	return (
		<div className="flex flex-col mb-6 md:flex-row w-1/2 xl:w-1/3 ">
			<Link href={path}>
				<Image src={src} alt={text} height={'200'} width={'150'} />
			</Link>
			<div className="pl-5 0.5sm:pt-3 flex-1">
				<Heart />
				<Link href={path}>
					<div className="max-h-15 text-11.5">{text}</div>
					<div className=" text-10">{author}</div>
					<div className="text-10">{age}</div>
				</Link>
			</div>
		</div>
	);
};
export default Books;
