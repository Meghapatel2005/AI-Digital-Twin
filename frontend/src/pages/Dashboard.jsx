import KPICards from "../components/dashboard/KPICards";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-950 p-8">

      <h1 className="text-4xl font-bold text-cyan-400">
        AI Digital Twin Dashboard
      </h1>

      <p className="text-slate-400 mt-2">
        Enterprise Predictive Maintenance Platform
      </p>

      <div className="mt-10">
        <KPICards />
      </div>

    </div>
  );
};

export default Dashboard;