import AlertHistory from "../components/dashboard/AlertHistory";
import MainLayout from "../layouts/MainLayout";
import KPICards from "../components/dashboard/KPICards";
import SensorCharts from "../components/dashboard/SensorCharts";
import PredictionPanel from "../components/dashboard/PredictionPanel";
import PredictionTrendChart from "../components/charts/PredictionTrendChart";
import AlertPanel from "../components/dashboard/AlertPanel";
import AIAlertPanel from "../components/dashboard/AIAlertPanel";
import AIAlertHistory from "../components/dashboard/AIAlertHistory";
import LiveEventLog from "../components/dashboard/LiveEventLog";
import AnalyticsPanel from "../components/dashboard/AnalyticsPanel";
import HealthGauge from "../components/dashboard/HealthGauge";
import RobotScene from "../components/3d/RobotScene";
import HealthTrendChart from "../components/charts/HealthTrendChart";
import AIRiskSummary from "../components/dashboard/AIRiskSummary";

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
      <div className="mt-8">
  <PredictionTrendChart />
</div>
<div className="mt-8">
  <AIRiskSummary />
</div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">

  <div>
    <PredictionPanel />
    <AlertHistory />
  </div>

  <HealthGauge />
  <AlertPanel />

  <AIAlertPanel />
  <AIAlertHistory />

</div>

<div className="mt-8">
  <LiveEventLog />
</div>

<div className="mt-8">
  <AnalyticsPanel />
</div>

    </MainLayout>
  );
};

export default Dashboard;