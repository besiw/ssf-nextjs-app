import React from 'react';
import book1 from './img/book1.png';
import Image from 'next/image';

export default function Bookbody() {
	return (
		<>
			<div
				className="flex mx-auto max-w-950 0.5sm:w-354 1.5lg:w-734 1.6lg:w-950 flex-wrap overflow-y-scroll "
				style={{ height: 'calc(100vh - 56px)' }}
			>
				{[
					{
						path: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						age: '1971',
					},
					{
						path: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						age: '1971',
					},
					{
						path: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						age: '1971',
					},
					{
						path: book1,
						text: 'Stykker og referater i fornyet utgave fra Skjulte Skatter av Johan O. Smith',
						author: 'Morten, Øystein',
						age: '1971',
					},
					{
						path: book1,
						text: 'Apostelen ',
						author: 'Morten, Øystein',
						age: '1971',
					},
					{
						path: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						age: '1971',
					},
					{
						path: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						age: '1971',
					},
					{
						path: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						age: '1971',
					},
					{
						path: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						age: '1971',
					},
					{
						path: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						age: '1971',
					},
					{
						path: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						age: '1971',
					},
					{
						path: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						age: '1971',
					},
					{
						path: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						age: '1971',
					},
					{
						path: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						age: '1971',
					},
					{
						path: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						age: '1971',
					},
					{
						path: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						age: '1971',
					},
					{
						path: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						age: '1971',
					},
					{
						path: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						age: '1971',
					},
					{
						path: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						age: '1971',
					},
					{
						path: book1,
						text: 'The hunt for Sigurd Jorsalfare',
						author: 'Morten, Øystein',
						age: '1971',
					},
				].map((i, index) => {
					return (
						<div
							key={index}
							className="flex flex-col mb-6 md:flex-row w-1/2 xl:w-1/3 "
						>
							<Image
								src={i.path}
								alt={i.text}
								className="'flex pl-5 w-5/12 0.5sm:w-40' "
							/>
							<div className="pl-5 0.5sm:pt-3">
								<div className=" text-11.5">{i.text}</div>
								<div className=" text-10">{i.author}</div>
								<div className="text-10">{i.age}</div>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}
