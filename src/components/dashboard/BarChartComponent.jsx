import {
  BarChart,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
} from "recharts";

/**
 * BarChartComponent
 *
 * A reusable wrapper around Recharts' <BarChart> component.
 * This component renders a configurable multi-series bar chart,
 * used in the analytics dashboard for visualizing
 * comparisons such as category totals, gender performance,
 * or any dataset with multiple numeric series.
 *
 *
 * @param {Object} props
 * @param {Array<Object>} props.data
 *   The dataset for the chart. Each object should contain:
 *   - name: category or label for the X-axis
 *   - Additional numeric fields for each series (e.g., "sales", "profit")
 */

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
