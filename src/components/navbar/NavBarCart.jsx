import { Link } from "react-router-dom";
import { useCart } from "../../hooks/cartContext";

/**
 * NavbarCart Component
 * ---------------------
 * Displays a shopping cart icon inside the navbar with a badge showing
 * the number of items currently in the user's cart.
 */

export const NavbarCart = () => {
  // Cart context provider "hook".
  const { cartCount } = useCart();

  return (
    <div className="relative flex items-center space-x-2 pr-2">
      <Link to="/cart" className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          className="w-6 h-6 text-teal-600"
        >
          <path
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 
            14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 
            2.1-4.684 2.924-7.138a60.114 60.114 0 
            0 0-16.536-1.84M7.5 14.25 5.106 
            5.272M6 20.25a.75.75 0 1 1-1.5 
            0 .75.75 0 0 1 1.5 0Zm12.75 
            0a.75.75 0 1 1-1.5 0 .75.75 0 
            0 1 1.5 0Z"
          />
        </svg>

        {/* Badge attached to cart icon for number of items */}
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-4 bg-teal-600 text-white text-xs font-semibold px-1.75 py-0.5 rounded-full">
            {cartCount}
          </span>
        )}
      </Link>
    </div>
  );
};
