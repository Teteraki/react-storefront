import { SalesByGenderPieChart } from "./PieChart";

export const DashBoardContainer = ({ products }) => {
  const salesData = [
    { gender: "Men", sales: 120 },
    { gender: "Women", sales: 180 },
    { gender: "Unisex", sales: 90 },
  ];

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Sales Dashboard
            </h1>
          </header>
          <SalesByGenderPieChart data={salesData} />
        </div>
      </div>
    </section>
  );
};
