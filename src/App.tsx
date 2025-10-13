import { Outlet } from "react-router";
import Sidebar from "./components/layout/sidebar";
import TopBar from "./components/layout/topbar";

function App() {
  return (
    <div className="bg-background text-foreground flex h-screen">
      <Sidebar />
      {/* Main content area */}
      <div className="flex flex-1 flex-col">
        <TopBar />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
          {/* React router docs: https://reactrouter.com/start/declarative/routing */}
        </main>
      </div>
    </div>
  );
}

export default App;
