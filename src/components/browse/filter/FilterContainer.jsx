import { FilterDropdown } from "./FilterDropdown";

/**
 * FilterContainer Component
 *
 * Renders a collection of filter dropdowns used on the product browse page.
 * Provides controls for gender, category, clothing sizes, shoe sizes, waist
 * sizes, and colors. Also includes a Reset button to clear all active filters.
 *
 * @param {Object} props
 * @param {Function} props.clearFilters - Clears all active filters when invoked.
 * @param {Function} props.toggleFilter - Toggles a filter option on/off.`
 * @param {Object} props.filters - The current filter state object.
 * @param {Array<Object>} props.products - Product list used to derive dynamic filters.
 * @param {Array<string>} props.clothingSizes - Available clothing sizes.
 * @param {Array<string>} props.shoeSizes - Available shoe sizes.
 * @param {Array<string>} props.waistSizes - Available waist sizes.
 */

export const FilterContainer = ({
  clearFilters,
  toggleFilter,
  filters,
  products,
  clothingSizes,
  shoeSizes,
  waistSizes,
}) => {
  return (
    <div>
      <p className="block text-xs font-medium text-gray-700">Filters</p>
      <button
        type="button"
        onClick={clearFilters}
        className="text-sm text-gray-900 underline underline-offset-4"
      >
        Reset
      </button>

      <div className="mt-1 space-y-2">
        <FilterDropdown
          title="Gender"
          onToggle={(value) => toggleFilter("gender", value)}
          selected={filters.gender}
          filters={["Mens", "Womens"]}
        />

        <FilterDropdown
          title="Category"
          onToggle={(value) => toggleFilter("category", value)}
          selected={filters.category}
          filters={[...new Set(products.map((p) => p.category))]}
        />

        <FilterDropdown
          title="Clothing Sizes"
          onToggle={(value) => toggleFilter("clothingSize", value)}
          selected={filters.clothingSize}
          filters={clothingSizes}
        />

        <FilterDropdown
          title="Shoe Sizes"
          onToggle={(value) => toggleFilter("shoeSize", value)}
          selected={filters.shoeSize}
          filters={shoeSizes}
        />

        <FilterDropdown
          title="Waist Sizes"
          onToggle={(value) => toggleFilter("waistSize", value)}
          selected={filters.waistSize}
          filters={waistSizes}
        />

        <FilterDropdown
          title="Colors"
          onToggle={(value) => toggleFilter("colors", value)}
          selected={filters.colors}
          filters={[...new Set(products.map((p) => p.color?.[0]?.name))].sort()}
        />
      </div>
    </div>
  );
};
