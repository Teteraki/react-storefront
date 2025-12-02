import { useState } from "react";
import { ProductContainer } from "../products/ProductContainer";
import { FilterDropdown } from "./filter/FilterDropdown";
import { SelectedFilterPill } from "./filter/SelectedFilterPill";
import { SortDropdown } from "./sort/SortDropdown";

export const BrowseContainer = ({ products, loading, error }) => {

    // Object for holding filter specific arrays (makes sense in my head to do this to implement additive filters).
    const [filters, setFilters] = useState({
      category: [],
      colors: [],
      size: [],
      
    });

    // Clear all filters with reset button.
    const clearFilters = () => {
        setFilters({
      category: [],
      colors: [],
      size: [],
      
    })
    }

    // Toggle a specific filter.
    const toggleFilter = (group, value) => {
    setFilters(prev => ({
    ...prev,
    [group]: prev[group].includes(value)
      ? prev[group].filter(v => v !== value) // remove
      : [...prev[group], value]              // add
  }));
};


    const [sortBy, setSortBy] = useState("Name, ASC");

    

    // Filter the products.
    const filteredProducts = products.filter(product => {

      // Truthful statement to return all products by default
      const matchCategory = filters.category.length === 0 || filters.category.includes(product.category); 
      const matchColors = filters.colors.length === 0 || filters.colors.includes(product.color);
      const matchSizes = filters.size.length === 0 || filters.size.includes(size)

      // Additive filtering.
      return matchCategory && matchColors && matchSizes;
    })

    // Sort the products after filter, if it is on the default label Sort By, immediately return and do not sort.
    // Prog 3: Data Structures knowledge coming in handy here!
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (!sortBy) return 0;

      const [field, direction] = sortBy.split(", ").map(v => v.trim());
      const dir = direction === "ASC" ? 1 : -1;

      switch (field) {
        case "Name": {
          const nameA = a.name || "";
          const nameB = b.name || "";
          return nameA.localeCompare(nameB) * dir;
        }

        case "Price": {
          const priceA = a.price ?? 0;
          const priceB = b.price ?? 0;
          return (priceA - priceB) * dir;
        }

        case "Category": {
          const catA = a.category || "";
          const catB = b.category || "";
          return catA.localeCompare(catB) * dir;
        }

        default:
          return 0;
      }
    });



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
            
            
            <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
          

            <SelectedFilterPill filters={filters} toggleFilter={toggleFilter}  />

        
          

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
              products={sortedProducts}
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
