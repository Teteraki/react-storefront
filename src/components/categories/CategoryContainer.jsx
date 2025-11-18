import { CategoryCard } from "./CategoryCard";

export const CategoryContainer = ({ categories }) => {
  return (
    <div
      id="browse-categories"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10"
    >
      <h2 className="text-lg font-semibold text-gray-900">Categories</h2>
      <div className="grid grid-cols-1 py-6 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category} category={category} />
        ))}
      </div>
    </div>
  );
};
