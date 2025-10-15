import { BrowserRouter, Route, Routes } from "react-router";
import PageLayout from "./components/layout/page-layout";
import Dashboard from "./pages/dashboard";
import Projects from "./pages/projects";
import Settings from "./pages/settings";
import Tasks from "./pages/tasks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
