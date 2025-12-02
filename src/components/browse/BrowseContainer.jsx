import { useState } from "react";
import { ProductContainer } from "../products/ProductContainer";
import { FilterDropdown } from "./FilterDropdown";
import { SelectedFilterPill } from "./SelectedFilterPill";
export const BrowseContainer = ({ products, loading, error }) => {


    const [filters, setFilters] = useState({
      category: [],
      colors: [],
      size: [],
      
    });

  
   const toggleFilter = (group, value) => {
    setFilters(prev => ({
    ...prev,
    [group]: prev[group].includes(value)
      ? prev[group].filter(v => v !== value) // remove
      : [...prev[group], value]              // add
  }));
};

    
    const clearFilters = () => {
        setFilters({
      category: [],
      colors: [],
      size: [],
      
    })
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
    <div className="space-x-2 space-y-2">

         <SelectedFilterPill
  filters={filters}
  toggleFilter={toggleFilter}
/>

            
            
    
    </div>
            <div>
              <p className="block text-xs font-medium text-gray-700">Filters</p>
                      <button type="button" onClick={clearFilters} className="text-sm text-gray-900 underline underline-offset-4">
                        Reset {console.log(filters)}
                      </button>
              <div className="mt-1 space-y-2">

               
                <FilterDropdown title="Category" onToggle={(value) => toggleFilter("category", value)} selected={filters.category} filters={[...new Set(products.map((p) => p.category))]} />
                <FilterDropdown title="Sizes" onToggle={(value) => toggleFilter("size", value)} selected={filters.size} filters={["XS","S","M","L","XL"]} />
                <FilterDropdown title="Colors" onToggle={(value) => toggleFilter("colors", value)} selected={filters.colors} filters={[... new Set(products.map((p) => p.color[0].name))]} />
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
