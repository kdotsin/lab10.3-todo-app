import { useTheme } from "./context/ThemeContext";
import { themeStyles } from "./styles";
import { ThemeToggleButton } from "./components/ThemeToggleButton";
import { TodoInput } from "./components/TodoInput";
import { FilterButtons } from "./components/FilterButtons";
import { TodoList } from "./components/TodoList";

export default function App() {
  const { theme } = useTheme();
  const s = themeStyles[theme];

  return (
    <div className={`min-h-screen ${s.app}`}>
      <div className="mx-auto max-w-xl space-y-4 p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Todo App (Context API)</h1>
          <ThemeToggleButton />
        </div>
        <TodoInput />
        <FilterButtons />
        <TodoList />
      </div>
    </div>
  );
}