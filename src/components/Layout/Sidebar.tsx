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
    <div className="drawer-side">
      <label htmlFor="sidebar" className="lg:!invisible drawer-overlay"></label>

      {/* Contenu */}
      <div className="flex flex-col h-full w-80 bg-white">

        <div className="lg:hidden flex justify-end p-3">
          <label htmlFor="sidebar" className="p-1.5 cursor-pointer">
            <GrClose className="!stroke-gray-100" />
          </label>
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
