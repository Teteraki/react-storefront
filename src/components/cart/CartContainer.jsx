import { useCart } from "../../hooks/cartContext";

export const CartContainer = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const cartSubtotal = cartItems.reduce(
    (sum, item) => sum + (item.price ?? 0) * item.quantity,
    0
  );

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
                              <dt className="inline">Size:</dt>
                              <dd className="inline">{item.size}</dd>
                            </div>

                            <div>
                              <dt className="inline">Color:</dt>
                              <dd className="inline">{item.selectedColor}</dd>
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
                    <dl className="space-y-0.5 text-sm text-gray-700">
                      <div className="flex justify-between">
                        <dt>Subtotal</dt>
                        <dd>${cartSubtotal.toFixed(2)}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt>VAT</dt>
                        <dd>$0.00</dd>
                      </div>

                      <div className="flex justify-between !text-base font-medium">
                        <dt>Total</dt>
                        <dd>${cartSubtotal.toFixed(2)}</dd>
                      </div>
                    </dl>

                    <div className="flex justify-end"></div>

                    <div className="flex justify-end">
                      <a
                        href="#"
                        className="block rounded-sm bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
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
