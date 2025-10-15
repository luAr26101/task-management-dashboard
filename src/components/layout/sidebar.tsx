import { cn } from "@/lib/utils";
import { CheckSquare, FolderKanban, Home, Settings } from "lucide-react";
import { NavLink } from "react-router";

const navItems = [
  {
    name: "Dashboard",
    icon: Home,
    path: "/",
  },
  {
    name: "Projects",
    icon: FolderKanban,
    path: "/projects",
  },
  {
    name: "Tasks",
    icon: CheckSquare,
    path: "/tasks",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

type SidebarProps = {
  onNavigate?: () => void;
};

function Sidebar({ onNavigate }: SidebarProps) {
  return (
    <aside className="bg-card md:border-border flex w-full flex-col md:w-64 md:border-r">
      <div className="p-6 text-xl font-semibold">Task Manager</div>
      <nav className="flex flex-col space-y-1 px-2">
        {navItems.map(({ name, icon: Icon, path }) => (
          <NavLink
            key={name}
            to={path}
            onClick={onNavigate}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent hover:text-accent-foreground",
              )
            }
          >
            <Icon className="size-5" />
            {name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
