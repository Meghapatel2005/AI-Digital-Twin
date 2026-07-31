import Card from "../ui/Card";

const alerts = [
  "Temperature exceeded safe limit",
  "Motor vibration increasing",
  "Maintenance scheduled tomorrow",
];

const AlertPanel = () => {
  return (
    <Card title="Recent Alerts">
      <div className="space-y-3">

        {alerts.map((alert, index) => (
          <div
            key={index}
            className="bg-slate-700 rounded-lg p-3 text-slate-200"
          >
            {alert}
          </div>
        ))}

      </div>
    </Card>
  );
};

export default AlertPanel;