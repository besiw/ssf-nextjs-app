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
function SideNav() {
	return (
		<div className="h-screen hidden 1.5xl:flex flex-col w-full md:w-28 pt-7 bg-gray-200">
			<div className="flex-1">
				<div className="px-9">
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
						return (
							<div key={index} className="items-center m-auto">
								<Image src={i.imageSrc} width={'24'} height={'24'} alt="" />
							</div>
						);
					})}
				</div>
			</div>
			<div className="relative bg-gray-75 w-28 h-24 justify-center flex">
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