import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";

function MainLayout() {
  return (
    <div style={{ display: "flex", height: "100vh", background: "#0B1220" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div style={{ padding: "20px", color: "white" }}>
          Dashboard Content
        </div>
      </div>
    </div>
  );
}

export default MainLayout;