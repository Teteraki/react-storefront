import { BarChartComponent } from "../dashboard/BarChartComponent";
import { CloseButton } from "../toast/CloseButton";

export const AdminInfo = ({ product, show, onClose }) => {
  if (!show || !product) return null;

  // Build chart data for this single product
  const formatBarChartData = (product) => [
    {
      name: "Domestic",
      gross: Number(product.dom_gross.toFixed(2)),
      cost: Number(product.dom_cost.toFixed(2)),
      profit: Number(product.dom_profit.toFixed(2)),
    },
    {
      name: "Intl.",
      gross: Number(product.intl_gross.toFixed(2)),
      cost: Number(product.intl_cost.toFixed(2)),
      profit: Number(product.intl_profit.toFixed(2)),
    },
    {
      name: "Total",
      gross: Number(product.total_gross.toFixed(2)),
      cost: Number(product.total_cost.toFixed(2)),
      profit: Number(product.total_profit.toFixed(2)),
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
    >
      <div className="max-h-200 relative rounded-lg bg-white p-6 shadow-lg">
        <CloseButton show={show} onClose={onClose} />

        <h2
          id="modalTitle"
          className="text-xl font-bold text-gray-900 sm:text-2xl"
        >
          Admin Info
        </h2>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
          {/* Gross Revenue */}
          <div>
            <h3 className="font-semibold text-gray-900">Domestic Gross</h3>
            <p>${product.dom_gross.toFixed(2)}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">International Gross</h3>
            <p>${product.intl_gross.toFixed(2)}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Total Gross</h3>
            <p>${product.total_gross.toFixed(2)}</p>
          </div>

          {/* Costs */}
          <div>
            <h3 className="font-semibold text-gray-900">Domestic Cost</h3>
            <p>${product.dom_cost.toFixed(2)}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">International Cost</h3>
            <p>${product.intl_cost.toFixed(2)}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Total Cost</h3>
            <p>${product.total_cost.toFixed(2)}</p>
          </div>

          {/* Profit */}
          <div>
            <h3 className="font-semibold text-gray-900">Domestic Profit</h3>
            <p>${product.dom_profit.toFixed(2)}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">
              International Profit
            </h3>
            <p>${product.intl_profit.toFixed(2)}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Total Profit</h3>
            <p className="font-semibold text-green-700">
              ${product.total_profit.toFixed(2)}
            </p>
          </div>

          {/* Bar chart */}
          <div className="sm:col-span-2 mt-4">
            <BarChartComponent
              data={formatBarChartData(product)}
              series={[
                { dataKey: "gross", name: "Gross", fill: "#8884d8" },
                { dataKey: "cost", name: "Cost", fill: "#82ca9d" },
                { dataKey: "profit", name: "Profit", fill: "#ffc658" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
