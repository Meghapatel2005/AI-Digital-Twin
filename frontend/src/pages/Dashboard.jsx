function Dashboard() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-white p-8">

      <h1 className="text-4xl font-bold text-cyan-400">
        AI Digital Twin Dashboard
      </h1>

      <p className="text-slate-400 mt-2">
        Enterprise Predictive Maintenance Platform
      </p>

      <div className="grid grid-cols-4 gap-6 mt-10">

        <div className="bg-slate-800 rounded-xl p-6">
          Temperature
        </div>

        <div className="bg-slate-800 rounded-xl p-6">
          Vibration
        </div>

        <div className="bg-slate-800 rounded-xl p-6">
          Motor Speed
        </div>

        <div className="bg-slate-800 rounded-xl p-6">
          AI Prediction
        </div>

      </div>

    </div>
  );
}

export default Dashboard;