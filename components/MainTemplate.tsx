import Content from '@/app/[locale]/book/BookContent';
import { ReactNode } from 'react';

type MainTemplateProps = {
	TopSection?: ReactNode;
	LeftColumn?: ReactNode;
	MainSection?: ReactNode;
	RightColumn?: ReactNode;
};

const MainTemplate: React.FC<MainTemplateProps> = ({
	LeftColumn,
	MainSection,
	RightColumn,
	TopSection,
}) => {
	return (
		<div className="w-full h-screen flex flex-col">
			{TopSection && <div className="w-full">{TopSection}</div>}
			<div className="flex flex-row flex-1">
				{LeftColumn && (
					<div className="w-full md:w-64 md:min-w-64 lg:w-80 lg:min-w-80 bg-gray-75 dark:bg-black-400 mx-4 rounded-r-3xl">
						{LeftColumn}
					</div>
				)}
				{MainSection && <div className="flex-1">{MainSection}</div>}
				{RightColumn && (
					<div className="w-full md:w-64 md:min-w-64 lg:w-80 lg:min-w-80 bg-gray-75 dark:bg-black-400 mx-4 rounded-r-3xl">
						{RightColumn}
					</div>
				)}
			</div>
		</div>
	);
};

export default MainTemplate;
