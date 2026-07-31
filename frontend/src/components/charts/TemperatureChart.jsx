import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Card from "../ui/Card";
import useSensorData from "../../hooks/useSensorData";

const TemperatureChart = () => {
  const sensorData = useSensorData();

  const [data, setData] = useState([]);

  useEffect(() => {
    setData((prev) => {
      const updated = [
        ...prev,
        {
          time: new Date().toLocaleTimeString(),
          temperature: sensorData.temperature,
        },
      ];

      if (updated.length > 10) {
        updated.shift();
      }

      return updated;
    });
  }, [sensorData]);

  return (
    <Card title="Live Temperature">

      <div style={{ width: "100%", height: 300 }}>

        <ResponsiveContainer>

          <LineChart data={data}>

            <XAxis dataKey="time" hide />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="temperature"
              stroke="#22d3ee"
              strokeWidth={3}
              dot={false}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </Card>
  );
};

export default TemperatureChart;