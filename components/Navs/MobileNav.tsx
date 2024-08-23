'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { Link, usePathname } from '@/options/navigation';
import useNav, { navItemType } from './useNav';
import { inter } from '@/options/font';
import { useWindowDimensions } from '@/helpers/useWindowDimensions';
import { useDimensions } from '@/helpers/useDimensions';

function MobileNav() {
	const currentPath = usePathname();
	const nav = useNav();
	const navRef = useRef<HTMLDivElement>(null);
	const { width: navWidth } = useDimensions(navRef);
	const { width: windowWidth } = useWindowDimensions();
	const hSpacing = (windowWidth - navWidth) / 2;
	return (
		<nav
			ref={navRef}
			style={{ left: hSpacing }}
			className="
					z-40 fixed bottom-3.5 md:bottom-5 l:hidden
          flex
          bg-gray-75
					border
          md:mx-auto
          justify-between
          mix-blend-normal 
					rounded-3xl
					pt-2
          px-4 
					md:py-3
          md:w-auto dark:bg-black-blackground02 dark:border-black-background"
		>
			{nav.map((i, index) => {
				const isActive = currentPath === i.path;
				return (
					<Link
						key={index}
						className={`m-auto ${inter.className}`}
						href={i.path as '/'}
					>
						<div
							className={`md:hidden w-16 h-16 rounded-2xl flex flex-col items-center justify-center ${isActive && 'md:bg-PrimaryColor'}`}
						>
							<Image
								src={isActive ? i.activeIcon : i.icon}
								width={'24'}
								height={'24'}
								alt={i.title}
								className="mx-auto"
							/>
							<div
								className={`mt-1 h-10 leading-4 text-center text-xs line-clamp-2 ${isActive ? 'text-PrimaryColor' : 'text-black-100'}`}
							>
								{i.title}
							</div>
						</div>
						<div
							className={`hidden md:flex p-4 pb-2 w-24 rounded-2xl  flex-col items-center justify-center ${isActive && 'md:bg-PrimaryColor-12 dark:md:bg-PrimaryColor-bgDark86'}`}
						>
							<Image
								src={i.icon}
								width={'24'}
								height={'24'}
								alt={i.title}
								className="mx-auto"
							/>
							<div className={`mt-2.5 h-10 leading-4 text-center text-sm`}>
								{i.title}
							</div>
						</div>
					</Link>
				);
			})}
		</nav>
	);
}

export default MobileNav;
