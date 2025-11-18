import { getCategoryImage } from "../data/categoryImages.js";

export const CategoryCard = ({ category }) => {
  return (
    <a href="#" className="block">
      <img
        alt={category}
        src={getCategoryImage(category).image}
        className="rounded-md h-64 w-full object-cover sm:h-80 lg:h-96"
      ></img>

      <h3 className="text-center mt-4 text-lg text-gray-900 sm:text-xl">
        {category}
      </h3>
    </a>
  );
};
