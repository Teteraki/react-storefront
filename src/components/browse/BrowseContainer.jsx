import { useMemo, useState } from "react";
import { ProductContainer } from "../products/ProductContainer";
import { FilterDropdown } from "./filter/FilterDropdown";
import { SelectedFilterPill } from "./filter/SelectedFilterPill";
import { SortDropdown } from "./sort/SortDropdown";
import { FilterContainer } from "./filter/FilterContainer";

export const BrowseContainer = ({
  products,
  loading,
  error,
  category,
  gender,
}) => {
  const { clothingSizes, shoeSizes, waistSizes } = useMemo(() => {
    // Get all sizes from all products
    const allSizes = products.flatMap((p) => p.sizes ?? []);

    // Split into numeric vs alpha
    const numericSizes = allSizes.filter((s) => !Number.isNaN(Number(s)));
    const alphaSizes = allSizes.filter((s) => Number.isNaN(Number(s)));

    // Shoe vs waist: simple heuristic based on value
    const shoeSizes = [
      ...new Set(numericSizes.filter((s) => Number(s) < 20)),
    ].sort((a, b) => Number(a) - Number(b));

    const waistSizes = [
      ...new Set(numericSizes.filter((s) => Number(s) >= 20)),
    ].sort((a, b) => Number(a) - Number(b));

    // Clothing sizes (XS–XL etc) with nice custom order
    const CLOTHING_ORDER = [
      "XS",
      "S",
      "S/M",
      "M",
      "L",
      "L/XL",
      "XL",
      "One Size",
    ];

    const clothingSizes = [...new Set(alphaSizes)].sort((a, b) => {
      const ia = CLOTHING_ORDER.indexOf(a);
      const ib = CLOTHING_ORDER.indexOf(b);

      if (ia === -1 && ib === -1) return a.localeCompare(b);
      if (ia === -1) return 1;
      if (ib === -1) return -1;
      return ia - ib;
    });

    return { clothingSizes, shoeSizes, waistSizes };
  }, [products]);

  const [filters, setFilters] = useState({
    gender: gender ? [gender] : [],
    category: category ? [category] : [],
    colors: [],
    clothingSize: [],
    shoeSize: [],
    waistSize: [],
  });

  // Clear all filters with reset button.
  const clearFilters = () => {
    setFilters({
      gender: [],
      category: [],
      colors: [],
      clothingSize: [],
      shoeSize: [],
      waistSize: [],
    });
  };

  // Toggle a specific filter group.
  const toggleFilter = (group, value) => {
    setFilters((prev) => ({
      ...prev,
      [group]: prev[group].includes(value)
        ? prev[group].filter((v) => v !== value) // remove
        : [...prev[group], value], // add
    }));
  };

  // ====== SORT STATE ======

  const [sortBy, setSortBy] = useState("Name, ASC");

  // ====== FILTER PRODUCTS ======

  const filteredProducts = products.filter((product) => {
    const matchGender =
      filters.gender.length === 0 ||
      filters.gender.some(
        (f) => f.toLowerCase() === product.gender.toLowerCase()
      );

    const matchCategory =
      filters.category.length === 0 ||
      filters.category.includes(product.category);

    const productColorNames =
      (product.color ?? []).map((c) => c.name.toLowerCase()) ?? [];

    const matchColors =
      filters.colors.length === 0 ||
      filters.colors.some((f) => productColorNames.includes(f.toLowerCase()));

    const productSizes = product.sizes ?? [];

    const matchClothingSize =
      filters.clothingSize.length === 0 ||
      productSizes.some((s) => filters.clothingSize.includes(s));

    const matchShoeSize =
      filters.shoeSize.length === 0 ||
      productSizes.some((s) => filters.shoeSize.includes(s));

    const matchWaistSize =
      filters.waistSize.length === 0 ||
      productSizes.some((s) => filters.waistSize.includes(s));

    return (
      matchGender &&
      matchCategory &&
      matchColors &&
      matchClothingSize &&
      matchShoeSize &&
      matchWaistSize
    );
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (!sortBy) return 0;

    const [field, direction] = sortBy.split(", ").map((v) => v.trim());
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

  // ====== RENDER ======

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Browse Apparel
          </h2>
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
          {/* FILTERS COLUMN */}
          <div className="hidden space-y-4 lg:block">
            <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />

            <SelectedFilterPill filters={filters} toggleFilter={toggleFilter} />

            <FilterContainer
              clearFilters={clearFilters}
              toggleFilter={toggleFilter}
              filters={filters}
              products={products}
              clothingSizes={clothingSizes}
              shoeSizes={shoeSizes}
              waistSizes={waistSizes}
            />
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
