import { Link } from "react-router-dom";

/**
 * NavbarLink Component
 *
 * A simple presentational component that renders a single
 * navigation link inside a <li> element. Designed to be used
 * within a navbar or list of navigation items.
 *
 * @param {Object} props
 * @param {Object} props.link - The link configuration object.
 * @param {string} props.link.label - The text displayed for the link.
 * @param {string} props.link.href - The destination route for the link.
 */

export const NavbarLink = ({ link }) => {
  return (
    <li>
      <Link
        className="text-gray-500 transition hover:text-gray-500/75"
        to={link.href}
      >
        {link.label}
      </Link>
    </li>
  );
};
