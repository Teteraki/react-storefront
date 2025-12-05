import { useEffect } from "react";
import { useCart } from "../../hooks/cartContext";
import { CartToastActionButton } from "./CartToastActionButton";
import { CartToastItemList } from "./CartToastItemList";
import { CloseButton } from "./CloseButton";

export const CartToast = ({ show, onClose }) => {
  const { cartItems, cartCount } = useCart();

  // Auto-hide after 6 seconds when show is truthful.
  useEffect(() => {
    if (!show) return;

    const timer = setTimeout(() => {
      onClose();
    }, 6000);

    return () => clearTimeout(timer);
  }, [show, onClose]);

  // If show is false, render nothing.
  if (!show) return null;

  return (
    <div className="fixed top-4 right-4 z-50 w-screen max-w-sm">
      <div
        className="relative border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8 rounded shadow-lg"
        aria-modal="true"
        role="dialog"
        tabIndex="-1"
      >
        {/* Close Button */}
        <CloseButton onClose={onClose} />

        {/* Cart Items */}
        <div className="mt-4 space-y-6">
          <CartToastItemList cartItems={cartItems} />

          {/* Actions */}
          <div className="space-y-4 text-center">
            <CartToastActionButton
              href="/cart"
              text={`View my cart (${cartCount})`}
            />
            <CartToastActionButton href="/checkout" text="Checkout now!" />
          </div>
        </div>
      </div>
    </div>
  );
};
