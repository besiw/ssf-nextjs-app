'use client';
import React from 'react';
import ssfLogo from '@/assets/img/logobook.png';
import home from '@/assets/img/home-outline-black.png';
import books from '@/assets/img/book-outline-black.png';
import magazine from '@/assets/img/open-book-outline-black.png';
import search from '@/assets/img/search-outline-black.png';
import history from '@/assets/img/history-outline-black.png';
import settings from '@/assets/img/sliders-outline-black.png';
import user from '@/assets/img/user.png';

import Image from 'next/image';
import { Link, useRouter, usePathname } from '@/middleware';

function SideNav() {
	const ePathname = usePathname();
	const currentPath = ePathname;
	return (
		<div className="h-screen hidden 1.5xl:flex flex-col w-full md:w-20 pt-7 bg-gray-200">
			<div className="flex-1">
				<div className="w-full mx-auto flex justify-center">
					<Image
						src={ssfLogo}
						width={'46'}
						height={'46'}
						alt="logo"
						className="pb-5"
					/>
				</div>
				<div className="flex grow flex-col justify-center items-center pt-5 h-96 ">
					{[
						{ imageSrc: home, label: 'Home', path: '/' },
						{ imageSrc: books, label: 'Books', path: '/books' },
						{
							imageSrc: magazine,
							label: 'Hidden Treasure',
							path: '/hidden-treasure',
						},
						{ imageSrc: search, label: 'Search', path: '/search' },
						{ imageSrc: history, label: 'Bookmarks', path: '/bookmarks' },
						{ imageSrc: settings, label: 'Settings', path: '/search' },
					].map((i, index) => {
						const isActive = currentPath === i.path;
						return (
							<Link key={index} className={` m-auto `} href={i.path}>
								<div
									className={`w-14 h-14 flex items-center rounded-2xl justify-center ${isActive && ' bg-PrimaryColor-200'}`}
								>
									<Image src={i.imageSrc} width={'24'} height={'56'} alt="" />
								</div>
							</Link>
						);
					})}
				</div>
			</div>
			<div className="relative bg-gray-75 w-20 h-24 justify-center flex">
				<Image
					src={user}
					height={'34'}
					width={'34'}
					className="w-8 h-8 absolute"
					style={{ top: '-17px' }}
					alt="user"
				/>
			</div>
		</div>
	);
}

export default SideNav;
