export const FilterDropdown = ({ title, filters, selected, onToggle }) => {
  return (
    <details className="overflow-hidden rounded-sm border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
        <span className="text-sm font-medium">{title}</span>

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
          <span className="text-sm text-gray-700">
            {selected.length} Selected
          </span>
        </header>

        <ul className="space-y-1 border-t border-gray-200 p-4">
          {filters.map((filter) => (
            <li key={filter}>
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selected.includes(filter)}
                  onChange={() => onToggle(filter)}
                  className="size-5 rounded-sm border-gray-300 shadow-sm bg-teal-600"
                />
                <span className="text-sm font-medium text-gray-700">
                  {filter}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
};
