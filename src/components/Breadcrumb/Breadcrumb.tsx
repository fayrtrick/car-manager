interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = (props: BreadcrumbProps) => {
  return (
    <div className="text-sm breadcrumbs !pb-0">
      <ul>
        {props.items.map(({ name, href }, index) => (
          <li
            key={index}
            className="before:text-primary-500 before:!opacity-80"
          >
            <a
              href={href}
              className={`hover:!no-underline ${
                index === props.items.length - 1 && "text-gray-500"
              }`}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;
