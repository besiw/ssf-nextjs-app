'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './Sidebar.module.css';

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
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
					>
						<path
							stroke="rgba(0, 0, 0, 1)"
							strokeWidth="2"
							strokeLinejoin="round"
							strokeLinecap="round"
							d="M18 6L6 18"
						></path>
						<path
							stroke="rgba(0, 0, 0, 1)"
							strokeWidth="2"
							strokeLinejoin="round"
							strokeLinecap="round"
							d="M6 6L18 18"
						></path>
					</svg>
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
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								stroke="rgba(242, 138, 93, 1)"
								strokeWidth="2"
								strokeLinejoin="round"
								strokeLinecap="round"
								d="M18 20L18 10"
							></path>
							<path
								stroke="rgba(242, 138, 93, 1)"
								strokeWidth="2"
								strokeLinejoin="round"
								strokeLinecap="round"
								d="M12 20L12 4"
							></path>
							<path
								stroke="rgba(242, 138, 93, 1)"
								strokeWidth="2"
								strokeLinejoin="round"
								strokeLinecap="round"
								d="M6 20L6 14"
							></path>
						</svg>
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
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58176 6.58172 3.00004 11 3.00004C15.4183 3.00004 19 6.58176 19 11Z"
									stroke="rgba(242, 138, 93, 1)"
									strokeWidth="2"
									strokeLinejoin="round"
									strokeLinecap="round"
								></path>
								<path
									stroke="rgba(242, 138, 93, 1)"
									strokeWidth="2"
									strokeLinejoin="round"
									strokeLinecap="round"
									d="M21.0004 21.0001L16.6504 16.6501"
								></path>
							</svg>
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
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									fillRule="evenodd"
									stroke="rgba(242, 138, 93, 1)"
									strokeWidth="2"
									strokeLinejoin="round"
									strokeLinecap="round"
									d="M18 15L12 9L6 15M18 15L12 9L6 15"
								></path>
							</svg>
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
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									fillRule="evenodd"
									stroke="rgba(242, 138, 93, 1)"
									strokeWidth="2"
									strokeLinejoin="round"
									strokeLinecap="round"
									d="M18 15L12 9L6 15M18 15L12 9L6 15"
								></path>
							</svg>
						</div>
						<div className="flex h-11 items-center bg-white mb-5">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58176 6.58172 3.00004 11 3.00004C15.4183 3.00004 19 6.58176 19 11Z"
									stroke="rgba(242, 138, 93, 1)"
									strokeWidth="2"
									strokeLinejoin="round"
									strokeLinecap="round"
								></path>
								<path
									stroke="rgba(242, 138, 93, 1)"
									strokeWidth="2"
									strokeLinejoin="round"
									strokeLinecap="round"
									d="M21.0004 21.0001L16.6504 16.6501"
								></path>
							</svg>
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
