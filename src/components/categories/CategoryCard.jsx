import { getCategoryImage } from "../../data/categoryImages";
import { Link } from "react-router-dom";

/**
 * CategoryCard Component
 *
 * Displays a clickable category card used on browsing or homepage sections
 * to navigate into a specific product category. Each card shows a large
 * category image and the category name beneath it.
 *
 * @param {Object} props
 * @param {string} props.gender - Optional gender segment used to build the URL
 *   (e.g., "Mens", "Womens"). If omitted, the card links to a general category page.
 * @param {string} props.category - The product category being represented
 *   (e.g., "Shoes", "Hoodies", "Accessories").
 */

export const CategoryCard = ({ gender, category }) => {
  // Determine the URL path
  const path = gender
    ? `/browse/${gender}/${category}`
    : `/browse/category/${category}`;

  return (
    <Link to={path} className="block">
      <img
        alt={category}
        src={getCategoryImage(category).image}
        className="rounded-md h-64 w-full object-cover sm:h-80 lg:h-96"
      />
      <h3 className="text-center mt-4 text-lg text-gray-900 sm:text-xl">
        {category}
      </h3>
    </Link>
  );
};
