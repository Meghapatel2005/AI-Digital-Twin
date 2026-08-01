import { getPrediction } from "../services/api";
import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const SensorContext = createContext();

export const SensorProvider = ({ children }) => {
  const [history, setHistory] = useState([]);
  const [predictionHistory, setPredictionHistory] = useState([]);

  const [sensorData, setSensorData] = useState({
    temperature: 72,
    vibration: 0.32,
    rpm: 3450,
    health: 98,
  });

  useEffect(() => {
    const fetchSensor = async () => {
      try {
        const { data } = await api.get("/api/sensor");

        setSensorData(data);

        const prediction = await getPrediction();

setPredictionHistory((prev) => {
  const updated = [...prev, prediction];

  if (updated.length > 10) {
    updated.shift();
  }

  return updated;
});

        setHistory((prev) => {
          const updated = [
            ...prev,
            {
              ...data,
              time: new Date().toLocaleTimeString(),
            },
          ];

          if (updated.length > 20) updated.shift();

          return updated;
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchSensor();

    const interval = setInterval(fetchSensor, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SensorContext.Provider 
  value={{ sensorData, history, predictionHistory }}>
      {children}
    </SensorContext.Provider>
  );
};

export const useSensor = () => useContext(SensorContext);