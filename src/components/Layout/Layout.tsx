import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="drawer drawer-mobile bg-slate-200">
      <input
        id="sidebar"
        type="checkbox"
        onClick={() => setIsOpen(true)}
        className="drawer-toggle"
      />
      <div className="drawer-content flex flex-col">
        <div className="z-10 w-full rounded-3xl py-5 px-5 flex justify-between items-center bg-[#F1F1F1] shadow-xl drawer-button lg:hidden border-0">
          <label
            htmlFor="sidebar"
            className="hover:bg-[#E2E2E2] duration-100 p-3 rounded-3xl"
          >
            <HiMenu className="cursor-pointer" size={30} />
          </label>

          <img src="/logo.png" className="max-w-[3rem]" alt="logo" />
        </div>
        <div className="px-12 lg:px-16 py-7">{children}</div>
      </div>
      <Sidebar open={isOpen} setOpen={setIsOpen} />
    </div>
  );
};

export default Layout;
