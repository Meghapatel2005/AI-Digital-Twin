import Card from "../ui/Card";
import useSensorData from "../../hooks/useSensorData";

const AlertPanel = () => {
  const sensorData = useSensorData();

  const alerts = [];

  if (sensorData.temperature > 77) {
    alerts.push("🔥 High Temperature Detected");
  }

  if (sensorData.vibration > 0.35) {
    alerts.push("⚠ Excessive Vibration");
  }

  if (sensorData.rpm > 3480) {
    alerts.push("⚙ High Motor Speed");
  }

  if (sensorData.health < 96) {
    alerts.push("❤️ AI Health Dropping");
  }

  return (
    <Card title="Recent Alerts">
      {alerts.length === 0 ? (
        <p className="text-green-400">
          ✅ All systems operating normally
        </p>
      ) : (
        <div className="space-y-3">
          {alerts.map((alert, index) => (
            <div
              key={index}
              className="bg-red-500/20 border border-red-500 rounded-lg p-3 text-red-300"
            >
              {alert}
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};

export default AlertPanel;