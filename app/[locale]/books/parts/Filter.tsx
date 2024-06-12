'use client';

import { useForm } from 'react-hook-form';
import barChart from '@/assets/svg/chartbar-outline-PrimaryColor.svg';
import chevrondowm from '@/assets/svg/chevronDoubleDown-white.svg';
import search from '@/assets/svg/search-outline-PrimaryColor.svg';
import chevronUp from '@/assets/svg/chevronUp-outline-PrimaryColor.svg';
import './Sidebar.css';

import Image from 'next/image';
import { varta, inter } from '@/options/font';

const Sidebar = () => {
	const {
		formState: { errors },
	} = useForm();
	// const onSubmit = (data) => console.log(data);

	return (
		<div className="relative pr-4 z-50 xl:pl-4">
			<form
				className="px-5 text-start bg-gray-75 rounded-r-3xl overflow-hidden"
				onChange={() => {}}
			>
				<SidebarTitle title="Sorting" />
				<div className="flex bg-white h-11 items-center rounded-md px-3 py-2 mt-8 border">
					<Image className="barChart" src={barChart} alt={'barChart'} />
					<select
						value={'1'}
						className={`w-full ml-4 outline-none ${varta.className} font-light`}
					>
						<option>--Select--</option>
						<option value="2">One</option>
						<option value="3">Two</option>
					</select>
				</div>
				<SidebarTitle title="Filter" />
				<div className="">Book Title</div>
				<div className="flex bg-white h-11 items-center rounded-md px-3 py-2 mt-8 border">
					<Image className="search" src={search} alt={'search'} />
					<input
						className={`${varta.className} outline-none w-full ml-2`}
						type="text"
						value=""
						placeholder="Search by book title"
					/>
				</div>
				<div className="mt-8 mb-4 flex justify-between">
					Year
					<Image className="chevronUp" src={chevronUp} alt={'chevronUp'} />
				</div>
				<div className={`mt-8 mb-4 flex justify-between ${varta.className}`}>
					<input
						className="w-1/2 mr-3 flex bg-white h-11 items-center rounded-md p-2 border"
						type="date"
						id="time"
						min="1995-01-01"
						max="2060-01-06"
					/>
					<input
						className="w-1/2 mr-3 flex bg-white h-11 items-center rounded-md p-2 border"
						type="date"
						id="time"
						min="1995-01-01"
						max="2060-01-06"
					/>
				</div>
				<div className="mt-8 mb-4 flex justify-between">
					Author
					<Image className="chevronUp" src={chevronUp} alt={'chevronUp'} />
				</div>
				<div className="flex bg-white h-11 items-center rounded-md px-3 py-2 mt-8 border">
					<Image className="search" src={search} alt={'search'} />
					<input
						className="outline-none w-full ml-2"
						type="text"
						value=""
						placeholder="Search by author"
					/>
				</div>
				<div
					className={`px-5 py-3 mt-3 bg-white rounded-md border ${varta.className}`}
				>
					<div className="filter w-full  overflow-y-scroll h-272 flex items-start flex-col">
						<div className="flex items-center pb-3">
							<input type="checkbox" className="mr-5" />
							Author 1
							<br />
						</div>
					</div>
				</div>
				<div className={`flex justify-center items-center mt-7`}>
					<SidebarButton buttonBody="Reset" />
				</div>
			</form>
		</div>
	);
};

export default Sidebar;

type SidebarTitleProps = {
	title?: string;
};
const SidebarTitle: React.FC<SidebarTitleProps> = ({ title }) => {
	return (
		<>
			<div className={`flex mt-8 mb-4 dark:text-white-warm ${inter.className}`}>
				{title}
				<div className="flex w-full items-center pl-4">
					<hr className="w-full" />
				</div>
			</div>
		</>
	);
};

type SidebarButtonProps = {
	buttonBody?: string;
};
const SidebarButton: React.FC<SidebarButtonProps> = ({ buttonBody }) => {
	return (
		<button className="w-full h-11 border flex items-center justify-center bg-white text-PrimaryColor border-PrimaryColorrounded-full mb-7">
			{buttonBody}
		</button>
	);
};
