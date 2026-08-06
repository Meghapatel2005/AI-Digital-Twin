import Card from "../ui/Card";
import { useSensor } from "../../context/SensorContext";

export default function AIAlertPanel() {
  const { sensorData } = useSensor();

  const status =
    sensorData.health > 80
      ? {
          text: "🟢 System Healthy",
          color: "#22c55e",
        }
      : sensorData.health > 50
      ? {
          text: "🟡 Maintenance Soon",
          color: "#f59e0b",
        }
      : {
          text: "🔴 Critical Alert",
          color: "#ef4444",
        };

  return (
    <Card title="🤖 AI Alert Panel">
      <div className="space-y-4">

        <div
          className="text-lg font-bold"
          style={{ color: status.color }}
        >
          {status.text}
        </div>

        <div className="text-slate-300 space-y-2">

          <p>🌡 Temperature : {sensorData.temperature}°C</p>

          <p>⚙ RPM : {sensorData.rpm}</p>

          <p>❤️ Health : {sensorData.health}%</p>

          <p>📳 Vibration : {sensorData.vibration}</p>

        </div>

      </div>
    </Card>
  );
}