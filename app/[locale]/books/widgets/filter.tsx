'use client';

import { useForm } from 'react-hook-form';

export default function Sidebar() {
	const {
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<form className="">
			<div className=" ml-5 mr-3">
				<div className="flex text-13 mt-2 mb-4 pt-7 text-white-warm ">
					Sorting
					<div className="flex w-full items-center">
						<hr className="w-full" />
					</div>
				</div>
			</div>
		</form>
	);
}
