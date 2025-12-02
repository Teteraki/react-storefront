

export const SortDropdown = ({ sortBy, setSortBy}) => {
  return (
    <div>
      <label htmlFor="SortBy" className="block text-xs font-medium text-gray-700">
        Sort By
      </label>

      <select
        id="SortBy"
        className="mt-1 rounded-sm border-gray-300 text-sm"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="Name, ASC">Name (A → Z)</option>
        <option value="Name, DESC">Name (Z → A)</option>

        <option value="Price, ASC">Price (Low → High)</option>
        <option value="Price, DESC">Price (High → Low)</option>

        <option value="Category, ASC">Category (A → Z)</option>
        <option value="Category, DESC">Category (Z → A)</option>
      </select>
    </div>
  );
};
