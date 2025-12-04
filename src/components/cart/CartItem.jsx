import { getCategoryImage } from "../../data/categoryImages";

export const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  const price = item.price ?? 0;
  const lineTotal = price * item.quantity;

  const colorHex = item.color.find((c) => c.name === item.selectedColor).hex;

  return (
    <li className="flex items-center gap-4">
      <img
        src={getCategoryImage(item.category).image}
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
            <dd className="inline pr-2">{item.selectedColor}</dd>
            {/* color circle */}
            <span
              className="inline-block w-3 h-3 rounded-full border border-gray-300"
              style={{ backgroundColor: colorHex }}
            />
          </div>
        </dl>

        {/* Item price */}
        <p className="mt-1 text-xs text-gray-700">Price: ${price.toFixed(2)}</p>
      </div>

      <div className="flex flex-1 items-center justify-end gap-2">
        <form>
          <label htmlFor={`qty-${item.id}`} className="sr-only">
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
          onClick={() => removeFromCart(item.id, item.size, item.selectedColor)}
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
};
