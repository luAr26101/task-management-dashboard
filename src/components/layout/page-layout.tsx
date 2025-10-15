import { cn } from "@/lib/utils";
import { useState } from "react";
import { Outlet } from "react-router";
import { Sheet, SheetContent } from "../ui/sheet";
import Sidebar from "./sidebar";
import TopBar from "./topbar";

function PageLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Persist collapse state - NOT WORKING
  // useEffect(() => {
  //   const saved = localStorage.getItem("sidebarCollapsed");
  //   console.log(saved === "true");
  //   if (saved) setIsCollapsed(saved === "true");
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("sidebarCollapsed", String(isCollapsed));
  // }, [isCollapsed]);

  return (
    <div className="bg-background text-foreground flex h-screen">
      {/* Desktop Sidebar */}
      <div
        className={cn(
          "hidden transition-all duration-300 md:flex",
          isCollapsed ? "w-16" : "w-64",
        )}
      >
        <Sidebar
          collapsed={isCollapsed}
          onToggleCollapse={() => setIsCollapsed((prev) => !prev)}
        />
      </div>
      {/* Mobile Sidebar */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetContent
          side="left"
          className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left w-64 p-0"
        >
          <Sidebar onNavigate={() => setIsSidebarOpen(false)} />
        </SheetContent>
      </Sheet>
      {/* Main content area */}
      <div className="flex flex-1 flex-col overflow-hidden">
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
