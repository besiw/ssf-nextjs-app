'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './Sidebar.module.css';
import xCircle from '@/assets/svg/xCircle-light-bg-square-PrimaryColor.svg';
import barChart from '@/assets/svg/chartbar-outline-PrimaryColor.svg';
import search from '@/assets/svg/search-outline-PrimaryColor.svg';
import chevronUp from '@/assets/svg/chevronUp-outline-PrimaryColor.svg';


export default function Sidebar() {
	const {
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(errors);

	return (
		<div>
			<div className="filter w-screen flex justify-end md:w-1/3">
				<div className=" w-9 h-9 bg-gray-550 rounded-r-3xl flex items-center justify-center md:hidden">
					<image className='filter-light-bg-square-PrimaryColor' src={xCircle}/>
				</div>
			</div>
			<form className=" bg-gray-550 from">
				<div className=" ml-5 mr-3">
					<div className="flex text-13 mt-2 mb-4 pt-7">
						Sorting
						<div className="flex w-full items-center">
							<hr className="w-full" />
						</div>
					</div>
					<div className="flex bg-white h-11 items-center rounded-xl">
						<image className='barChart' src={barChart}/>
						<select
							className="w-full outline-none"
							size="1"
							onFocus="this.size = 8"
							onChange="this.blur()"
							onBlur="this.size = 1; this.blur()"
						>
							<option selected>--Select--</option>
							<option value="">One</option>
							<option value="">Two</option>
							<option value="">Three</option>
							<option value="">Four</option>
							<option value="">Five</option>
							<option value="">Six</option>
							<option value="">Seven</option>
							<option value="">Eight</option>
							<option value="">Nine</option>
							<option value="">Ten</option>
						</select>
					</div>
					<div className="flex text-13 mt-8 mb-5">
						Filter
						<div className="flex w-full items-center">
							<hr className="w-full" />
						</div>
					</div>
					<div>
						<div className=" text-sm mb-4">Book Title</div>
						<div className="flex h-11 items-center bg-white mb-5">
							<image className='search' src={search}/>
							<input
								className="outline-none"
								type="text"
								value=""
								placeholder="Search by book title"
							/>
						</div>
					</div>
					<div>
						<div className=" text-sm mb-4 flex justify-between">
							Year
							<image className='chevronUp' src={chevronUp}/>
						</div>
						<div className="flex">
							<input
								className="w-1/2 mr-3"
								type="date"
								id="time"
								min="1995-01-01"
								max="2060-01-06"
							/>
							<input
								className="w-1/2"
								type="date"
								id="time"
								min="1995-01-01"
								max="2060-01-06"
							/>
						</div>
					</div>
					<div>
						<div className=" text-sm my-4 flex justify-between">
							Auther
							<image className='chevronUp' src={chevronUp}/>
						</div>
						<div className="flex h-11 items-center bg-white mb-5">
							<image className='search' src={search}/>
							<input
								className="outline-none"
								type="text"
								value=""
								placeholder="Search by author"
							/>
						</div>
						<div className="w-full overflow-y-scroll h-272 flex items-start flex-col ">
							<div>
								<input type="checkbox" className="mr-5" />
								Auther
								<br />
							</div>
							<div>
								<input type="checkbox" className="mr-5" />
								Auther
								<br />
							</div>
							<div>
								<input type="checkbox" className="mr-5" />
								Auther
								<br />
							</div>
							<div>
								<input type="checkbox" className="mr-5" />
								Auther
								<br />
							</div>
							<div>
								<input type="checkbox" className="mr-5" />
								Auther
								<br />
							</div>
							<div>
								<input type="checkbox" className="mr-5" />
								Auther
								<br />
							</div>
							<div>
								<input type="checkbox" className="mr-5" />
								Auther
								<br />
							</div>
							<div>
								<input type="checkbox" className="mr-5" />
								Auther
								<br />
							</div>
							<div>
								<input type="checkbox" className="mr-5" />
								Auther
								<br />
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-center items-center mt-9">
					<div className="w-full h-11 border-2 flex items-center justify-center bg-white text-PrimaryColor-200 border-PrimaryColor-200 rounded-full mb-5 mx-5">
						Reset
					</div>
				</div>
			</form>
		</div>
	);
}
