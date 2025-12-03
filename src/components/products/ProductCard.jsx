import { useState } from "react";
import { getCategoryImage } from "../../data/categoryImages.js";
import { Link } from "react-router-dom";
import { CartToast } from "../cart/CartToast.jsx";
import { useCart  } from "../../hooks/cartContext.jsx";
import { QuickAddToCart } from "../cart/QuickAddToCart.jsx";

export const ProductCard = ({ product }) => {


  return (
    <div className="group block relative">
      {/* Image link */}
      <Link to={`/product/${product.id}`}>
        <img
          src={getCategoryImage(product.category).image}
          className="rounded-md h-[350px] w-full object-cover"
        />
      </Link>

      <div className="mt-3 flex justify-between text-sm">
        <div>
          {/* Header link */}
          <Link to={`/product/${product.id}`}>
            <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
              {product.name}
            </h3>
          </Link>

          <p className="mt-1.5 text-xs text-pretty text-gray-500 pr-1">
            {product.description}
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 mt-2">
          {/* Price */}
          <p className="text-gray-900 font-semibold px-2">
            ${product.price.toFixed(2)}
          </p>

        <QuickAddToCart product={product}/>
        </div>
      </div>
    </div>
  );
};
