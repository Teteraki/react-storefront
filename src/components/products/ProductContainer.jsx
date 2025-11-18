import { useState } from "react";
import { ProductCard } from "./ProductCard";

export const ProductContainer = ({
  products,
  loading,
  error,
  itemsPerPage,
  containerTitle,
}) => {
  const [page, setPage] = useState(0);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-teal-600 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-600 text-center">Error: {error.message}</p>;
  }

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const start = page * itemsPerPage;
  const visibleProducts = products.slice(start, start + itemsPerPage);

  const handleNext = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-10 bg-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header + buttons */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            {containerTitle || "Products"}
          </h2>

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
