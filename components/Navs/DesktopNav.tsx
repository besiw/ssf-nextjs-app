'use client';
import React, { useState } from 'react';
import ssfLogo from '@/assets/img/logobook.png';
import user from '@/assets/img/user.png';
import Image from 'next/image';
import useNav from './useNav';
import { inter } from '@/options/font';
import { Link, usePathname } from '@/options/navigation';

function SideNav() {
	const currentPath = usePathname();
	const nav = useNav();
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div
			className={`items-start h-screen hidden xl:flex flex-col pt-7 bg-gray-200 ${isOpen ? 'w-56 ' : ''}`}
		>
			<div className="flex-1 px-4 ">
				<button
					className="w-full mx-auto flex justify-center"
					onClick={() => {
						setIsOpen(!isOpen);
					}}
				>
					<Image
						src={ssfLogo}
						width={'46'}
						height={'46'}
						alt="logo"
						className="pb-5"
					/>
				</button>
				<div className="flex grow flex-col pt-5 h-96 ">
					{nav.map((i, index) => {
						const isActive = currentPath === i.path;
						return (
							<Link
								className="flex flex-row justify-start"
								key={index}
								href={i.path as '/'}
							>
								<div
									className={`w-14 h-14 flex items-center rounded-2xl justify-center ${isActive && ' bg-PrimaryColor-12'}`}
								>
									<Image src={i.icon} width={'24'} height={'56'} alt="" />
								</div>
								{isOpen && (
									<div className="ml-5 flex items-center w-28">
										<span
											className={`${isActive && 'text-PrimaryColor'} ${inter.className}`}
										>
											{i.title}
										</span>
									</div>
								)}
							</Link>
						);
					})}
				</div>
			</div>
			<div className="relative bg-gray-75 w-full h-24 justify-center flex">
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
