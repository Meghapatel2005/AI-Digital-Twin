import AlertHistory from "../components/dashboard/AlertHistory";
import MainLayout from "../layouts/MainLayout";
import KPICards from "../components/dashboard/KPICards";
import SensorCharts from "../components/dashboard/SensorCharts";
import PredictionPanel from "../components/dashboard/PredictionPanel";
import AlertPanel from "../components/dashboard/AlertPanel";
import AIAlertPanel from "../components/dashboard/AIAlertPanel";
import LiveEventLog from "../components/dashboard/LiveEventLog";
import HealthGauge from "../components/dashboard/HealthGauge";
import RobotScene from "../components/3d/RobotScene";
import HealthTrendChart from "../components/charts/HealthTrendChart";

const Dashboard = () => {
  return (
    <MainLayout>

      <KPICards />

      <div className="mt-8">
        <SensorCharts />
      </div>
      <div className="mt-8">
        <RobotScene />
      </div>
      <div className="mt-8">
        <HealthTrendChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">

  <div>
    <PredictionPanel />
    <AlertHistory />
  </div>

  <HealthGauge />

  <AlertPanel />

  <AIAlertPanel />

</div>

<div className="mt-8">
  <LiveEventLog />
</div>

    </MainLayout>
  );
};

export default Dashboard;