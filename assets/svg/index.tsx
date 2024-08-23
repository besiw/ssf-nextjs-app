type colorType = 'black' | 'white' | 'primary' | string;

const setColor = (color?: colorType) => {
	switch (color) {
		case 'black':
			return 'black';
		case 'white':
			return '#F3E7DE';
		case 'primary':
			return '#F28A5D';
		case undefined:
			'black';
		default:
			return color;
	}
};

export const Home: React.FC<{
	color?: colorType;
}> = ({ color }) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
				stroke={setColor(color)}
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M9 22V12H15V22"
				stroke={setColor(color)}
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

export const Book: React.FC<{
	color?: colorType;
}> = ({ color }) => {
	return (
		<svg
			width="25"
			height="24"
			viewBox="0 0 25 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4.5 19.5C4.5 18.837 4.76339 18.2011 5.23223 17.7322C5.70107 17.2634 6.33696 17 7 17H20.5"
				stroke={setColor(color)}
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M7 2H20.5V22H7C6.33696 22 5.70107 21.7366 5.23223 21.2678C4.76339 20.7989 4.5 20.163 4.5 19.5V4.5C4.5 3.83696 4.76339 3.20107 5.23223 2.73223C5.70107 2.26339 6.33696 2 7 2Z"
				stroke={setColor(color)}
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

export const Magazine: React.FC<{
	color?: colorType;
}> = ({ color }) => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M1.66797 2.5H6.66797C7.55202 2.5 8.39987 2.85119 9.02499 3.47631C9.65011 4.10143 10.0013 4.94928 10.0013 5.83333V17.5C10.0013 16.837 9.73791 16.2011 9.26907 15.7322C8.80023 15.2634 8.16434 15 7.5013 15H1.66797V2.5Z"
				stroke={setColor(color)}
				stroke-opacity="0.86"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M18.3333 2.5H13.3333C12.4493 2.5 11.6014 2.85119 10.9763 3.47631C10.3512 4.10143 10 4.94928 10 5.83333V17.5C10 16.837 10.2634 16.2011 10.7322 15.7322C11.2011 15.2634 11.837 15 12.5 15H18.3333V2.5Z"
				stroke={setColor(color)}
				stroke-opacity="0.86"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

export const Search: React.FC<{
	color?: colorType;
}> = ({ color }) => {
	return (
		<svg
			width="21"
			height="20"
			viewBox="0 0 21 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M9.66667 15.8333C13.3486 15.8333 16.3333 12.8486 16.3333 9.16667C16.3333 5.48477 13.3486 2.5 9.66667 2.5C5.98477 2.5 3 5.48477 3 9.16667C3 12.8486 5.98477 15.8333 9.66667 15.8333Z"
				stroke={setColor(color)}
				stroke-opacity="0.86"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M18 17.5L14.375 13.875"
				stroke={setColor(color)}
				stroke-opacity="0.86"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

export const More: React.FC<{
	color?: colorType;
}> = ({ color }) => {
	return (
		<svg
			width="25"
			height="24"
			viewBox="0 0 25 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12.5 13C13.0523 13 13.5 12.5523 13.5 12C13.5 11.4477 13.0523 11 12.5 11C11.9477 11 11.5 11.4477 11.5 12C11.5 12.5523 11.9477 13 12.5 13Z"
				stroke={setColor(color)}
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M12.5 6C13.0523 6 13.5 5.55228 13.5 5C13.5 4.44772 13.0523 4 12.5 4C11.9477 4 11.5 4.44772 11.5 5C11.5 5.55228 11.9477 6 12.5 6Z"
				stroke={setColor(color)}
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M12.5 20C13.0523 20 13.5 19.5523 13.5 19C13.5 18.4477 13.0523 18 12.5 18C11.9477 18 11.5 18.4477 11.5 19C11.5 19.5523 11.9477 20 12.5 20Z"
				stroke={setColor(color)}
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};
