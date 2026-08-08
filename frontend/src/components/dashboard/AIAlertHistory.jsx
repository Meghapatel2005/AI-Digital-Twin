import Card from "../ui/Card";
import { useSensor } from "../../context/SensorContext";
import { useEffect, useState } from "react";

const ALERTS_KEY = "ai_alert_history";
const STATE_KEY = "ai_alert_active_state";

export default function AIAlertHistory() {
  const { sensorData } = useSensor();

  const { temperature, vibration, health } = sensorData;

  const [alerts, setAlerts] = useState(() => {
    try {
      return JSON.parse(sessionStorage.getItem(ALERTS_KEY)) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    let currentState = "NORMAL";
    let message = "";
    let icon = "";
    let color = "";

    // 🔴 CRITICAL
    if (health < 50 || temperature > 85) {
      currentState = "CRITICAL";
      message = "Critical Machine Condition";
      icon = "🔴";
      color = "text-red-400";
    }

    // 🟡 WARNING
    else if (
      temperature > 75 ||
      vibration > 0.5 ||
      health <= 80
    ) {
      currentState = "WARNING";

      if (temperature > 75) {
        message = "Temperature Elevated";
        icon = "🟡";
      } else if (vibration > 0.5) {
        message = "Abnormal Vibration";
        icon = "📳";
      } else {
        message = "Machine Health Declining";
        icon = "🟡";
      }

      color = "text-yellow-400";
    }

    // 🟢 NORMAL
    else {
      currentState = "NORMAL";
    }

    // Get previous state from browser storage
    const previousState =
      sessionStorage.getItem(STATE_KEY) || "NORMAL";

    // ------------------------------------------------
// 🟢 MACHINE RECOVERED (जब सब कुछ नॉर्मल हो जाए)
// ------------------------------------------------

if (currentState === "NORMAL") {
  if (previousState !== "NORMAL") {
    setAlerts([]);
    sessionStorage.removeItem(ALERTS_KEY);
  }
  
  sessionStorage.setItem(STATE_KEY, "NORMAL");
  return;
}
    // ------------------------------------------------
    // 🚫 SAME ALERT IS ALREADY ACTIVE
    // ------------------------------------------------

    if (previousState === currentState) {
      return;
    }

    // ------------------------------------------------
    // 🚨 NEW ALERT
    // ------------------------------------------------

    const newAlert = {
      message,
      icon,
      color,
      time: new Date().toLocaleTimeString(),
    };

    setAlerts((prev) => {
      const updated = [newAlert, ...prev].slice(0, 5);

      sessionStorage.setItem(
        ALERTS_KEY,
        JSON.stringify(updated)
      );

      return updated;
    });

    sessionStorage.setItem(STATE_KEY, currentState);

  }, [temperature, vibration, health]);

  return (
    <Card title="🚨 AI Alert History">

      <div className="space-y-3">

        {alerts.length === 0 ? (
          <p className="text-slate-400 text-sm">
            🟢 No AI alerts detected.
          </p>
        ) : (
          alerts.map((alert, index) => (
            <div
              key={`${alert.time}-${index}`}
              className="flex justify-between items-center border-b border-slate-700 pb-2"
            >
              <span className={`font-medium ${alert.color}`}>
                {alert.icon} {alert.message}
              </span>

              <span className="text-slate-500 text-xs">
                {alert.time}
              </span>
            </div>
          ))
        )}

      </div>

    </Card>
  );
}