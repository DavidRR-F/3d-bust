import CanvasModel from "./canvas";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="app w-full h-96 dark:bg-dark-1">
      <ThemeToggle />
      <CanvasModel />
    </div>
  );
}

export default App;
