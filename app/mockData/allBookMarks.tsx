import { bookMarkTpye } from '../type';
import bookmark from '@/assets/svg/bookmark-light-bg-square-PrimaryColor.svg';
import chartbar from '@/assets/svg/chartbar-outline-PrimaryColor.svg';
const allBookMarks: bookMarkTpye[] = [
	{
		title: 'BookMark',
		note: 'Lorem ipsum dolor sit amet',
		bookContent: '111',
		color: '',
		img: bookmark,
		time: '2024.04.30',
	},
	{
		title: 'Friend 1',
		note: 'Lorem ipsum dolor sit amet',
		bookContent: '111',
		color: 'border-cyan-200',
		img: chartbar,
		time: '2024.04.30',
	},
	{
		title: 'BookMark',
		note: 'Lorem ipsum dolor sit amet',
		bookContent: '111',
		color: '',
		img: 'bookmark',
		time: '2024.04.30',
	},
];
export default allBookMarks;
