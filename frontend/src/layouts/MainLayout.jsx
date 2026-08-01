import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex bg-slate-950 min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8">
        <Navbar />

        <div className="mt-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;