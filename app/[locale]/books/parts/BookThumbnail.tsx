'use client';

import Image, { StaticImageData } from 'next/image';
import { Link } from '@/options/navigation';
import Heart from '@/components/Icons/Heart';
import { Book } from '@/app/type';
import { cormorant_Garamond, inter } from '@/options/font';

interface BooksProps extends Book {
	width?: string;
}
const Books: React.FC<BooksProps> = ({
	cover_id,
	name,
	date_published,
	author_ids,
	width = 'w-1/2',
}) => {
	const path = `/book`;
	const cover = `https://api.sssf.life/blobs/image/book/${cover_id}`;

	return (
		<li
			className={`flex flex-col mb-4 md:flex-row w-1/2 pr-4 ${width} ${cormorant_Garamond.className} `}
		>
			<div
				className="overflow-hidden rounded-lg relative w-full md:w-40 block"
				style={{ aspectRatio: 165 / 220 }}
			>
				<div className=" left-2 bottom-2 w-8 h-8 bg-white flex justify-center items-center rounded-full md:hidden absolute dark:bg-black-background">
					<Heart />
				</div>

				<Link href={path}>
					{cover_id ? (
						<Image
							className="w-full"
							src={cover}
							alt={name ? name : ''}
							width={0}
							height={0}
							sizes="100vw"
							style={{ width: '100%', height: 'auto', aspectRatio: 165 / 220 }} // optional
						/>
					) : (
						<div
							className={`pt-8 px-5 clamp-2 font-bold text-white text-center bg-PrimaryColor h-full ${inter.className}`}
						>
							{name}
						</div>
					)}
				</Link>
			</div>
			<div className="md:px-6 pt-4 flex-1">
				<div className=" hidden md:block">
					<Heart />
				</div>
				<Link
					href={path}
					className="dark:text-white-darkText02 md:dark:text-white-darkText01"
				>
					<div className="clamp-2 font-bold dark:text-white-darkText01">
						{name}
					</div>
					<div className="font-medium ">Author {author_ids[0]}</div>
					<div className="font-medium">{date_published.substring(0, 4)}</div>
				</Link>
			</div>
		</li>
	);
};
export default Books;
