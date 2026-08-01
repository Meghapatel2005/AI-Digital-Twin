export async function showNotification(title, body) {
  if (!("Notification" in window)) return;

  if (Notification.permission === "default") {
    await Notification.requestPermission();
  }

  if (Notification.permission === "granted") {
    new Notification(title, {
      body,
      icon: "/favicon.svg",
    });
  }
}