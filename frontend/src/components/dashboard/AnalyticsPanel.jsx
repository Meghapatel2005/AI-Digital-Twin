import Card from "../ui/Card";
import { useSensor } from "../../context/SensorContext";

export default function AnalyticsPanel() {
  const { sensorData } = useSensor();

  const efficiency = Math.max(
  0,
  Math.min(
    100,
    Math.round(
      sensorData.health * 0.75 +
      Math.max(0, 100 - sensorData.temperature) * 0.15 +
      Math.max(0, 100 - sensorData.vibration * 100) * 0.10
    )
  )
);

  const performance =
    efficiency >= 80
      ? {
          text: "🟢 Excellent",
          color: "text-green-400",
        }
      : efficiency >= 65
      ? {
          text: "🟡 Moderate",
          color: "text-yellow-400",
        }
      : {
          text: "🔴 Poor",
          color: "text-red-400",
        };

  return (
    <Card title="📈 Machine Analytics">

      <div className="space-y-5">

        {/* Efficiency */}
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-slate-300">
              Efficiency
            </span>

            <span className="font-bold text-cyan-400">
              {efficiency}%
            </span>
          </div>

          <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-cyan-400 rounded-full transition-all duration-500"
              style={{ width: `${efficiency}%` }}
            />
          </div>
        </div>

        {/* Temperature */}
        <div className="flex justify-between">
          <span className="text-slate-300">
            🌡 Average Temperature
          </span>

          <span className="font-semibold">
            {sensorData.temperature}°C
          </span>
        </div>

        {/* RPM */}
        <div className="flex justify-between">
          <span className="text-slate-300">
            ⚙ Average RPM
          </span>

          <span className="font-semibold">
            {sensorData.rpm}
          </span>
        </div>

        {/* Health */}
        <div className="flex justify-between">
          <span className="text-slate-300">
            ❤️ Machine Health
          </span>

          <span className="font-semibold text-green-400">
            {sensorData.health}%
          </span>
        </div>

        {/* Vibration */}
        <div className="flex justify-between">
          <span className="text-slate-300">
            📳 Vibration
          </span>

          <span className="font-semibold">
            {sensorData.vibration.toFixed(2)}
          </span>
        </div>

        {/* Performance */}
        <div className="border-t border-slate-700 pt-4">

          <div className="flex justify-between items-center">

            <span className="text-slate-300">
              Performance Status
            </span>

            <span className={`font-bold ${performance.color}`}>
              {performance.text}
            </span>

          </div>

        </div>

      </div>

    </Card>
  );
}