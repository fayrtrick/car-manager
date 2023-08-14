import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import Sidebar from "./components/Layout/Sidebar";

function App() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="drawer drawer-mobile lg:drawer-open">
      <input id="sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full py-2 px-5 flex justify-between items-center bg-secondary shadow-xl drawer-button lg:hidden border-0">
          <label
            htmlFor="sidebar"
            className="hover:bg-[#E2E2E2] duration-100 p-3 rounded-3xl"
          >
            <HiMenu className="cursor-pointer" size={30} />
          </label>
          <img
            className="max-w-[80px]"
            src="https://static.vecteezy.com/system/resources/previews/013/923/537/original/red-car-vehicle-auto-detailing-logo-png.png"
          />
        </div>
        <div className="px-12 lg:px-16 py-7">
          <p>test</p>
        </div>
      </div>
      <Sidebar open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
