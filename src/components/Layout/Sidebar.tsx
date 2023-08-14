import React from "react";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  return (
    <div className="drawer-side">
      <label htmlFor="sidebar" className="lg:!invisible drawer-overlay"></label>

      <div className="bg-white shadow-xl  p-5 pt-8 flex flex-col font-bold relative duration-300"></div>

      <ul className="menu p-4 w-80 h-full bg-white text-base-content">
        {/* Sidebar content here */}
        <li>
          <a>Sidebar Item 1</a>
        </li>
        <li>
          <a>Sidebar Item 2</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
