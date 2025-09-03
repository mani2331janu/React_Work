import { Outlet } from "react-router-dom";
import AppSidebar from "./AppSideBar";
export default function Layout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Static sidebar */}
      <AppSidebar />

      {/* Dynamic page content */}
      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}
