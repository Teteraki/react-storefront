import { useEffect, useState } from "react";
import { useCart } from "../../hooks/cartContext";
import { Link } from "react-router-dom";

export const CartToast = ({ show, onClose }) => {
  const { cartItems } = useCart();
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    setVisible(show);
    if (show) {
      const timer = setTimeout(() => {
        setVisible(false);
        onClose?.();
      }, 5000); // disappears after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!visible || cartItems.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 w-screen max-w-sm">
      <div
        className="relative border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8 rounded shadow-lg"
        aria-modal="true"
        role="dialog"
        tabIndex="-1"
      >
        {/* Close Button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-4 right-4 text-gray-600 transition hover:scale-110"
          aria-label="Close cart"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Cart Items */}
        <div className="mt-4 space-y-6">
          <ul className="space-y-4 max-h-60 overflow-y-auto">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-start gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-sm object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="text-sm text-gray-900 whitespace-normal">{item.name}</h3>
                  <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt className="inline font-semibold">Size:</dt>
                      <dd className="inline ml-1">{item.size || "N/A"}</dd>
                    </div>
                    <div>
                      <dt className="inline font-semibold">Color:</dt>
                      <dd className="inline ml-1">
                        {Array.isArray(item.color)
                          ? item.color.map((c) => c.name).join(", ")
                          : item.color?.name || "N/A"}
                      </dd>
                    </div>
                    <div>
                      <dt className="inline font-semibold">Qty:</dt>
                      <dd className="inline ml-1">{item.quantity}</dd>
                    </div>
                  </dl>
                </div>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="space-y-4 text-center">
    <Link
  to="/cart"
  className="block rounded-sm border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
>
  View my cart ({cartItems.length})
</Link>

<Link
  to="/checkout"
  className="block rounded-sm bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
>
  Checkout
</Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};
