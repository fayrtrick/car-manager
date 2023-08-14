import { TopBar } from "./TopBar";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Suspense } from "react";

export function PrivateLayout() {
  return (
    <div className="drawer drawer-mobile lg:drawer-open">
      <input id="sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <TopBar />
        <div className="p-6 lg:px-12 lg:py-8">
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}