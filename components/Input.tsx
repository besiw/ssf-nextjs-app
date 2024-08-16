import Image from 'next/image';
import { varta } from '@/options/font';

export type TextInputProps = {
	img?: {
		imgUrl: string;
		imgAlt: string;
	};
	id: string;
	onChange: (text: string) => void;
	value: any;
	placeholder?: string;
};
const TextInput: React.FC<TextInputProps> = ({
	img,
	placeholder,
	id,
	onChange,
	value,
}) => {
	return (
		<div className="flex bg-white h-11 items-center rounded-md px-3 py-2 border">
			{img && <Image className="search" src={img.imgUrl} alt={img.imgAlt} />}
			<input
				value={value}
				id={id}
				onChange={(e: any) => {
					onChange(e.target.value);
				}}
				className={`${varta.className} outline-none w-full ml-2 pt-1 font-light`}
				type="text"
				placeholder={placeholder}
			/>
		</div>
	);
};

export default TextInput;
