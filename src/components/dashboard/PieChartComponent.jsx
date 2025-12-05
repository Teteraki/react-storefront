import { PieChart, Pie } from "recharts";

// #region Sample data
const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

// #endregion
export const PieChartComponent = ({ isAnimationActive = true }) => (
  <PieChart
    style={{
      width: "100%",
      maxWidth: "500px",
      maxHeight: "80vh",
      aspectRatio: 1,
    }}
    responsive
    margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
  >
    <Pie
      data={data01}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="50%"
      label
      outerRadius="50%"
      fill="#8884d8"
      isAnimationActive={isAnimationActive}
    />
  </PieChart>
);
