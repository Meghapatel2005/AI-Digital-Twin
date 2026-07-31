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
import { useSensor } from "../../context/SensorContext";

const TemperatureChart = () => {
  const { history } = useSensor();

  return (
    <Card title="Live Temperature">

      <div style={{ width: "100%", height: 300 }}>

        <ResponsiveContainer>

          <LineChart data={history}>

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