import { IconType } from "react-icons";

export interface MenuItemsProps {
  Icon: IconType;
  href?: string;
  color?: string;
  title: string;
  open: boolean;
  subText?: string;
  onClick?: () => void;
  active?: boolean;
}

const MenuItem = ({
  Icon,
  href,
  color,
  title,
  open,
  subText,
  onClick,
  active,
}: MenuItemsProps) => {
  const buttonContent = (
    <li
      onClick={onClick}
      className={`${
        active && "bg-[#E2E2E2] bottom-active"
      } py-5 hover:bg-[#E2E2E2] cursor-pointer rounded-3xl flex items-center my-2 duration-100 relative`}
    >
      <Icon
        className={`min-w-[4.5rem] ${color ? "text-accent" : "text-primary"}`}
        size={30}
      />
      <div className={`flex flex-col ${!open && "hidden"} animate-opacity`}>
        <span className={`${color && `text-accent`} whitespace-nowrap`}>
          {title}
        </span>
        {subText && (
          <span className={`text-gray-400 whitespace-nowrap`}>{subText}</span>
        )}
      </div>
    </li>
  );

  if (href) return <a href={href}>{buttonContent}</a>;
  return buttonContent;
};

export default MenuItem;
