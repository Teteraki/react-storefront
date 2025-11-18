import { useState } from "react";
import { ProductCard } from "./ProductCard";

const ITEMS_PER_PAGE = 4;

export const FeaturedContainer = ({ products }) => {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const start = page * ITEMS_PER_PAGE;
  const visibleProducts = products.slice(start, start + ITEMS_PER_PAGE);

  const handleNext = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header + buttons */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Featured</h2>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="rounded-full bg-teal-600 text-white px-3  text-lg  hover:bg-teal-700"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="rounded-full bg-teal-600 text-white px-3  text-lg  hover:bg-teal-700"
            >
              ›
            </button>
          </div>
        </div>

        {/* Cards: Tailwind handles how many per row */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Optional: simple page indicator */}
        <div className="mt-4 text-xs text-gray-500 text-right">
          Page {page + 1} of {totalPages}
        </div>
      </div>
    </section>
  );
};
