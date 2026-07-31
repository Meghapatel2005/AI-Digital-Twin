const Navbar = () => {
  return (
    <header className="flex justify-between items-center bg-slate-900 border border-slate-800 rounded-xl px-6 py-4">
      <div>
        <h1 className="text-2xl font-bold text-white">
          AI Digital Twin Dashboard
        </h1>

        <p className="text-slate-400 text-sm">
          Enterprise Predictive Maintenance Platform
        </p>
      </div>

      <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center font-bold text-white">
        M
      </div>
    </header>
  );
};

export default Navbar;