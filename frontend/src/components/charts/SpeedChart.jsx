import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import Card from "../ui/Card";
import { useSensor } from "../../context/SensorContext";

const SpeedChart = () => {
  const { history } = useSensor();

  return (
    <Card title="Live Motor Speed">
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={history}>
            <XAxis dataKey="time" hide />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="rpm"
              stroke="#38bdf8"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default SpeedChart;