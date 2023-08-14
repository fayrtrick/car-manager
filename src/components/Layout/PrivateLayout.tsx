import { useState } from "react";
import { TopBar } from "./TopBar";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export function PrivateLayout() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="drawer drawer-mobile lg:drawer-open">
      <input id="sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <TopBar />
        <div className="px-10 lg:px-14 py-8">
          <Outlet />
        </div>
      </div>
      <Sidebar open={open} setOpen={setOpen} />
    </div>
  );
}