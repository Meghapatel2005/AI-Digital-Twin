import MainLayout from "../layouts/MainLayout";
import KPICards from "../components/dashboard/KPICards";
import SensorCharts from "../components/dashboard/SensorCharts";
import PredictionPanel from "../components/dashboard/PredictionPanel";
import AlertPanel from "../components/dashboard/AlertPanel";

const Dashboard = () => {
  return (
    <MainLayout>

      <KPICards />

      <div className="mt-8">
        <SensorCharts />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <PredictionPanel />
        <AlertPanel />
      </div>

    </MainLayout>
  );
};

export default Dashboard;