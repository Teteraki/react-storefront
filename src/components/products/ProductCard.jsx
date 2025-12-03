import { useState } from "react";
import { getCategoryImage } from "../../data/categoryImages.js";
import { Link } from "react-router-dom";
import { CartToast } from "../cart/CartToast.jsx";

export const ProductCard = ({ product }) => {
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    // Your addToCart logic here
    // e.g., addToCart(product)
    setShowToast(true);
  };

  return (
    <div className="group block relative">
      {/* Image link */}
      <Link to={`/product/`}>
        <img
          src={getCategoryImage(product.category).image}
          alt=""
          className="rounded-md h-[350px] w-full object-cover"
        />
      </Link>

      <div className="mt-3 flex justify-between text-sm">
        <div>
          {/* Header link */}
          <Link to={`/product/`}>
            <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
              {product.name}
            </h3>
          </Link>

          <p className="mt-1.5 text-xs text-pretty text-gray-500 pr-1">
            {product.description}
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 mt-2">
          
          <p className="text-gray-900 font-semibold px-2">
            ${product.price.toFixed(2)}
          </p>

          {/* make component */}
          <button
            type="button"
            onClick={handleAddToCart}
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

          
          <CartToast show={showToast} onClose={() => setShowToast(false)} />
        </div>
      </div>
    </div>
  );
};
