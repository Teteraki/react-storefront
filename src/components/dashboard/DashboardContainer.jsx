import { PieChartComponent } from "./PieChartComponent";
import { DashBoardCard } from "./DashBoardCard";
import { DashboardTable } from "./DashBoardTable";
import { Link } from "react-router-dom";

/**
 * DashBoardContainer Component
 *
 * The main analytics view for the storefront's Sales Dashboard.
 * This component aggregates product data and transforms it into
 * various datasets used for tables, charts, and summary views.
 *
 * It renders:
 * - Top 10 Selling Products (table)
 * - Top 10 Most Profitable Products (table)
 * - Sales & Profit summary by category (table)
 * - Sales distribution by gender (pie chart)
 * - Sales distribution by category (pie chart)
 *
 * @param {Object} props
 * @param {Array<Object>} props.products - Full list of products passed into the dashboard.
 */

export const DashBoardContainer = ({ products }) => {
  if (!products) return null;

  const getCategoryPieData = (products) => {
    const categories = [...new Set(products.map((p) => p.category))];

    return categories.map((category) => ({
      name: category,
      value: products
        .filter((p) => p.category === category)
        .reduce((sum, p) => sum + p.sales.total, 0),
    }));
  };

  const getGenderPieData = (products) => {
    const genders = [...new Set(products.map((p) => p.gender))];

    return genders.map((gender) => ({
      name: gender,
      value: products
        .filter((p) => p.gender === gender)
        .reduce((sum, p) => sum + p.sales.total, 0),
    }));
  };

  const getTop10 = (products) => {
    return {
      columns: ["Name", "Gender", "Category", "Sales"],
      rows: [...products]
        .sort((a, b) => b.sales.total - a.sales.total)
        .slice(0, 10)
        .map((p) => ({
          Name: (
            <Link
              to={`/product/${p.id}`}
              className="text-teal-600 hover:underline"
            >
              {p.name}
            </Link>
          ),
          Gender: p.gender,
          Category: p.category,
          Sales: p.sales.total,
        })),
    };
  };

  const getTop10Profitable = (products) => {
    return {
      columns: ["Name", "Gender", "Category", "Sales", "Profit"],
      rows: [...products]
        .sort((a, b) => b.total_profit - a.total_profit)
        .slice(0, 10)
        .map((p) => ({
          Name: (
            <Link
              to={`/product/${p.id}`}
              className="text-teal-600 hover:underline"
            >
              {p.name}
            </Link>
          ),
          Gender: p.gender,
          Category: p.category,
          Sales: p.sales.total,
          Profit: `$${p.total_profit.toFixed(2)}`,
        })),
    };
  };

  const getCategorySummary = (products) => {
    const categories = [...new Set(products.map((p) => p.category))];

    const rows = categories
      .map((category) => {
        const items = products.filter((p) => p.category === category);

        const totalSales = items.reduce((sum, p) => sum + p.sales.total, 0);
        const totalProfit = items
          .reduce((sum, p) => sum + p.total_profit, 0)
          .toFixed(2);

        return {
          Category: category,
          "Total Sales": totalSales,
          "Total Profit": `$${totalProfit}`,
        };
      })
      .sort((a, b) => a.Category.localeCompare(b.Category));

    return {
      columns: ["Category", "Total Sales", "Total Profit"],
      rows,
    };
  };

  const categoryData = getCategoryPieData(products);
  const genderData = getGenderPieData(products);
  const top10Data = getTop10(products);
  const top10ProfitableData = getTop10Profitable(products);
  const categorySummaryData = getCategorySummary(products);

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="mb-8 text-center">
          <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Sales Dashboard
          </h1>
        </header>

        {/* 2-column layout*/}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left side of dashboard. */}
          <div className="space-y-6">
            <DashBoardCard title="Top 10 Selling Products">
              <DashboardTable
                columns={top10Data.columns}
                rows={top10Data.rows}
              />
            </DashBoardCard>

            <DashBoardCard title="Sales & Profit by Category">
              <DashboardTable
                columns={categorySummaryData.columns}
                rows={categorySummaryData.rows}
              />
            </DashBoardCard>
          </div>

          {/* Right side of dashboard. */}
          <div className="space-y-6">
            <DashBoardCard title="Top 10 Profitable Products">
              <DashboardTable
                columns={top10ProfitableData.columns}
                rows={top10ProfitableData.rows}
              />
            </DashBoardCard>

            <DashBoardCard title="Sales Numbers by Gender">
              <PieChartComponent data={genderData} />
            </DashBoardCard>

            <DashBoardCard title="Sales Numbers by Category">
              <PieChartComponent data={categoryData} />
            </DashBoardCard>
          </div>
        </div>
      </div>
    </section>
  );
};
