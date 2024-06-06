type SidebarTitleProps = {
	title?: string;
};
import { inter } from '@/components/font';
const SidebarTitle: React.FC<SidebarTitleProps> = ({ title }) => {
	return (
		<>
			<div className={`flex mt-8 mb-4 dark:text-white-warm ${inter.className}`}>
				{title}
				<div className="flex w-full items-center pl-4">
					<hr className="w-full" />
				</div>
			</div>
		</>
	);
};
export default SidebarTitle;
