import Card from "../ui/Card";
import { FaTemperatureHigh, FaBolt, FaHeartbeat } from "react-icons/fa";
import { GiGearHammer } from "react-icons/gi";

const kpiData = [
  {
    title: "Temperature",
    value: "72°C",
    icon: <FaTemperatureHigh className="text-red-400 text-3xl" />,
  },
  {
    title: "Vibration",
    value: "0.32 mm/s",
    icon: <FaBolt className="text-yellow-400 text-3xl" />,
  },
  {
    title: "Motor Speed",
    value: "3450 RPM",
    icon: <GiGearHammer className="text-cyan-400 text-3xl" />,
  },
  {
    title: "AI Health",
    value: "98%",
    icon: <FaHeartbeat className="text-green-400 text-3xl" />,
  },
];

const KPICards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {kpiData.map((item) => (
        <Card key={item.title}>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-400 text-sm">
                {item.title}
              </p>

              <h2 className="text-3xl font-bold text-white mt-2">
                {item.value}
              </h2>
            </div>

            {item.icon}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default KPICards;