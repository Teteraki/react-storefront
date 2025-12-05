import { useState } from "react";
import { useCart } from "../../hooks/cartContext";
import { CartToast } from "../toast/CartToast";

export const QuickAddToCart = ({ product }) => {
  const [showToast, setShowToast] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const { addToCart } = useCart();

  const handleQuickAddClick = () => {
    setShowPicker((prev) => !prev); // allows for on another click to set the state for me.
  };

  const handleConfirmAdd = () => {
    if (!selectedSize || !selectedColor) return;

    addToCart(product, selectedSize, selectedColor);

    // Close picker and show toast
    setShowPicker(false);
    setShowToast(true);
  };

  const canAdd = selectedSize && selectedColor;

  return (
    <>
      <div className="relative inline-block">
        {/* OPEN PICKER BUTTON */}
        <button
          type="button"
          onClick={handleQuickAddClick}
          className="inline-flex gap-1 rounded-full border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 transition"
        >
          <span className="text-base font-bold leading-none">+</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            className="w-4 h-4 text-teal-600"
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
        </button>

        {/* SIZE + COLOR PICKER */}
        {showPicker && (
          <div className="absolute right-0 mt-2 w-52 rounded-lg border border-gray-200 bg-white shadow-lg z-20 p-3">
            {/* Size Picker */}
            <p className="text-xs font-medium text-gray-500 mb-1">
              Select size
            </p>
            <div className="flex flex-wrap gap-1 mb-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={
                    "px-2 py-1 text-xs rounded-full border transition " +
                    (selectedSize === size
                      ? "border-teal-500 bg-teal-50 text-teal-700"
                      : "border-gray-300 hover:bg-gray-100")
                  }
                >
                  {size}
                </button>
              ))}
            </div>

            {/* Color Picker */}
            <p className="text-xs font-medium text-gray-500 mb-1">
              Select color
            </p>
            <div className="flex flex-wrap gap-1 mb-2">
              {product.color.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => setSelectedColor(c.name)}
                  className={
                    "flex items-center gap-1 px-2 py-1 text-xs rounded-full border transition " +
                    (selectedColor === c.name
                      ? "border-teal-500 bg-teal-50 text-teal-700"
                      : "border-gray-300")
                  }
                >
                  <span>{c.name}</span>
                </button>
              ))}
            </div>

            {/* Confirm ADD button */}
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
        )}
      </div>

      <CartToast show={showToast} onClose={() => setShowToast(false)} />
    </>
  );
};
