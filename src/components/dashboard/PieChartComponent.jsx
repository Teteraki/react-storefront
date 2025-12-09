import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

export const PieChartComponent = ({ data, isAnimationActive = true }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  const renderLabel = ({ name, value }) => {
    if (!total) return name;
    const percent = ((value / total) * 100).toFixed(1);
    return `${name} ${percent}%`;
  };

  const colors = ["#0ea5e9", "#22c55e", "#fbbf24", "#f97316", "#a855f7"]; // Re

  return (
    <ResponsiveContainer width="100%" height={360}>
      <PieChart margin={{ top: 32, right: 80, bottom: 32, left: 80 }}>
        <Tooltip
          formatter={(value) => value.toLocaleString()}
          labelFormatter={(label) => `${label}`}
        />

        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius="70%"
          label={renderLabel}
          isAnimationActive={isAnimationActive}
        >
          {data.map((entry, idx) => (
            <Cell key={entry.name} fill={colors[idx % colors.length]} />
          ))}
        </Pie>

        {total > 0 && (
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontSize: "1.1rem", fontWeight: 600 }}
          >
            {total.toLocaleString()}
          </text>
        )}
      </PieChart>
    </ResponsiveContainer>
  );
};
