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
      background: "#1e293b",
      color: "white",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      textAlign: "center",
    }}
  >
    <h2 style={{ marginBottom: "15px" }}>🤖 AI Prediction</h2>

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

    <h3>{prediction.status}</h3>
    
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