import { getCategoryImage } from "../../data/categoryImages";
import { Link } from "react-router-dom";

export const CategoryCard = ({ gender, category }) => {
  // Determine the URL path
  const path = gender ? `/browse/${gender}/${category}` : `/browse/category/${category}`;

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
