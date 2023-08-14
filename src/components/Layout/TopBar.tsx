import { HiMenu } from "react-icons/hi";

export function TopBar() {
  return (
    <div className="w-full py-2 px-5 flex justify-between items-center bg-primary-400 drawer-button lg:hidden border-0">
      <label
        htmlFor="sidebar"
        className="hover:text-primary-100 duration-100 p-3 cursor-pointer text-white"
      >
        <HiMenu size={26} />
      </label>
      <img
        className="max-h-[50px]"
        src="https://static.vecteezy.com/system/resources/previews/013/923/537/original/red-car-vehicle-auto-detailing-logo-png.png"
      />
    </div>
  );
}