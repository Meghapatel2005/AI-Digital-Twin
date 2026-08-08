import Card from "../ui/Card";
import { useSensor } from "../../context/SensorContext";

export default function AIRiskSummary() {
  const { predictionHistory } = useSensor();

  let low = 0;
  let medium = 0;
  let high = 0;

  predictionHistory.forEach((item) => {
    const probability = Number(item.failure_probability) || 0;

    if (probability < 30) {
      low++;
    } else if (probability < 70) {
      medium++;
    } else {
      high++;
    }
  });

  const total = low + medium + high;

  const lowPercent = total ? Math.round((low / total) * 100) : 0;
  const mediumPercent = total ? Math.round((medium / total) * 100) : 0;
  const highPercent = total ? Math.round((high / total) * 100) : 0;

  return (
    <Card title="🤖 AI Risk Summary">

      <div className="space-y-5">

        {/* LOW RISK */}
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-green-400 font-semibold">
              🟢 Low Risk
            </span>

            <span className="text-white font-bold">
              {lowPercent}%
            </span>
          </div>

          <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 rounded-full transition-all duration-500"
              style={{ width: `${lowPercent}%` }}
            />
          </div>
        </div>

        {/* MEDIUM RISK */}
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-yellow-400 font-semibold">
              🟡 Medium Risk
            </span>

            <span className="text-white font-bold">
              {mediumPercent}%
            </span>
          </div>

          <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-yellow-500 rounded-full transition-all duration-500"
              style={{ width: `${mediumPercent}%` }}
            />
          </div>
        </div>

        {/* HIGH RISK */}
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-red-400 font-semibold">
              🔴 High Risk
            </span>

            <span className="text-white font-bold">
              {highPercent}%
            </span>
          </div>

          <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-red-500 rounded-full transition-all duration-500"
              style={{ width: `${highPercent}%` }}
            />
          </div>
        </div>

      </div>

    </Card>
  );
}