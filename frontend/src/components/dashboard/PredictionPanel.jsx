import Card from "../ui/Card";

const PredictionPanel = () => {
  return (
    <Card title="AI Prediction">
      <div className="space-y-4">

        <div className="text-5xl font-bold text-red-400">
          82%
        </div>

        <p className="text-slate-300">
          Failure Probability
        </p>

        <div className="bg-red-500/20 border border-red-500 rounded-lg p-3">
          <p className="text-red-300 font-semibold">
            ⚠ Motor 2 failure predicted in next 4 hours
          </p>
        </div>

      </div>
    </Card>
  );
};

export default PredictionPanel;