import TemperatureChart from "../charts/TemperatureChart";
import VibrationChart from "../charts/VibrationChart";
import SpeedChart from "../charts/SpeedChart";

const SensorCharts = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">
      <TemperatureChart />
      <VibrationChart />
      <SpeedChart />
    </div>
  );
};

export default SensorCharts;