let alertHistory = [];

export function addAlert(alert) {
  alertHistory.unshift({
    ...alert,
    time: new Date().toLocaleTimeString(),
  });

  if (alertHistory.length > 5) {
    alertHistory.pop();
  }
}

export function getAlerts() {
  return alertHistory;
}