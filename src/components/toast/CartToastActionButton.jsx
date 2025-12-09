import { Link } from "react-router-dom";

/**
 * CartToastActionButton Component
 *
 * A simple styled link button used inside the `CartToast` component to direct
 * users to important follow-up pages such as the cart or checkout.
 *
 * @param {Object} props
 * @param {string} props.href - The path the button navigates to.
 * @param {string} props.text - The text displayed inside the button.
 */
export const CartToastActionButton = ({ href, text }) => {
  return (
    <Link
      to={href}
      className="block rounded-sm border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
    >
      {text}
    </Link>
  );
};
