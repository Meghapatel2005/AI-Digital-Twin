import { sensorHistory } from "../utils/sensorHistory";
import { useEffect, useState } from "react";

const useSensorData = () => {
  const [sensorData, setSensorData] = useState({
    temperature: 72,
    vibration: 0.32,
    rpm: 3450,
    health: 98,
  });

  useEffect(() => {
    const interval = setInterval(() => {
        sensorHistory.push({
  time: new Date().toLocaleTimeString(),
  temperature: +(70 + Math.random() * 10).toFixed(1),
  vibration: +(0.2 + Math.random() * 0.2).toFixed(2),
  rpm: Math.floor(3400 + Math.random() * 100),
});

if (sensorHistory.length > 20) {
  sensorHistory.shift();
}
        setSensorData({
        temperature: +(70 + Math.random() * 10).toFixed(1),
        vibration: +(0.2 + Math.random() * 0.2).toFixed(2),
        rpm: Math.floor(3400 + Math.random() * 100),
        health: Math.floor(95 + Math.random() * 5),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return sensorData;
};

export default useSensorData;