import filter from '@/assets/svg/filter-outline-white.svg';
import filter2 from '@/assets/svg/filter-outline-PrimaryColor.svg';
import Image from 'next/image';
import { useState } from 'react';
export default function BooksFilter() {
	const [isActive, setIsActive] = useState(true);

	return (
		<div className="flex items-center pl-5 py-8">
			<button
				onClick={() => {
					setIsActive(!isActive);
				}}
			>
				<div
					className={`flex py-2 px-3 mr-6 rounded-2xl justify-center items-center   ${isActive ? 'bg-PrimaryColor-diaphaneity12' : 'bg-PrimaryColor-200'} `}
				>
					<Image src={isActive ? filter2 : filter} alt="" className={`mr-3`} />
					<div
						className={`text-12 ${isActive ? 'text-black-200' : 'text-white '}`}
					>
						Filter
					</div>
				</div>
			</button>
			<div className=" pl-6 h-5 border-l-2"></div>
			<div className=" text-12">Library</div>
		</div>
	);
}
