import Breadcrumb from "./Breadcrumb";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  breadcrumbs: BreadcrumbItem[];
}

const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        {breadcrumbs.map((breadcrumb, index) => (
          <Breadcrumb
            key={index}
            {...breadcrumb}
            last={index === breadcrumbs.length - 1}
          />
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
