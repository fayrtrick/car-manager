import { GrClose } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { Avatar } from "./Avatar";
import { HiHome } from "react-icons/hi2";
import { IconType } from "react-icons";
import { AiFillCar } from "react-icons/ai";

type NavigationLink = {
  name: string;
  url: string;
  Icon: IconType;
  subRoutes?: NavigationLink[];
};

const navigationLinks: NavigationLink[] = [
  {
    name: "Accueil",
    url: "/",
    Icon: HiHome,
  },
  {
    name: "Véhicules",
    url: "/vehicles",
    Icon: AiFillCar,
    subRoutes: [
      { name: "Liste", url: "/vehicles", Icon: AiFillCar },
      { name: "Ajouter", url: "/vehicles/add", Icon: AiFillCar },
    ],
  },
];

interface MenuItemProps {
  navigationLinks: NavigationLink;
}

const MenuItem = ({ navigationLinks }: MenuItemProps) => {
  const { name, url, Icon, subRoutes } = navigationLinks;
  return (
    <li>
      {!subRoutes && (
        <NavLink to={url}>
          {<Icon />} {name}
        </NavLink>
      )}
      {subRoutes && (
        <details>
          <summary>
            <Icon /> {name}
          </summary>
          <ul>
            {subRoutes.map((navigationLinks) => (
              <MenuItem navigationLinks={navigationLinks} />
            ))}
          </ul>
        </details>
      )}
    </li>
  );
};

const Sidebar = () => {
  const user = { firstName: "John", lastName: "Doe" };

  return (
    <div className="drawer-side shadow-md bg-white">
      <label htmlFor="sidebar" className="lg:!invisible drawer-overlay"></label>

      <div className="flex flex-col h-full w-80">
        <div className="lg:hidden flex justify-end p-4 pb-0">
          <label htmlFor="sidebar" className="p-1.5 cursor-pointer">
            <GrClose className="!stroke-gray-100" />
          </label>
        </div>

        <div className="px-4 py-6 border-b">
          <Avatar user={user} />
        </div>

        <ul className="menu px-4 py-6 flex flex-col gap-1 rounded-box text-base-content font-medium">
          {navigationLinks.map((navigationLinks) => (
            <MenuItem navigationLinks={navigationLinks} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
