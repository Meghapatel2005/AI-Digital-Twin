import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useSensor } from "../../context/SensorContext";

export default function HealthTrendChart() {
  const { healthHistory } = useSensor();

  return (
    <div
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        height: "350px",
      }}
    >
      <h2
        style={{
          color: "white",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        📈 Machine Health Trend
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={healthHistory}>
          <XAxis dataKey="time" stroke="#ffffff" />
          <YAxis domain={[0, 100]} stroke="#ffffff" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="health"
            stroke="#22c55e"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}