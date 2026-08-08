import Card from "../ui/Card";
import { useSensor } from "../../context/SensorContext";

export default function AIAlertPanel() {
  const { sensorData } = useSensor();

  const status =
  sensorData.health > 80
    ? {
        text: "🟢 System Healthy",
        color: "#22c55e",
        risk: "LOW RISK",
        recommendation: "Machine is operating normally.",
      }
    : sensorData.health > 50
    ? {
        text: "🟡 Maintenance Soon",
        color: "#f59e0b",
        risk: "MEDIUM RISK",
        recommendation: "Schedule preventive maintenance soon.",
      }
    : {
        text: "🔴 Critical Alert",
        color: "#ef4444",
        risk: "HIGH RISK",
        recommendation: "Immediate machine inspection required.",
      };

      let diagnosis = "";
let recommendation = "";

if (sensorData.health < 50) {
  diagnosis = "🔴 Critical machine condition detected";
  recommendation = "Immediate inspection and maintenance required.";
} else if (sensorData.temperature > 85) {
  diagnosis = "🌡 High temperature detected";
  recommendation = "Check cooling system and reduce machine load.";
} else if (sensorData.vibration > 0.5) {
  diagnosis = "📳 Abnormal vibration detected";
  recommendation = "Inspect bearings, joints and mechanical alignment.";
} else if (sensorData.temperature > 75) {
  diagnosis = "🟡 Temperature slightly elevated";
  recommendation = "Monitor temperature and schedule preventive maintenance.";
} else {
  diagnosis = "🟢 All machine parameters are normal";
  recommendation = "No immediate maintenance action required.";
}

  return (
    <Card title="🤖 AI Alert Panel">
      <div className="space-y-4">

        <div
          className="text-lg font-bold"
          style={{ color: status.color }}
        >
          {status.text}
        </div>

        <div
          className="text-sm font-semibold"
          style={{ color: status.color }}
        >
          {status.risk}
        </div>

        <div className="text-slate-300 text-sm">
          💡 {status.recommendation}
        </div>

        <div className="mt-4 p-3 rounded-lg bg-slate-800/60 border border-slate-700">
  <p className="text-sm font-semibold text-cyan-400">
    🔍 AI Diagnosis
  </p>

  <p className="text-slate-200 mt-2">
    {diagnosis}
  </p>

  <p className="text-slate-400 text-sm mt-2">
    💡 {recommendation}
  </p>
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