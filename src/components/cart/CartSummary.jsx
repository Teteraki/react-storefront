import { useState } from "react";
import { CheckoutButton } from "../links/CheckoutButton";

const SHIPPING_RATES = {
  Canada: { standard: 10, express: 25, priority: 35 },
  USA: { standard: 15, express: 25, priority: 50 },
  International: { standard: 20, express: 30, priority: 50 },
};

const SHIPPING_LABELS = {
  standard: "Standard",
  express: "Express",
  priority: "Priority",
};

const TAX_RATES = {
  Canada: 0.05,
  USA: 0.07,
  International: 0.1,
};

export const CartSummary = ({ cartSubtotal, itemCount }) => {
  const [destination, setDestination] = useState("Canada");
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [showDestMenu, setShowDestMenu] = useState(false);
  const [showMethodMenu, setShowMethodMenu] = useState(false);

  const rawShipping =
    itemCount === 0 ? 0 : SHIPPING_RATES[destination][shippingMethod];

  const shippingCost = cartSubtotal >= 400 ? 0 : rawShipping;

  const taxRate = TAX_RATES[destination];
  const taxAmount = cartSubtotal * taxRate;

  const orderTotal = cartSubtotal + shippingCost + taxAmount;

  return (
    <>
      {/* SHIPPING CONTROLS */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Destination dropdown */}
        <div className="relative inline-flex">
          <span className="inline-flex divide-x divide-gray-300 overflow-hidden rounded border border-gray-300 bg-white shadow-sm">
            <button
              type="button"
              className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative"
              onClick={() => setShowDestMenu((prev) => !prev)}
            >
              {destination}
            </button>

            <button
              type="button"
              className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative"
              aria-label="Destination menu"
              onClick={() => setShowDestMenu((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </span>

          {showDestMenu && (
            <div
              role="menu"
              className="absolute end-0 top-12 z-auto w-56 overflow-hidden rounded border border-gray-300 bg-white shadow-sm"
            >
              {["Canada", "USA", "International"].map((country) => (
                <button
                  key={country}
                  type="button"
                  onClick={() => {
                    setDestination(country);
                    setShowDestMenu(false);
                  }}
                  className="block w-full px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 text-left"
                  role="menuitem"
                >
                  {country}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Shipping method dropdown */}
        <div className="relative inline-flex">
          <span className="inline-flex divide-x divide-gray-300 overflow-hidden rounded border border-gray-300 bg-white shadow-sm">
            <button
              type="button"
              className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative"
              onClick={() => setShowMethodMenu((prev) => !prev)}
            >
              {SHIPPING_LABELS[shippingMethod]} Shipping
            </button>

            <button
              type="button"
              className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative"
              aria-label="Shipping menu"
              onClick={() => setShowMethodMenu((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </span>

          {showMethodMenu && (
            <div
              role="menu"
              className="absolute end-0 top-12 z-auto w-56 overflow-hidden rounded border border-gray-300 bg-white shadow-sm"
            >
              {["standard", "express", "priority"].map((methodKey) => (
                <button
                  key={methodKey}
                  type="button"
                  onClick={() => {
                    setShippingMethod(methodKey);
                    setShowMethodMenu(false);
                  }}
                  className="block w-full px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 text-left"
                  role="menuitem"
                >
                  {SHIPPING_LABELS[methodKey]} ({destination} $
                  {SHIPPING_RATES[destination][methodKey]})
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* SUMMARY */}
      <dl className="mt-4 space-y-0.5 text-sm text-gray-700">
        <div className="flex justify-between">
          <dt>Subtotal</dt>
          <dd>${cartSubtotal.toFixed(2)}</dd>
        </div>

        <div className="flex justify-between">
          <dt>
            Shipping{" "}
            <span className="text-xs text-gray-500">
              (
              {cartSubtotal >= 400
                ? "Free"
                : `${destination}, ${SHIPPING_LABELS[shippingMethod]}`}
              )
            </span>
          </dt>
          <dd>${shippingCost.toFixed(2)}</dd>
        </div>

        <div className="flex justify-between">
          <dt>
            Tax{" "}
            <span className="text-xs text-gray-500">
              ({(taxRate * 100).toFixed(0)}%)
            </span>
          </dt>
          <dd>${taxAmount.toFixed(2)}</dd>
        </div>

        <div className="flex justify-between !text-base font-medium pt-2">
          <dt>Total</dt>
          <dd>${orderTotal.toFixed(2)}</dd>
        </div>
      </dl>

      <div className="flex justify-end">
        <CheckoutButton />
      </div>
    </>
  );
};
