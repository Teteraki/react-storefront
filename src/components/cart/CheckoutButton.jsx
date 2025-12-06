import { Link } from "react-router-dom";
import { useCart } from "../../hooks/cartContext";

/**
 * CheckoutButton Component
 *
 * Renders a styled button-like link that completes the checkout process.
 * When clicked, it clears the user's cart and redirects them to the home page.
 */

export const CheckoutButton = () => {
  const { clearCart } = useCart();

  return (
    <Link
      to="/"
      onClick={() => clearCart()}
      className="mt-4 block rounded-sm bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
    >
      Checkout
    </Link>
  );
};
