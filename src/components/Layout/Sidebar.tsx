import { GrClose } from "react-icons/gr";
import { Avatar } from "./Avatar";
import { HiHome } from "react-icons/hi2";
import { IconType } from "react-icons";
import { AiFillCar } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";

type NavigationLink = {
  name: string;
  Icon: IconType;
  url: string;
  subRoutes?: NavigationLink[];
};

const navigationLinks: NavigationLink[] = [
  {
    name: "Accueil",
    url: "/",
    Icon: HiHome,
  },
  {
    name: "Gestion",
    Icon: AiFillCar,
    url: "/inventory",
    subRoutes: [{ name: "Inventaire", url: "/inventory", Icon: AiFillCar }],
  },
];

interface MenuItemProps {
  navigationLinks: NavigationLink;
}

const MenuItem = ({ navigationLinks }: MenuItemProps) => {
  const { pathname } = useLocation();
  const { name, url, Icon, subRoutes } = navigationLinks;
  const isActive = subRoutes
    ? pathname.startsWith(url)
    : url.endsWith(pathname);

  return (
    <li>
      {!subRoutes && (
        <NavLink
          to={url || ""}
          className={`${
            isActive && "!bg-primary-300 !text-gray-700"
          } active:!bg-red-200 font-normal`}
        >
          {<Icon />} {name}
        </NavLink>
      )}
      {subRoutes && (
        <details className="open:bg-gray-100 rounded-xl" open={isActive}>
          <summary
            className={`${isActive && "bg-primary-200"} active:!bg-transparent`}
          >
            <Icon /> {name}
          </summary>
          <ul>
            {subRoutes.map((navigationLinks, index) => (
              <MenuItem key={index} navigationLinks={navigationLinks} />
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
    <div className="drawer-side shadow-md lg:bg-white">
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

        <ul className="menu px-4 py-6 flex flex-col gap-1 rounded-box text-base-content">
          {navigationLinks.map((navigationLinks) => (
            <MenuItem navigationLinks={navigationLinks} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
