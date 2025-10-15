import { useState } from "react";
import { Outlet } from "react-router";
import { Sheet, SheetContent } from "../ui/sheet";
import Sidebar from "./sidebar";
import TopBar from "./topbar";

function PageLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="bg-background text-foreground flex h-screen">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex">
        <Sidebar />
      </div>
      {/* Mobile Sidebar */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetContent side="right" className="w-64 p-0">
          <Sidebar onNavigate={() => setIsSidebarOpen(false)} />
        </SheetContent>
      </Sheet>
      {/* Main content area */}
      <div className="flex flex-1 flex-col">
        <TopBar onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)} />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
          {/* React router docs: https://reactrouter.com/start/declarative/routing */}
        </main>
      </div>
    </div>
  );
}

export default PageLayout;
