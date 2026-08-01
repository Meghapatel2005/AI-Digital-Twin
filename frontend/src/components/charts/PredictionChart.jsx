import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useSensor } from "../../context/SensorContext";

export default function PredictionChart() {
  const { predictionHistory } = useSensor();

const history = predictionHistory.map((item, index) => ({
  name: index + 1,
  probability: item.failure_probability,
}));

  return (
    <div
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "12px",
        marginTop: "20px",
      }}
    >
      <h3 style={{ color: "white" }}>📈 Prediction History</h3>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={history}>
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="probability"
            stroke="#3b82f6"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}