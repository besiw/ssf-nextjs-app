import { ReactNode } from 'react';

type MainTemplateProps = {
	TopSection?: ReactNode;
	LeftColumn?: ReactNode;
	MainSection?: ReactNode;
	RightColumn?: ReactNode;
	scroll?: boolean;
	showFilter?: boolean;
};

const MainTemplate: React.FC<MainTemplateProps> = ({
	LeftColumn,
	MainSection,
	RightColumn,
	TopSection,
	scroll,
}) => {
	return (
		<div className="w-full h-screen flex flex-col relative">
			{TopSection && <div className="w-full">{TopSection}</div>}
			<div
				className={`flex flex-row flex-1 ${scroll ? 'overflow-y-scroll' : ''}`}
			>
				{LeftColumn && (
					<div className="flex-1 1.6lg:block 1.6lg:w-64 1.6lg:min-w-64 xl:w-80 xl:min-w-80">
						{LeftColumn}
					</div>
				)}
				{MainSection && <div className="flex-2">{MainSection}</div>}
				{RightColumn && (
					<div className="flex-1 1.6lg:block 1.6lg:w-64 1.6lg:min-w-64 xl:w-80 xl:min-w-80">
						{RightColumn}
					</div>
				)}
			</div>
		</div>
	);
};

export default MainTemplate;
