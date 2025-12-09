/**
 * SelectedFilterPill Component
 *
 * Displays a collection of “filter pills” representing all currently active
 * filters across multiple filter groups (e.g., gender, category, sizes, colors).
 * Each pill shows a selected value and includes a small remove button that
 * toggles the filter off.
 *
 * @param {Object} props
 * @param {Object} props.filters - An object where each key represents a filter
 *   group (e.g., "category", "colors") and each value is an array of selected
 *   filter values for that group.
 *   Example:
 *   {
 *     gender: ["Mens"],
 *     colors: ["Red", "Blue"],
 *     shoeSize: ["10"]
 *   }
 * @param {Function} props.toggleFilter - A callback to remove (toggle off)
 *   a selected filter value..
 */

export const SelectedFilterPill = ({ filters, toggleFilter }) => {
  return (
    <div className="space-x-2 space-y-2">
      <div className="flex flex-wrap gap-2">
        {/* USING KEYS AS THE FILTERS ARE IN AN OBJECT CONTAINING ARRAYS INSIDE*/}
        {Object.keys(filters).map((group) =>
          filters[group].map((value) => (
            <span
              key={`${group}-${value}`}
              className="inline-flex items-center justify-center rounded-full bg-teal-200 px-2.5 py-0.5 text-teal-900"
            >
              <p className="text-sm whitespace-nowrap">{value}</p>

              <button
                type="button"
                onClick={() => toggleFilter(group, value)}
                className="ms-1.5 -me-1 inline-block rounded-full bg-teal-300 p-0.5 text-teal-700 transition hover:bg-teal-400"
              >
                <span className="sr-only">Remove</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#000000ff"
                  className="size-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </span>
          ))
        )}
      </div>
    </div>
  );
};
