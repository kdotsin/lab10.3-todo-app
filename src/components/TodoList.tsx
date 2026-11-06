import { useTodos } from "../context/TodoContext";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const { todos, clearCompleted } = useTodos();
  const hasCompleted = todos.some((todo) => todo.completed);

  if (todos.length === 0) {
    return <p>No todos yet! Add one above.</p>;
  }

  return (
    <div className="space-y-3">
      <ul className="space-y-2">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <button
        onClick={clearCompleted}
        disabled={!hasCompleted}
        className="rounded border px-3 py-1 disabled:opacity-50"
      >
        Clear completed
      </button>
    </div>
  );
}