import {
  BarChart,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
} from "recharts";

export const BarChartComponent = ({
  data,
  series,
  isAnimationActive = true,
}) => (
  <BarChart
    style={{
      width: "100%",
      maxWidth: "100%",
      maxHeight: "70vh",
      aspectRatio: 1.618,
    }}
    data={data}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis width="auto" />
    <Tooltip />
    <Legend />
    {series.map((s) => (
      <Bar
        key={s.dataKey}
        dataKey={s.dataKey}
        name={s.name}
        fill={s.fill}
        isAnimationActive={isAnimationActive}
      />
    ))}
  </BarChart>
);
