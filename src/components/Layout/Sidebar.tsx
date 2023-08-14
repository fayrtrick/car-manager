import { GrClose } from "react-icons/gr";
import { Avatar } from "./Avatar";
import { HiCog8Tooth, HiHome, HiOutlineRocketLaunch } from "react-icons/hi2";
import { AiFillCar } from "react-icons/ai";
import { NavigationLink, SidebarLink } from "./SidebarLink";

const navigationLinks: NavigationLink[] = [
  {
    name: "Accueil",
    url: "/accueil",
    icon: <HiHome size={24} />
  },
  {
    name: "Véhicules",
    url: "/vehicles",
    icon: <AiFillCar size={24} />,
    children: [
      { name: "Test 1", url: "/vehicles/tset", icon: <HiOutlineRocketLaunch /> },
      { name: "Test 2", url: "/vehicles/test", icon: <HiOutlineRocketLaunch /> },
    ]
  },
  {
    name: "Paramètres",
    url: "/settings",
    icon: <HiCog8Tooth size={24} />
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

        <ul className="px-4 py-6 w-80 h-full text-base-content font-medium flex flex-col gap-1">
          {navigationLinks.map((link, index) => (
            <SidebarLink key={index} {...link} />
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Sidebar;
