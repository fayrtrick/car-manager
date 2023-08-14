import { ReactNode, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiMinus, HiPlus } from "react-icons/hi2";

export type NavigationLink = {
  name: string;
  url: string;
  icon: ReactNode;
  children?: Omit<NavigationLink, "children">[];
};

type SidebarLinkProps = NavigationLink;

export function SidebarLink({ name, url, icon, children }: SidebarLinkProps) {
  const { pathname } = useLocation();
  const hasChildren = children && children.length > 0;
  const isActive = hasChildren ? pathname.startsWith(url) : url.startsWith(pathname);
  const commonStyle = `w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-primary-50 hover:border-primary-100 border border-transparent transition-all${isActive ? " text-primary-400" : ""}`;
  const [isOpened, setIsOpened] = useState<boolean>(false);

  if (!hasChildren) {
    return (
      <li>
        <NavLink className={commonStyle} to={url}>
          {icon} {name}
        </NavLink>
      </li>
    );
  }

  return (
    <li>
      <button onClick={() => setIsOpened(!isOpened)} className={`${commonStyle} justify-between ${isActive ? " text-primary-300 hover:text-primary-500" : ""}`}>
        <div className={`flex gap-2${isActive ? " text-primary-400" : ""}`}>{icon} {name}</div>
        {isOpened ? (
          <HiMinus size={18} />
        ) : (
          <HiPlus size={18} />
        )}
      </button>
      {isOpened ? (
        <ul className="mt-1 ml-6 flex flex-col gap-1 [&>li>a]:py-1.5">
          {children?.map((link, index) => (
            <SidebarLink key={index} {...link} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}