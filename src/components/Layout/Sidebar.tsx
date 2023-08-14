import { GrClose } from "react-icons/gr";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const liensNavigation = [
  {
    name: "Accueil",
    url: "/",
    icon: <></>
  },
];

const Sidebar = ({}: SidebarProps) => {
  return (
    <div className="drawer-side shadow-md">
      <label htmlFor="sidebar" className="lg:!invisible drawer-overlay"></label>

      <div className="flex flex-col h-full w-80 bg-white">

        <div className="lg:hidden flex justify-end p-4 pb-0">
          <label htmlFor="sidebar" className="p-1.5 cursor-pointer">
            <GrClose className="!stroke-gray-100" />
          </label>
        </div>

        <div className="flex flex-col items-center px-4 py-6 gap-2 border-b">
          <div className="font-bold text-xl bg-base-100 w-14 h-14 rounded-full flex justify-center items-center">JD</div>
          <p className="font-medium">John Doe</p>
        </div>

        <ul className="menu p-4 w-80 h-full text-base-content">
          {liensNavigation.map(({ name, url, icon }) => (
            <li>
              <a href={url}>
                {icon} {name}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Sidebar;
