import SideNoteBlock from './SideNoteBlock';
import { noteType } from '../type';
import { number } from 'zod';
type SideNoteProps = {
	noteRefs: React.RefObject<HTMLDivElement>[];
	windowWidth: number;
	totalWidth: number;
	notes: noteType[];
};

type NotePositionType = {
	display: 'block' | 'none';
	top: number;
	left: number | undefined;
	right: number | undefined;
	onLeft: boolean;
};
const sideColWidthMax = 320;
const SideNotes: React.FC<SideNoteProps> = ({
	noteRefs,
	totalWidth,
	windowWidth,
	notes,
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
				onLeft: x < windowWidth / 2,
			};
			if (x < windowWidth / 2) {
				result.left = -sideColWidthMax;
			} else {
				result.right = -sideColWidthMax - 16;
			}

			return result;
		}
	};

	return (
		<>
			{noteRefs.map((item, index) => {
				const d = getNotePosition(index);
				const note = notes[index];
				return (
					<div className="absolute w-80" key={index} style={{ ...d }}>
						<SideNoteBlock {...note} left={d?.onLeft} />
					</div>
				);
			})}
		</>
	);
};

export default SideNotes;
