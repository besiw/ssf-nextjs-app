type SidebarTitleProps = {
  title?: string;
};
const SidebarTitle: React.FC<SidebarTitleProps> = ({ title }) => {
  return (
    <>
      <div className="flex text-13 mt-2 mb-4 pt-7 dark:text-white-warm ">
        {title}
        <div className="flex w-full items-center pl-4">
          <hr className="w-full" />
        </div>
      </div>
    </>
  );
};
export default SidebarTitle;
