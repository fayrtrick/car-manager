import MenuItem from "./MenuItem";

import {
  FaChevronRight,
  FaUserAlt,
  FaFileContract,
  FaSchool,
  FaToolbox,
} from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";

const MiddleMenus = [
  {
    title: "Dashboard",
    href: "/",
    Icon: AiFillHome,
  },
  {
    title: "Gestion d'utilisateurs",
    href: "/users",
    Icon: FaUserAlt,
  },
  {
    title: "Contrat renting",
    href: "/renting",
    Icon: FaFileContract,
  },
  {
    title: "Gestion intervenants",
    href: "/intervenants",
    Icon: FaSchool,
  },
  {
    title: "Gestion des matériaux",
    href: "/materials",
    Icon: FaToolbox,
  },
];

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  return (
    <div className="drawer-side !overflow-visible">
      <label htmlFor="sidebar" className="lg:!invisible drawer-overlay"></label>

      <div
        className={`bg-[#F1F1F1] shadow-xl rounded-3xl ${
          open ? "w-[19rem]" : "w-28"
        } p-5 pt-8 flex flex-col font-bold relative duration-300`}
      >
        <div
          onClick={() => setOpen(!open)}
          className={`bg-accent hidden lg:block ${
            open && "rotate-180"
          } duration-500 text-accent-content rounded-full absolute -right-3 top-9 cursor-pointer`}
        >
          <FaChevronRight className="m-1" size={20} />
        </div>

        <div className="inline-flex mb-10">
          <img className="max-w-[4.5rem]" src="/logo.png" alt="logo" />
          <div className="flex flex-col justify-center">
            <h1 className={`${!open && "hidden"} text-2xl`}>APKiosk</h1>
            <h2 className={`${!open && "hidden"} text-[#8D8D8D] text-lg`}>
              Renting
            </h2>
          </div>
        </div>

        <ul className="flex-1">
          {MiddleMenus.map((item, index) => (
            <MenuItem
              active={location.pathname === item.href}
              key={index}
              title={item.title}
              Icon={item.Icon}
              open={open}
              href={item.href}
            />
          ))}
        </ul>

        <ul>
          <MenuItem
            href="/profile"
            title="Profile"
            subText="Role"
            Icon={RxAvatar}
            open={open}
          />
          <MenuItem
            title="Se déconnecter"
            Icon={FiLogOut}
            open={open}
            color="accent"
          />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
