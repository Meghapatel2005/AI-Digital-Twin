import GaugeComponent from "react-gauge-component";
import { useSensor } from "../../context/SensorContext";

export default function HealthGauge() {
  const { sensorData } = useSensor();

  return (
    <div
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      }}
    >
      <h2
        style={{
          color: "white",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        ❤️ Machine Health
      </h2>

      <GaugeComponent
        value={sensorData.health}
        type="radial"
        labels={{
          valueLabel: {
            style: {
              fill: "#ffffff",
              fontSize: "32px",
            },
          },
        }}
        arc={{
          colorArray: ["#ef4444", "#f59e0b", "#22c55e"],
          subArcs: [
            { limit: 40 },
            { limit: 70 },
            { limit: 100 },
          ],
        }}
      />
    </div>
  );
}