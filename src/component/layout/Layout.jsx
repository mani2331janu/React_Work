import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AppSidebar from "./AppSidebar";

export default function Layout() {
  // header: h-16; footer: h-12; sidebar: w-64
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <AppSidebar />

      {/* content wrapper gets left padding for sidebar and top/bottom padding for header/footer */}
      <div className="pt-16 pb-12 pl-64">
        {/* page scroller with card-like container to mimic the dashboard glass panels */}
        <main className="min-h-[calc(100vh-4rem-3rem)] overflow-y-auto p-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <section className="lg:col-span-3 rounded-2xl bg-white/70 backdrop-blur-md border border-white/30 shadow-sm p-6">
              <Outlet />
            </section>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
