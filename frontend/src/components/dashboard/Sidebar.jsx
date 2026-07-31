import {
  FaTachometerAlt,
  FaRobot,
  FaChartLine,
  FaBell,
  FaCog,
} from "react-icons/fa";

const menuItems = [
  { icon: <FaTachometerAlt />, label: "Dashboard" },
  { icon: <FaRobot />, label: "Digital Twin" },
  { icon: <FaChartLine />, label: "Analytics" },
  { icon: <FaBell />, label: "Alerts" },
  { icon: <FaCog />, label: "Settings" },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 min-h-screen p-6">
      <h2 className="text-2xl font-bold text-cyan-400 mb-10">
        AI Twin
      </h2>

      <nav className="space-y-3">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className="w-full flex items-center gap-3 p-3 rounded-xl text-slate-300 hover:bg-cyan-500 hover:text-white transition"
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;