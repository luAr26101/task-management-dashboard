import { Button } from "./components/ui/button";
import { cn } from "./lib/utils";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button variant="link" size="sm" className={cn("cursor-pointer")}>
        Click me
      </Button>
    </div>
  );
}

export default App;
