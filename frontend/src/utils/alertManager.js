let lastAlertType = null;

export function shouldStoreAlert(alert) {
  if (!alert) return false;

  if (alert.type === lastAlertType) {
    return false;
  }

  lastAlertType = alert.type;
  return true;
}