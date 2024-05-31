type SidebarButtonProps = {
  buttonBody?: string;
};
const SidebarButton: React.FC<SidebarButtonProps> = ({ buttonBody }) => {
  return (
    <button className="w-full h-11 border-2 flex items-center justify-center bg-white text-PrimaryColor-200 border-PrimaryColor-200 rounded-full mb-7">
      {buttonBody}
    </button>
  );
};
export default SidebarButton;
