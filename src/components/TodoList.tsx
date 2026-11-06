import { useTodos } from "../context/TodoContext";
import { useFilter } from "../context/FilterContext";
import { TodoItem } from "./TodoItem";
import { useTheme } from "../context/ThemeContext";
import { themeStyles } from "../styles";

export function TodoList() {
  const { todos, clearCompleted } = useTodos();
  const { filter } = useFilter();
  const { theme } = useTheme();
const s = themeStyles[theme];

  const visibleTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const hasCompleted = todos.some((todo) => todo.completed);

  if (todos.length === 0) {
    return <p>No todos yet! Add one above.</p>;
  }

  return (
    <div className="space-y-3">
      {visibleTodos.length === 0 ? (
        <p>No {filter} todos.</p>
      ) : (
        <ul className="space-y-2">
          {visibleTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
      <button
        onClick={clearCompleted}
        disabled={!hasCompleted}
        className={`rounded border px-3 py-1 disabled:opacity-50 ${s.button}`}
      >
        Clear completed
      </button>
    </div>
  );
}