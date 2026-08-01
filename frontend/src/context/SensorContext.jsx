import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const SensorContext = createContext();

export const SensorProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

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
    <SensorContext.Provider value={{ sensorData, history }}>
      {children}
    </SensorContext.Provider>
  );
};

export const useSensor = () => useContext(SensorContext);