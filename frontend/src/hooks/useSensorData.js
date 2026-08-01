import { useEffect, useState } from "react";
import api from "../services/api";

const useSensorData = () => {
  const [sensorData, setSensorData] = useState({
    temperature: 72,
    vibration: 0.32,
    rpm: 3450,
    health: 98,
  });

  useEffect(() => {
    const fetchSensor = async () => {
      try {
        const response = await api.get("/api/sensor");
        setSensorData(response.data);
      } catch (error) {
        console.error("Sensor API Error:", error);
      }
    };

    fetchSensor();

    const interval = setInterval(fetchSensor, 1000);

    return () => clearInterval(interval);
  }, []);

  return sensorData;
};

export default useSensorData;