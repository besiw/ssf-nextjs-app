type NoteColProps = {
	title: string;
	left?: boolean;
};

const NoteCol: React.FC<NoteColProps> = ({ title, left }) => {
	return (
		<div
			className={`h-44 shadow-lg p-4 ${left ? 'rounded-r-3xl' : 'rounded-l-3xl'}`}
			style={{ width: 312 }}
		>
			{title}
		</div>
	);
};

export default NoteCol;
