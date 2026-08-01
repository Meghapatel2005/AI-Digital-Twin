import { useEffect, useState } from "react";
import { getAlerts } from "../../utils/alertHistory";

export default function AlertHistory() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAlerts([...getAlerts()]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        background: "#1e293b",
        color: "white",
        padding: "20px",
        borderRadius: "12px",
        marginTop: "20px",
      }}
    >
      <h3>🚨 Alert History</h3>

      {alerts.length === 0 ? (
        <p>No alerts yet</p>
      ) : (
        alerts.map((alert, index) => (
          <div
            key={index}
            style={{
              marginTop: "10px",
              padding: "10px",
              borderLeft: `5px solid ${alert.color}`,
              background: "#0f172a",
              borderRadius: "8px",
            }}
          >
            <strong>{alert.type}</strong>
            <br />
            {alert.message}
            <br />
            <small>{alert.time}</small>
          </div>
        ))
      )}
    </div>
  );
}