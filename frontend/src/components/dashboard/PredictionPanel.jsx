import { addPrediction } from "../../utils/predictionHistory";
import { useEffect, useState } from "react";
import { getPrediction } from "../../services/api";

export default function PredictionPanel() {
  const [prediction, setPrediction] = useState({
    failure_probability: 0,
    status: "Loading...",
  });

  useEffect(() => {
    const fetchPrediction = async () => {
      try {
        const data = await getPrediction();
        setPrediction(data);
        addPrediction(data);
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
  </div>
);
}