import { useState } from "react";
import { getCategoryImage } from "../../data/categoryImages.js";
import { useCart } from "../../hooks/cartContext.jsx";
import { CartToast } from "../cart/CartToast.jsx";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const [showToast, setShowToast] = useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowToast(true);
  };

  return (
    <div className="group block border rounded-md overflow-hidden shadow hover:shadow-lg transition">
     
      <div
        className="cursor-pointer"
        // onClick={null} NEED TO FIX
      >
        <img
          src={getCategoryImage(product.category).image}
          alt={product.name}
          className="rounded-t-md h-[350px] w-full object-cover"
        />
        <div className="p-3">
          <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
            {product.name}
          </h3>
          <p className="mt-1.5 text-xs text-gray-500 pr-1">
            {product.description}
          </p>
        </div>
      </div>

      {/* // Price and Add to Cart  */}
      <div className="flex justify-between items-center p-3 border-t border-gray-200">
        <p className="text-gray-900 font-semibold">${product.price.toFixed(2)}</p>

        <button
          type="button"
          onClick={() => handleAddToCart(product)}
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

        {/* Cart Toast */}
        <CartToast show={showToast} onClose={() => setShowToast(false)} />
      </div>
    </div>
  );
};
