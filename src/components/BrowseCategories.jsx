import { CategoryCard } from "./CategoryCard";

export const BrowseCategories = ({ categories }) => {
  console.log(categories);
  return (
    <div
      id="browse-categories"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10"
    >
      <h3></h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category} category={category} />
        ))}
      </div>
    </div>
  );
};
