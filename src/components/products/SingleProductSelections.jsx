import { useCart } from "../../hooks/cartContext";
import { useState } from "react";
import { CartToast } from "../toast/CartToast";

export const SingleProductSelections = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const canAdd = product && size && color && quantity > 0;

  const handleConfirmAdd = () => {
    addToCart(product, size, color, quantity);
    setShowToast(true);
  };

  return (
    <section>
      <div className="mt-6 items-center justify-center gap-4 text-center p-4">
        <h1 className="text-l font-bold text-gray-900 sm:text-3xl">
          {product.name}
        </h1>
        <h2>${product.price.toFixed(2)}</h2>
        <p>{product.description}</p>
        <p>{product.material}</p>
        <form>
          <label>Quantity: </label>
          <input
            type="number"
            min={1}
            value={quantity}
            onChange={(e) => {
              setQuantity(Number(e.target.value));
            }}
            onKeyDown={(e) => e.preventDefault()} // disable typing
            id={`qty-${product.id}`}
            className="h-8 w-12 rounded-sm border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600"
          />
        </form>
        <div className=" flex justify-center gap-2 mb-2">
          {product.sizes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSize(s)}
              className={
                "px-2 py-1 text-xs rounded-full border transition " +
                (size === s
                  ? "border-teal-500 bg-teal-50 text-teal-700"
                  : "border-gray-300 hover:bg-gray-100")
              }
            >
              {s}
            </button>
          ))}
        </div>
        <div className="flex justify-center gap-2 mb-4">
          {product.color.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setColor(c.name)}
              className={
                "h-7 w-7 rounded-full border transition " +
                (color === c.name
                  ? "border-teal-500 ring ring-teal-300"
                  : "border-gray-300 hover:ring-2 hover:ring-gray-200")
              }
              style={{ backgroundColor: c.hex }}
              title={c.name}
            ></button>
          ))}
        </div>

        <button
          type="button"
          onClick={handleConfirmAdd}
          disabled={!canAdd}
          className={
            "mt-1 w-full rounded-md px-2 py-1 text-xs font-medium " +
            (canAdd
              ? "bg-teal-600 text-white hover:bg-teal-700"
              : "bg-gray-200 text-gray-400 cursor-not-allowed")
          }
        >
          Add to cart
        </button>
      </div>
      <CartToast show={showToast} onClose={() => setShowToast(false)} />
    </section>
  );
};
