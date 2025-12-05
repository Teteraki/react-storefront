import { Link } from "react-router-dom";

/**
 * LogoLink Component
 *
 * A clickable brand/identity element that routes users to the home (/) page.
 * This component wraps the site logo/brand text in a react-router-dom
 * <Link>, enabling client-side navigation.
 */

export const LogoLink = () => {
  return (
    <Link className="block text-teal-600" to="/">
      <div className="flex justify-center text-teal-600">
        <span className="text-2xl font-bold">Storefront&nbsp;</span>
        <p>by Dylan Sanders</p>
      </div>
    </Link>
  );
};
