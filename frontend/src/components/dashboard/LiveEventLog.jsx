import Card from "../ui/Card";
import { useSensor } from "../../context/SensorContext";

export default function LiveEventLog() {
  const { sensorData } = useSensor();

  const events = [];

  events.push("🤖 Robot Started");

  events.push(
  sensorData.temperature > 75
    ? "🌡 High Temperature"
    : "🌡 Temperature Normal"
);

events.push(
  sensorData.vibration > 0.5
    ? "📳 High Vibration"
    : "📳 Vibration Normal"
);

  if (sensorData.health >= 80) {
  events.push("🟢 NORMAL");
} else if (sensorData.health >= 50) {
  events.push("🟡 Maintenance Recommended");
} else {
  events.push("🔴 Critical Machine Condition");
}

  return (
    <Card title="📜 Live Event Log">

      <div className="space-y-3">

        {events.map((event, index) => (
          <div
  key={index}
  className="flex justify-between items-center text-slate-300 border-b border-slate-700 pb-2"
>
  <span>{event}</span>

  <span className="text-cyan-400 text-sm">
    {new Date().toLocaleTimeString()}
  </span>
</div>
        ))}

      </div>

    </Card>
  );
}