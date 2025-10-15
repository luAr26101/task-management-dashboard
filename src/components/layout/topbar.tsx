import { Bell, MenuIcon } from "lucide-react";
import { Button } from "../ui/button";

type TopBarProps = {
  onToggleSidebar: () => void;
};

function TopBar({ onToggleSidebar }: TopBarProps) {
  return (
    <header className="border-border bg-card flex items-center justify-between border-b px-6 py-3">
      <div className="flex items-center gap-3 md:hidden">
        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" onClick={onToggleSidebar}>
          <MenuIcon className="size-5" />
        </Button>
      </div>
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon">
          <Bell className="size-5" />
        </Button>
        <div className="bg-muted h-8 w-8 rounded-full" />
      </div>
    </header>
  );
}

export default TopBar;
