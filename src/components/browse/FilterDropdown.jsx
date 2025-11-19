export const FilterDropdown = ({title, colors}) => {
    return(

                <details className="overflow-hidden rounded-sm border border-gray-300 [&_summary::-webkit-details-marker]:hidden" open>
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
                      <span className="text-sm text-gray-700"> 0 Selected - NEED TO FIX </span>

                      <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                        Reset
                      </button>
                    </header>

                    <ul className="space-y-1 border-t border-gray-200 p-4">
                      {colors.map((color) => (
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
    );
}