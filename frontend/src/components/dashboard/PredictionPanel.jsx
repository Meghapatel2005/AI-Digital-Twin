import { addAlert } from "../../utils/alertHistory";
import { shouldStoreAlert } from "../../utils/alertManager";
import { generateAlert } from "../../utils/alertEngine";
import { addPrediction } from "../../utils/predictionHistory";
import { useEffect, useState } from "react";
import { useNotification } from "../../context/NotificationContext";
import { getPrediction } from "../../services/api";
import { showNotification } from "../../utils/notification";

export default function PredictionPanel() {
  const [prediction, setPrediction] = useState({
    failure_probability: 0,
    status: "Loading...",
  });

  const alert = generateAlert(prediction.failure_probability);
  const { showToast } = useNotification();

  useEffect(() => {
    const fetchPrediction = async () => {
      try {
        const data = await getPrediction();
        setPrediction(data);
        addPrediction(data);

        const alert = generateAlert(data.failure_probability);

if (shouldStoreAlert(alert)) {
  addAlert(alert);

  showToast(alert.message, alert.type.toLowerCase());

  if (alert.type === "Critical") {
    showNotification("🚨 Critical Machine Alert", alert.message);
  }
}
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchPrediction();

    const interval = setInterval(fetchPrediction, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
  <div
  style={{
    background: "rgba(30,41,59,0.85)",
    backdropFilter: "blur(10px)",
    color: "white",
    padding: "24px",
    borderRadius: "18px",
    border: "1px solid rgba(34,197,94,0.25)",
    boxShadow: "0 0 20px rgba(34,197,94,0.15)",
    textAlign: "center",
    transition: "all 0.3s ease",
  }}
>
    <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
  }}
>
  <h2
    style={{
      fontSize: "24px",
      fontWeight: "bold",
      letterSpacing: "0.5px",
      margin: 0,
    }}
  >
    🤖 AI Prediction
  </h2>

  <span
    style={{
      background: "#22c55e",
      color: "white",
      padding: "4px 10px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "bold",
      boxShadow: "0 0 10px rgba(34,197,94,0.6)",
    }}
  >
    🟢 LIVE
  </span>
</div>

    <h1
      style={{
        fontSize: "42px",
        color:
          prediction.status === "High Risk"
            ? "#ef4444"
            : prediction.status === "Medium Risk"
            ? "#f59e0b"
            : "#22c55e",
      }}
    >
      {prediction.failure_probability}%
    </h1>

    <h3
  style={{
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "8px",
  }}
>
  {prediction.status}
</h3>
    
    <div
  style={{
    display: "inline-block",
    marginTop: "10px",
    padding: "6px 14px",
    borderRadius: "20px",
    background: alert.color,
    color: "white",
    fontWeight: "bold",
    fontSize: "14px",
  }}
>
  {alert.type}
</div>

    <p
  style={{
    marginTop: "15px",
    fontWeight: "bold",
    color: alert.color,
    fontSize: "18px",
  }}
>
  {alert.message}
</p>

  </div>
);
}