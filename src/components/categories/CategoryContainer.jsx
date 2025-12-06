import { CategoryCard } from "./CategoryCard";

/**
 * CategoryContainer Component
 *
 * Displays a grid of clickable product categories, each rendered using the
 * `CategoryCard` component. Used on browsing pages or gender-specific
 * category overview pages.
 *
 * @param {Object} props
 * @param {string|null} props.gender - Optional gender context (e.g., "Mens", "Womens").
 *   If provided, each category card will link to `/browse/{gender}/{category}`.
 *   If omitted, the cards link to generic category routes.
 *
 * @param {Array<string>} props.categories - List of category names to display
 *   (e.g., ["Hoodies", "Shoes", "Accessories"]).
 */

export const CategoryContainer = ({ gender, categories }) => {
  return (
    <div
      id="browse-categories"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10"
    >
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
        Browse Categories
      </h2>
      <div className="grid grid-cols-1 py-6 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard
            gender={gender ? gender : null}
            key={category}
            category={category}
          />
        ))}
      </div>
    </div>
  );
};
