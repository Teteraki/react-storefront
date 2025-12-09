import { Link } from "react-router-dom";

/**
 * BreadCrumbItem Component
 *
 * A small, reusable component that renders a single breadcrumb link inside
 * a <li> element. Used within the main Breadcrumbs component to build
 * the full navigation trail.
 */

export const BreadCrumbItem = ({ href, label }) => {
  return (
    <li>
      <Link to={href} className="block transition-colors hover:text-gray-900">
        {label}
      </Link>
    </li>
  );
};
