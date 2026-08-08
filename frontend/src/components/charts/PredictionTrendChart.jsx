import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useSensor } from "../../context/SensorContext";

export default function PredictionTrendChart() {
  const { predictionHistory } = useSensor();

  const data = predictionHistory.map((item) => ({
  time: item.time || "--",
  probability: Number(item.failure_probability) || 0,
}));

  return (
    <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700">

      <h2 className="text-xl font-bold text-white mb-4">
        🤖 AI Prediction Trend
      </h2>

      {data.length < 2 ? (
        <p className="text-slate-400">
          Collecting prediction data...
        </p>
      ) : (
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="time"
              stroke="#94a3b8"
            />

            <YAxis
              domain={[0, 100]}
              stroke="#94a3b8"
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="probability"
              stroke="#22c55e"
              strokeWidth={3}
              dot={false}
            />

          </LineChart>
        </ResponsiveContainer>
      )}

    </div>
  );
}