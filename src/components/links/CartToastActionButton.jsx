import { Link } from "react-router-dom";

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
