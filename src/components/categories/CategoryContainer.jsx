import { CategoryCard } from "./CategoryCard";

export const CategoryContainer = ({ gender, categories }) => {
  return (
    <div
      id="browse-categories"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10"
    >
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Browse Categories</h2>
      <div className="grid grid-cols-1 py-6 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard gender={gender} key={category} category={category} />
        ))}
      </div>
    </div>
  );
};
