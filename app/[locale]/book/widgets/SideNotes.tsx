type SideNoteProps = {
	noteRefs: React.RefObject<HTMLDivElement>[];
	windowWidth: number;
	totalWidth: number;
};

type NotePositionType = {
	display: 'block' | 'none';
	top: number;
	left: number | undefined;
	right: number | undefined;
};
const sideColWidthMax = 320;
const SideNotes: React.FC<SideNoteProps> = ({
	noteRefs,
	totalWidth,
	windowWidth,
}) => {
	const getNotePosition = (index: number) => {
		const el = noteRefs[index].current;
		if (el && el.getBoundingClientRect) {
			const domProps = el.getBoundingClientRect();
			const { x, y, top, width, height } = domProps;
			const contentColEdge = windowWidth / 2 + totalWidth / 2;
			const result: NotePositionType = {
				display: x > sideColWidthMax && x < contentColEdge ? 'block' : 'none',
				top: top - 100,
				left: undefined,
				right: undefined,
			};
			if (x < 320 + totalWidth / 2) {
				result.left = -sideColWidthMax;
			} else {
				result.right = -sideColWidthMax;
			}

			return result;
		}
	};

	return (
		<>
			{noteRefs.map((item, index) => {
				const d = getNotePosition(index);
				console.log(d);
				return (
					<div className="absolute w-80" key={index} style={{ ...d }}>
						asdf
					</div>
				);
			})}
		</>
	);
};

export default SideNotes;
