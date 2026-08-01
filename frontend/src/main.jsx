import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { SensorProvider } from "./context/SensorContext";
import { NotificationProvider } from "./context/NotificationContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SensorProvider>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </SensorProvider>
  </React.StrictMode>
);