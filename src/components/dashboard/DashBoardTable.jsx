// modified from hyper UI
export const DashboardTable = ({ columns, rows }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200">
        <thead className="ltr:text-left rtl:text-right">
          <tr className="*:font-medium *:text-gray-900">
            {columns.map((col, idx) => (
              <th key={idx} className="px-3 py-2 whitespace-nowrap">
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {rows.map((row, rowIdx) => (
            <tr key={rowIdx} className="*:text-gray-900 *:first:font-medium">
              {columns.map((col, colIdx) => (
                <td key={colIdx} className="px-3 py-2 whitespace-nowrap">
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
