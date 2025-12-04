import { useCart } from "../../hooks/cartContext";
import { useState } from "react";

export const CartContainer = () => {
  const [destination, setDestination] = useState("Canada");
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [showDestMenu, setShowDestMenu] = useState(false);
  const [showMethodMenu, setShowMethodMenu] = useState(false);
  const { cartItems, removeFromCart, updateQuantity } = useCart();

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

  const cartSubtotal = cartItems.reduce(
    (sum, item) => sum + (item.price ?? 0) * item.quantity,
    0
  );

  // Get the raw value for the selected destination/method
  const rawShipping =
    cartItems.length === 0 ? 0 : SHIPPING_RATES[destination][shippingMethod];

  // Apply free shipping over $400
  const shippingCost = cartSubtotal >= 400 ? 0 : rawShipping;

  // Tax based on subtotal only
  const taxRate = TAX_RATES[destination];
  const taxAmount = cartSubtotal * taxRate;

  // Final total
  const orderTotal = cartSubtotal + shippingCost + taxAmount;

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Your Cart
            </h1>
          </header>

          <div className="mt-8">
            {cartItems.length === 0 ? (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            ) : (
              <>
                <ul className="space-y-4">
                  {cartItems.map((item) => {
                    const price = item.price ?? 0;
                    const lineTotal = price * item.quantity;

                    const colorHex = item.color.find(
                      (c) => c.name === item.selectedColor
                    ).hex;

                    return (
                      <li
                        key={`${item.id}-${item.size}-${item.selectedColor}`}
                        className="flex items-center gap-4"
                      >
                        <img
                          src={
                            item.image ||
                            item.imageUrl ||
                            "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=1160"
                          }
                          alt={item.title || item.name || "Cart item"}
                          className="size-16 rounded-sm object-cover"
                        />

                        <div>
                          <h3 className="text-sm text-gray-900">
                            {item.title || item.name || "Product"}
                          </h3>

                          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                            <div>
                              <dt className="inline">Size: </dt>
                              <dd className="inline">{item.size}</dd>
                            </div>

                            <div>
                              <dt className="inline">Color: </dt>
                              <dd className="inline pr-2">
                                {item.selectedColor}
                              </dd>
                              {/* color circle */}
                              <span
                                className="inline-block w-3 h-3 rounded-full border border-gray-300"
                                style={{ backgroundColor: colorHex }}
                              />
                            </div>
                          </dl>

                          {/* Item price */}
                          <p className="mt-1 text-xs text-gray-700">
                            Price: ${price.toFixed(2)}
                          </p>
                        </div>

                        <div className="flex flex-1 items-center justify-end gap-2">
                          <form>
                            <label
                              htmlFor={`qty-${item.id}`}
                              className="sr-only"
                            >
                              Quantity
                            </label>
                            <input
                              type="number"
                              min={1}
                              value={item.quantity}
                              onChange={(e) => {
                                updateQuantity(
                                  item.id,
                                  item.size,
                                  item.selectedColor,
                                  Number(e.target.value)
                                );
                              }}
                              onKeyDown={(e) => e.preventDefault()} // disable typing
                              id={`qty-${item.id}`}
                              className="h-8 w-12 rounded-sm border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600"
                            />
                          </form>

                          {/* Per-item subtotal */}
                          <p className="text-sm font-semibold text-gray-900">
                            ${lineTotal.toFixed(2)}
                          </p>

                          <button
                            type="button"
                            onClick={() =>
                              removeFromCart(
                                item.id,
                                item.size,
                                item.selectedColor
                              )
                            }
                            className="text-gray-600 transition hover:text-red-600"
                          >
                            <span className="sr-only">Remove item</span>
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
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                  <div className="w-screen max-w-lg space-y-4">
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
                            {["Canada", "USA", "International"].map(
                              (country) => (
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
                              )
                            )}
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
                            {["standard", "express", "priority"].map(
                              (methodKey) => (
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
                              )
                            )}
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
                      <a
                        href="#"
                        className="mt-4 block rounded-sm bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                      >
                        Checkout
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
