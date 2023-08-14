import { HiMenu } from "react-icons/hi";

export function TopBar() {
  return (
    <div className="w-full py-2 px-3 flex justify-between items-center bg-primary-400 drawer-button lg:hidden border-0">
      <label
        htmlFor="sidebar"
        className="hover:text-primary-100 duration-100 p-3 cursor-pointer text-white"
      >
        <HiMenu size={26} />
      </label>
      <button className="p-3 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="currentColor"
             stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
             className="lucide lucide-car">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/>
          <circle cx="7" cy="17" r="2"/>
          <path d="M9 17h6"/>
          <circle cx="17" cy="17" r="2"/>
        </svg>
      </button>
    </div>
  );
}