import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { PageBackButton } from "./PageBackButton";
import { PageNextButton } from "./PageNextButton";
/**
 * ProductContainer Component
 *
 * Renders a paginated list/grid of products, including:
 * - A container title
 * - Previous/Next pagination buttons
 * - A grid of ProductCard components
 * - A loading spinner or error display when appropriate
 *
 * Tailwind CSS controls responsive grid layout (1–4 columns depending on screen width).
 *
 * @param {Object} props
 * @param {Array<Object>} props.products - Full list of product objects to display.
 * @param {boolean} props.loading - Whether product data is currently being fetched.
 * @param {Error|null} props.error - Error object if a fetch failed, otherwise null.
 * @param {number} props.itemsPerPage - Number of products visible per page.
 * @param {string} [props.containerTitle="Products"] - Optional section title displayed above the grid.
 *
 * @returns {JSX.Element} A paginated product display grid with navigation controls.
 */

export const ProductContainer = ({
  products,
  loading,
  error,
  itemsPerPage = 4, // default 4 per page unless a different value prop was passed.
  containerTitle,
}) => {

  // Show throbber wheel when data is loading.
  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-teal-600 border-t-transparent"></div>
      </div>
    );
  }

  // Somewhat graceful error message handling.
  if (error) {
    return <p className="text-red-600 text-center">Error: {error.message}</p>;
  }

  // Page State for cycling the active page.
  const [page, setPage] = useState(0);

  // Calculate the total number of pages if a itemsPerPage prop was passed.
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Starting visible products based on the provided items per page.
  const start = page * itemsPerPage;
  const visibleProducts = products.slice(start, start + itemsPerPage);

  // Next page.
  const handleNext = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  // Previous page.
  const handlePrev = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-10 bg-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       
        {/* Header text and page nav buttons */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            {containerTitle || "Products"} 
          </h2>

          <div className="flex gap-2">
            <PageBackButton handlePrev={() => handlePrev()} />
            <PageNextButton handleNext={() => handleNext()} />
            
          </div>
        </div>

        {/*Tailwind handles how many per row */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Page location/count display */}
        <div className="mt-4 text-xs text-gray-500 text-right">
          Page {page + 1} of {totalPages}
        </div>
      </div>
    </section>
  );
};
