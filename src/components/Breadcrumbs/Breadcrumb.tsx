
export interface BreadcrumbProps {
  name: string;
  href?: string;
  last: boolean;
}

const Breadcrumb = ({ href, name, last }: BreadcrumbProps) => {

  const className = "before:text-primary-500 before:!opacity-80";

  if (href) {
    return (
      <li className="before:text-primary-500 before:!opacity-80">
        <a
          href={href}
          className={`hover:!no-underline ${last && "text-gray-500"}`}
        >
          {name}
        </a>
      </li>
    );
  }

  return (
    <li className={className}>
      {name}
    </li>
  );
}

export default Breadcrumb;
