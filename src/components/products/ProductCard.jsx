import { getCategoryImage } from "../../data/categoryImages.js";
import { Link } from "react-router-dom";
import { QuickAddToCart } from "./QuickAddToCart.jsx";

/**
 * ProductCard Component
 *
 * Displays a single product in a grid or list format. Includes:
 * - Product image (linked)
 * - Product name (linked)
 * - Product description
 * - Product price
 * - A Quick Add to Cart button
 *
 * @param {Object} props
 * @param {Object} props.product - The product data used to populate the card.
 * @param {number|string} props.product.id - Unique product identifier.
 * @param {string} props.product.name - Name of the product.
 * @param {string} props.product.description - Short description of the product.
 * @param {string} props.product.category - Category used to fetch the category image.
 * @param {number} props.product.price - Price of the product before formatting.
 *
 * @returns {JSX.Element} A styled product card with image, details, and cart interaction.
 */
export const ProductCard = ({ product }) => {
  return (
    <div className="group block relative">
      {/* Image link */}
      <Link to={`/product/${product.id}`}>
        {console.log(`/product/${product.id}`)}
        <img
          src={getCategoryImage(product.category).image}
          className="rounded-md h-[350px] w-full object-cover"
        />
      </Link>

      <div className="mt-3 flex justify-between text-sm">
        <div>
          {/* Header link */}
          <Link to={`/product`}>
            <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
              {product.name}
            </h3>
          </Link>

          {/* Product Description */}
          <p className="mt-1.5 text-xs text-pretty text-gray-500 pr-1">
            {product.description}
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 mt-2">
          {/* Price */}
          <p className="text-gray-900 font-semibold px-2">
            ${product.price.toFixed(2)}
          </p>

          {/* Quickly add 1 item to the cart */}
          <QuickAddToCart product={product} />
        </div>
      </div>
    </div>
  );
};
