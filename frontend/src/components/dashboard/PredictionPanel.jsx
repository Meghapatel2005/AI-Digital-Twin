import Card from "../ui/Card";
import useSensorData from "../../hooks/useSensorData";

const PredictionPanel = () => {
  const sensorData = useSensorData();

  const probability = Math.min(
    99,
    Math.round(
      sensorData.temperature * 0.8 +
      sensorData.vibration * 100 +
      (3500 - sensorData.rpm) * 0.02
    )
  );

  return (
    <Card title="AI Prediction">

      <div className="space-y-4">

        <div className="text-5xl font-bold text-red-400">
          {probability}%
        </div>

        <p className="text-slate-300">
          Failure Probability
        </p>

        <div className="bg-red-500/20 border border-red-500 rounded-lg p-3">
          <p className="text-red-300 font-semibold">
            ⚠ Predictive maintenance recommended
          </p>
        </div>

      </div>

    </Card>
  );
};

export default PredictionPanel;