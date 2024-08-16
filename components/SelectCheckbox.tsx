import { useState } from 'react';
import Checkbox from '@/components/Checkbox';
import { SelectItem } from './Dropdown';
import search from '@/assets/svg/search-outline-PrimaryColor.svg';
import { varta } from '@/options/font';
import TextInput from './Input';
interface SelectCheckbook extends SelectItem {
	checked: boolean;
}
type SelectCheckboxType = {
	id: string;
	selected: string[];
	options: SelectCheckbook[];
	handleSelect: (data: { id: string; checked: boolean }) => void;
	placeholder: string;
};
const SelectCheckbox: React.FC<SelectCheckboxType> = ({
	options,
	selected,
	handleSelect,
	id,
	placeholder,
}) => {
	const [filter, setFilter] = useState('');

	const filtered = options.filter((a) => {
		return a.name.includes(filter.toLowerCase());
	});
	return (
		<>
			<TextInput
				img={{ imgUrl: search, imgAlt: 'search' }}
				onChange={(text) => {
					setFilter(text);
				}}
				value={filter}
				id={id}
				placeholder={placeholder}
			/>
			<div
				className={`px-3 py-3 mt-3 bg-white rounded-md border ${varta.className}`}
			>
				<div className="filter w-full  overflow-y-scroll max-h-272 flex items-start flex-col">
					<div className="flex flex-col pb-3">
						{filtered.map((a) => {
							const selectedIndex = selected.findIndex((s) => s === a.id);
							return (
								<Checkbox
									key={a.id}
									onChange={(e) => {
										handleSelect({ id: a.id, checked: e.target.checked });
									}}
									value={selectedIndex > -1}
									title={a.name}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default SelectCheckbox;
