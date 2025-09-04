// src/component/layout/Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AppSidebar from "./AppSidebar";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-1 mt-16 mb-12">
        {/* Sidebar */}
        <AppSidebar />

        {/* Page Content */}
        <main className="">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
