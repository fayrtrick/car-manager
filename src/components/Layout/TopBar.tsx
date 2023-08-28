import { HiMenu } from "react-icons/hi";

export function TopBar() {
  return (
    <div className="w-full py-2 px-3 flex justify-between items-center bg-accent drawer-button lg:hidden border-0 relative">
      <label
        htmlFor="sidebar"
        className="hover:text-primary-100 duration-100 p-3 cursor-pointer text-white"
      >
        <HiMenu size={26} />
      </label>
      <button className="p-3 text-white absolute left-1/2 -translate-x-1/2">
        <img src="/logo.png" alt="logo" className="w-10" />
      </button>
    </div>
  );
}
