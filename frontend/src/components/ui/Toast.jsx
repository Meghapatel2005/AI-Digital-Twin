import { useNotification } from "../../context/NotificationContext";

export default function Toast() {
  const { notification } = useNotification();

  if (!notification) return null;

  const bgColor =
  notification.type === "normal"
    ? "#22c55e"
    : notification.type === "warning"
    ? "#f59e0b"
    : notification.type === "critical"
    ? "#ef4444"
    : "#3b82f6";
    
  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        background: bgColor,
        color: "white",
        padding: "14px 20px",
        borderRadius: "10px",
        fontWeight: "bold",
        zIndex: 9999,
        boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
        minWidth: "260px",
      }}
    >
      {notification.message}
    </div>
  );
}