'use client';

import Image, { StaticImageData } from 'next/image';
import { Link } from '@/options/navigation';
import Heart from '@/components/Icons/Heart';
import { BookBasicType } from '@/app/type';
import { cormorant_Garamond } from '@/options/font';

interface BooksProps extends BookBasicType {
	width?: string;
}
const Books: React.FC<BooksProps> = ({
	img,
	title,
	slug,
	year,
	author,
	width,
}) => {
	const path = `/book`;
	return (
		<div
			className={`flex flex-col mb-4 md:flex-row w-1/2 pr-4 ${width} ${cormorant_Garamond.className} `}
		>
			<div className="overflow-hidden rounded-lg relative">
				<div className=" left-2 bottom-2 w-8 h-8 bg-white flex justify-center items-center rounded-full md:hidden absolute ">
					<Heart />
				</div>
				{img && (
					<Link href={path}>
						<Image className="md:w-40" src={img} alt={title ? title : ''} />
					</Link>
				)}
			</div>
			<div className="md:px-6 pt-4 flex-1">
				<div className=" hidden md:block">
					<Heart />
				</div>
				<Link href={path}>
					<div className="clamp-2 font-bold">{title}</div>
					<div className="font-medium">{author}</div>
					<div className="font-medium">{year}</div>
				</Link>
			</div>
		</div>
	);
};
export default Books;
