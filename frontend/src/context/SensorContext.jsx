import { createContext, useContext, useEffect, useState } from "react";

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
    const interval = setInterval(() => {
      const newData = {
        temperature: +(70 + Math.random() * 10).toFixed(1),
        vibration: +(0.2 + Math.random() * 0.2).toFixed(2),
        rpm: Math.floor(3400 + Math.random() * 100),
        health: Math.floor(95 + Math.random() * 5),
        time: new Date().toLocaleTimeString(),
      };

      setSensorData(newData);

      setHistory((prev) => {
        const updated = [...prev, newData];
        if (updated.length > 20) updated.shift();
        return updated;
      });

    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SensorContext.Provider value={{ sensorData, history }}>
      {children}
    </SensorContext.Provider>
  );
};

export const useSensor = () => useContext(SensorContext);