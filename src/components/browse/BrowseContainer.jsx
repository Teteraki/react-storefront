import { useState } from "react";
import { ProductContainer } from "../products/ProductContainer";

export const BrowseContainer = ({ products, loading, error }) => {

    const [filters, setFilters] = useState([]);

    const clearFilters = () => {
        setFilters([])
    }

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Browse Apparel</h2>
        </header>

        <div className="mt-8 block lg:hidden">
          <button className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
            <span className="text-sm font-medium"> Filters &amp; Sorting </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 rtl:rotate-180"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
          <div className="hidden space-y-4 lg:block">
            <div>
              <label htmlFor="SortBy" className="block text-xs font-medium text-gray-700">
                Sort By
              </label>

              <select id="SortBy" className="mt-1 rounded-sm border-gray-300 text-sm">
                <option>Sort By</option>
                <option value="Title, DESC">Title, DESC</option>
                <option value="Title, ASC">Title, ASC</option>
                <option value="Price, DESC">Price, DESC</option>
                <option value="Price, ASC">Price, ASC</option>
              </select>
            </div>

            <div>
              <p className="block text-xs font-medium text-gray-700">Filters</p>

              <div className="mt-1 space-y-2">
                {/* Availability */}
                <details className="overflow-hidden rounded-sm border border-gray-300 [&_summary::-webkit-details-marker]:hidden" open>
                  <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                    <span className="text-sm font-medium"> Availability </span>

                    <span className="transition group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className="border-t border-gray-200 bg-white">
                    <header className="flex items-center justify-between p-4">
                      <span className="text-sm text-gray-700"> 0 Selected </span>

                      <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                        Reset
                      </button>
                    </header>

                    <ul className="space-y-1 border-t border-gray-200 p-4">
                      <li>
                        <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="FilterInStock"
                            className="size-5 rounded-sm border-gray-300 shadow-sm"
                          />

                          <span className="text-sm font-medium text-gray-700"> In Stock (5+) </span>
                        </label>
                      </li>

                      <li>
                        <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="FilterPreOrder"
                            className="size-5 rounded-sm border-gray-300 shadow-sm"
                          />

                          <span className="text-sm font-medium text-gray-700"> Pre Order (3+) </span>
                        </label>
                      </li>

                      <li>
                        <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="FilterOutOfStock"
                            className="size-5 rounded-sm border-gray-300 shadow-sm"
                          />

                          <span className="text-sm font-medium text-gray-700">
                            Out of Stock (10+)
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </details>

                {/* Price */}
                <details className="overflow-hidden rounded-sm border border-gray-300 [&_summary::-webkit-details-marker]:hidden" open>
                  <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                    <span className="text-sm font-medium"> Price </span>

                    <span className="transition group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className="border-t border-gray-200 bg-white">
                    <header className="flex items-center justify-between p-4">
                      <span className="text-sm text-gray-700"> The highest price is $600 </span>

                      <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                        Reset
                      </button>
                    </header>

                    <div className="border-t border-gray-200 p-4">
                      <div className="flex justify-between gap-4">
                        <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">$</span>

                          <input
                            type="number"
                            id="FilterPriceFrom"
                            placeholder="From"
                            className="w-full rounded-md border-gray-200 shadow-xs sm:text-sm"
                          />
                        </label>

                        <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">$</span>

                          <input
                            type="number"
                            id="FilterPriceTo"
                            placeholder="To"
                            className="w-full rounded-md border-gray-200 shadow-xs sm:text-sm"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </details>

                {/* Colors */}
                <details className="overflow-hidden rounded-sm border border-gray-300 [&_summary::-webkit-details-marker]:hidden" open>
                  <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                    <span className="text-sm font-medium"> Colors </span>

                    <span className="transition group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className="border-t border-gray-200 bg-white">
                    <header className="flex items-center justify-between p-4">
                      <span className="text-sm text-gray-700"> 0 Selected </span>

                      <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                        Reset
                      </button>
                    </header>

                    <ul className="space-y-1 border-t border-gray-200 p-4">
                      {["Red", "Blue", "Green", "Orange", "Purple", "Teal"].map((color) => (
                        <li key={color}>
                          <label
                            htmlFor={`Filter${color}`}
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id={`Filter${color}`}
                              className="size-5 rounded-sm border-gray-300 shadow-sm"
                            />

                            <span className="text-sm font-medium text-gray-700">{color}</span>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              </div>
            </div>
          </div>

          {/* PRODUCT GRID */}

       <div className="lg:col-span-3">
    <ProductContainer
      products={products}
      error={error}
      loading={loading}
      itemsPerPage={12}
      containerTitle={"Results"}
    />
  </div>
          
        </div>
      </div>
    </section>
  );
};
