export function generateAlert(probability) {
  if (probability >= 70) {
    return {
      type: "Critical",
      color: "#ef4444",
      message: "🚨 Immediate maintenance required",
    };
  }

  if (probability >= 40) {
    return {
      type: "Warning",
      color: "#f59e0b",
      message: "⚠️ Machine condition degrading",
    };
  }

  return {
    type: "Normal",
    color: "#22c55e",
    message: "✅ Machine operating normally",
  };
}