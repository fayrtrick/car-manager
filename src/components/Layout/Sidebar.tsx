import { GrClose } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { Avatar } from "./Avatar";
import { ReactNode } from "react";
import { HiHome } from "react-icons/hi2";
import { AiFillCar } from "react-icons/ai";

type NavigationLink = {
  name: string;
  url: string;
  icon: ReactNode;
};

const navigationLinks: NavigationLink[] = [
  {
    name: "Accueil",
    url: "/",
    icon: <HiHome />
  },
  {
    name: "Véhicules",
    url: "/vehicles",
    icon: <AiFillCar />
  },
];

const Sidebar = () => {
  const user = { firstName: "John", lastName: "Doe" };

  return (
    <div className="drawer-side shadow-md">
      <label htmlFor="sidebar" className="lg:!invisible drawer-overlay"></label>

      <div className="flex flex-col h-full w-80 bg-white">

        <div className="lg:hidden flex justify-end p-4 pb-0">
          <label htmlFor="sidebar" className="p-1.5 cursor-pointer">
            <GrClose className="!stroke-gray-100" />
          </label>
        </div>

        <div className="px-4 py-6 border-b">
          <Avatar user={user} />
        </div>

        <ul className="menu px-4 py-6 w-80 h-full text-base-content font-medium flex flex-col gap-1">
          {navigationLinks.map(({ name, url, icon }) => (
            <li>
              <NavLink to={url}>
                {icon} {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Sidebar;
