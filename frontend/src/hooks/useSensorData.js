import { useEffect, useState } from "react";

const useSensorData = () => {
  const [sensorData, setSensorData] = useState({
    temperature: 72,
    vibration: 0.32,
    rpm: 3450,
    health: 98,
  });

  useEffect(() => {
    const socket = new WebSocket("ws://127.0.0.1:8000/ws/sensor");

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setSensorData(data);
    };

    socket.onerror = (error) => {
      console.error("WebSocket Error:", error);
    };

    return () => {
      socket.close();
    };
  }, []);

  return sensorData;
};

export default useSensorData;