import { cn } from "@/lib/utils";
import {
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  FolderKanban,
  Home,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

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
  collapsed?: boolean;
  onToggleCollapse?: () => void;
};

function Sidebar({
  onNavigate,
  collapsed = false,
  onToggleCollapse,
}: SidebarProps) {
  return (
    <aside
      className={cn(
        "bg-card md:border-border flex w-full flex-col transition-all md:border-r",
        collapsed ? "items-center md:w-16" : "md:w-64",
      )}
    >
      <div className="flex w-full items-center justify-between p-4">
        {!collapsed && (
          <div className="text-lg font-semibold">Task Manager</div>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="hidden md:flex"
          onClick={onToggleCollapse}
        >
          {collapsed ? (
            <ChevronRight className="size-4" />
          ) : (
            <ChevronLeft className="size-4" />
          )}
        </Button>
      </div>
      <nav className="flex w-full flex-col space-y-1 px-2">
        {navItems.map(({ name, icon: Icon, path }) => {
          const link = (
            <NavLink
              key={name}
              to={path}
              onClick={onNavigate}
              className={cn(
                "text-muted-foreground hover:bg-accent hover:text-accent-foreground flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200",
                collapsed && "justify-center px-0",
              )}
            >
              <Icon className="size-5" />
              {!collapsed && <span>{name}</span>}
            </NavLink>
          );

          return collapsed ? (
            <Tooltip key={name}>
              <TooltipTrigger asChild>{link}</TooltipTrigger>
              <TooltipContent side="right">{name}</TooltipContent>
            </Tooltip>
          ) : (
            link
          );
        })}
      </nav>
      <div className="mt-auto mb-4" />
    </aside>
  );
}

export default Sidebar;
